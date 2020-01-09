Back to [root](/)

# Asamblea Viewer

> At this moment, you can access the early version of the platform by clicking on the following [link](http://149.28.67.188:3000/).

## Pre-requirements

-   Node v10.16+
-   NPM v6.9.0+
-   MongoDB Server\*, get it [here](https://fastdl.mongodb.org/win32/mongodb-win32-x86_64-2012plus-4.2.2-signed.msi)
-

> \* By opening an account at [mlab.com](mlab.com), you can ignore this requirement

## Installation

    ~> git clone https://github.com/mariomenjr/asamblea-viewer.git
    ~> cd asamblea-viewer
    ~> npm install

## Development

This project is built using [Next.js](https://nextjs.org/). It's a server-side implementation of the popular Facebook's library, [ReactJS](https://reactjs.org/). It's deploy to production with [Docker](https://www.docker.com/).

When you have created the database (It's not necessary to create any collection. The system will do it for you). You must create an `.env` file in the root of the project, include the following variables inside:

    //.env file
    MONGO_USER=your_db_username
    MONGO_PASS=your_db_password
    MONGO_DB=your_db_name
    MONGO_HOST=host_name
    MONGO_PORT=mongo_port

Now, you can run:

    ~> npm run dev

![npm run dev](../../assets/npm.run.dev.png)

### Debugging

If you are a happy user of Visual Studio Code, take advantage of the pre-configured debug settings.

![npm run dev](../../assets/debug.tools.png)

## Contrinute

Si eres desarrollador y quieres aportar al proyecto, antes que nada, muchísimas gracias. Cualquier sugerencia es bienvenida. Estaré muy pendiente de las Pull Requests.

## Links

-   👀 [Platform Preview](http://149.28.67.188:3000/)
-   😊 [Tweet hi!](https://twitter.com/mariomenjr)
-   🌎 [Asamblea Legislativa: Diputado/as](https://www.asamblea.gob.sv/diputados)
