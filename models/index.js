const mongoose = require("mongoose");

const Attendance = require("./Attendance.model");
const Congress = require("./Congress.model");
const Plenary = require("./Plenary.model");
const Deputy = require("./Deputy.model");
const Career = require("./Career.model");
const Party = require("./Party.model");

const connectDatabase = () => {
    const {
        MONGO_USER,
        MONGO_PASS,
        MONGO_HOST,
        MONGO_DB,
        MONGO_AUTH_MECHANISM,
    } = process.env;

    return mongoose.connect(
        `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@${MONGO_HOST}/${MONGO_DB}?retryWrites=true&w=majority`,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            authMechanism: MONGO_AUTH_MECHANISM || `SCRAM-SHA-1`,
        }
    );
};

module.exports = {
    connectDatabase,
    models: { Attendance, Congress, Plenary, Deputy, Career, Party },
};
