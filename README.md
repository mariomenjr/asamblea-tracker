English version [here](./.github/en/README.md).

# Asamblea Viewer

> Por el momento, puedes acceder a la versión temprana de la plataforma haciendo click en este [enlace](http://149.28.67.188:3000/).

## Pre-requisitos

-   Node v10.16+
-   NPM v6.9.0+
-   MongoDB Server\*, consíguelo [aquí](https://fastdl.mongodb.org/win32/mongodb-win32-x86_64-2012plus-4.2.2-signed.msi)
-

> \* Abriendo una cuenta en [mlab.com](mlab.com) puedes ignorar este requerimiento

## Instalación

    ~> git clone https://github.com/mariomenjr/asamblea-viewer.git
    ~> cd asamblea-viewer
    ~> npm install

## Desarrollo

El proyecto está construído haciendo uso del framework de desarrollo [Next.js](https://nextjs.org/). Es una implementación server-side muy bien realizada de la famosísima librería front-end de Facebook, [ReactJS](https://reactjs.org/). Para producción utilizo [Docker](https://www.docker.com/).

Cuando ya tengas seteado la base de datos (no es necesario que crees ninguna collección. El sistema se encargará de ello automáticamente). Debes crear un archivo .env, en el root del proyecto, con las siguientes variables:

    //.env file
    MONGO_USER=nombre_de_usuario_a_db
    MONGO_PASS=password_de_usuario_a_db
    MONGO_DB=nombre_de_db
    MONGO_HOST=host_name_o_dirección_ip
    MONGO_PORT=puerto_de_mongo

Ahora sí, ya que tienes la base de datos lista, puedes simplemente ejecutar:

    ~> npm run dev

![npm run dev](./assets/npm.run.dev.png)

### Depuración

Por otro lado, si usás Visual Studio Code, puedes tomar ventaja de las opciones de depuración pre-configurada.

![npm run dev](./assets/debug.tools.png)

## Contribuir

Si eres desarrollador y quieres aportar al proyecto, antes que nada, muchísimas gracias. Cualquier sugerencia es bienvenida.

Lee [CONTRIBUTING.md](./.github/es/CONTRIBUTING.md)

## Enlaces

-   👀 [Platform Preview](http://149.28.67.188:3000/)
-   😊 [Tweet hi!](https://twitter.com/mariomenjr)
-   🌎 [Asamblea Legislativa: Diputado/as](https://www.asamblea.gob.sv/diputados)

## Licencia

El código de este proyecto está bajo [licencia MIT](./LICENSE).
