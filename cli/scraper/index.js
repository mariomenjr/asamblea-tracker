require("dotenv").config();
const mongoose = require("mongoose");
const modelscrape = require("modelscrape");

const { VALID_ARGS, COMPARING } = require("./config");
const args = require("./args");
const option = args.interpret();

const congressScraper = require("./models/congress.scraper.json");
const profileScraper = require("./models/profile.scraper.json");
const partyScraper = require("./models/parties.scraper.json");
const attendanceScraper = require("./models/agenda.scraper.json");

const {
    congressController,
    deputyController,
    partyController,
    agendaController,
} = require("./controllers");

const { connectDatabase } = require("../../models");

async function resetCollections() {
    if (process.env.NODE_ENV === "development") {
        try {
            const collections = await mongoose.connection.db
                .listCollections()
                .toArray();
            await Promise.all(
                collections
                    .filter(
                        (collection) => !collection.name.startsWith("system.")
                    )
                    .map((collection) =>
                        mongoose.connection.collection(collection.name).drop()
                    )
            );
        } catch (error) {
            console.error(error);
        }
    }
}

connectDatabase()
    .then(async function (conn) {
        switch (option.name) {
            case VALID_ARGS.DEFAULT:
                await resetCollections();

                const congressResult = (
                    await modelscrape(congressScraper)
                )[0][0];
                const { members } = await congressController.fillCongress(
                    congressResult
                );

                const partyResult = (await modelscrape(partyScraper))[0][0];
                const parties = await partyController.fillParties(partyResult);

                const profsResult = await Promise.all(
                    members.map((member) => {
                        const _profileScraper = { ...profileScraper };
                        _profileScraper.queryObjects[0].endpoint =
                            member.profileEndpoint;

                        return modelscrape(profileScraper);
                    })
                );

                await Promise.all(
                    profsResult.map((profResult, index) =>
                        deputyController.addDeputy(
                            profResult[0],
                            members[index],
                            parties,
                            index
                        )
                    )
                );
                break;

            case VALID_ARGS.AGENDA:
                const congress = await conn.models.Congress.findOne();
                const plenaries = await conn.models.Plenary.find({
                    congress: congress._id,
                });

                const lastPlenary = plenaries
                    .sort((a, b) => a.number - b.number)
                    .slice(-1)[0];
                const lastPlenaryNumber =
                    lastPlenary === undefined ? 0 : lastPlenary.number;
                const sessionDiff = congress.nextPlenary - lastPlenaryNumber;

                await conn.models.Plenary.insertMany(
                    [...Array(sessionDiff)].map((sessionNumber, i) => {
                        sessionNumber = lastPlenaryNumber + i + 1;
                        const lastIndex = plenaries.push(
                            new conn.models.Plenary({
                                number: sessionNumber,
                                type: "Ordinaria",
                                congress: congress._id,
                            })
                        );
                        return plenaries[lastIndex - 1];
                    })
                );

                const deputies = await conn.models.Deputy.find({
                    congress: congress._id,
                });

                for (const plenary of plenaries) {
                    try {
                        if (plenary.attendanceEndpoint === undefined) {
                            const awaited = await modelscrape({
                                ...attendanceScraper,
                                queryObjects: [
                                    {
                                        ...attendanceScraper.queryObjects[0],
                                        endpoint: attendanceScraper.queryObjects[0].endpoint
                                            .replace(`:session`, plenary.number)
                                            .replace(
                                                `:congress-period`,
                                                congress.slug
                                            ),
                                    },
                                ],
                            });

                            plenary.attendanceEndpoint = awaited[0][0][0].props.fileUrls
                                .filter(
                                    (prop) =>
                                        prop.value.shift().toUpperCase() ===
                                        COMPARING.AGENDA.ATTENDANCE_LINK_TEXT
                                )
                                .shift().attrs.href;

                            const attendance = await agendaController.processAttendance(
                                {
                                    deputies,
                                    uri: `${attendanceScraper.url}${plenary.attendanceEndpoint}`,
                                }
                            );

                            await conn.models.Plenary.findOneAndUpdate(
                                { _id: plenary._id },
                                {
                                    attendanceEndpoint:
                                        plenary.attendanceEndpoint,
                                }
                            );
                            await conn.models.Attendance.insertMany(
                                attendance.map(
                                    (at) =>
                                        new conn.models.Attendance({
                                            present: at.present,
                                            deputy: at.deputy._id,
                                            plenary: plenary._id,
                                        })
                                )
                            );
                        }
                    } catch (error) {
                        console.error({ session: plenary.number, error });
                    }
                }
                break;

            default:
                throw new Error(`Command "${option.name}" not implemented`);
        }

        console.info(option.report.onSuccess());
        process.exit(0);
    })
    .catch(function (err) {
        console.error(option.report.onError(err), JSON.stringify(err));
        process.exit(1);
    });
