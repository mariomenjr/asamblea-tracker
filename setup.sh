#!/bin/bash

USR_ENV=$1
COMPOSE=false

export AT_USER=$(whoami)
export AT_UID=$(id -u)
export AT_GID=$(id -g)

if [ -z $USR_ENV ]
then
    echo ">> Please specify either production or development as an environment"
else
    if [ $USR_ENV = "production" ]
    then
        export PORT=80
        export DOCKERFILE=Dockerfile

        COMPOSE=true
    elif [ $USR_ENV = "development" ]
    then
        export PORT=3000
        export DOCKERFILE=Dockerfile.dev

        COMPOSE=true
    fi

    if [ -f .env ]
    then
        echo "Preparing docker-compose file..."

        if [ $COMPOSE = true ]
        then
            # docker-compose -f docker/docker-compose.yml config
            docker-compose -f ./docker/docker-compose.yml up --build --remove-orphans -d
        else
            echo ">> Provided environment not supported"
        fi
    else
        echo ">> You need to create an .env file"
    fi
fi

# echo $MY_ENV