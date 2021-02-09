FROM node:latest

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /home/node/app
# Workaround
RUN chmod a+rwx -R /home/node/app

ARG UNAME
ARG UID
ARG GID

RUN groupadd -g $GID -o $UNAME
RUN useradd -M -u $UID -g $GID -o -s /bin/bash $UNAME

RUN usermod -a -G node $UNAME
RUN usermod -a -G $UNAME node 

RUN mkdir /home/node/app/node_modules && chown -R $UID:$GID /home/node/app/node_modules
RUN mkdir /home/node/app/.next && chown -R $UID:$GID /home/node/app/.next

USER $UNAME

RUN mkdir ~/.npm-global
RUN NPM_CONFIG_PREFIX=~/.npm-global

# Installing dependencies
COPY --chown=$UID:$GID package*.json ./
RUN npm install

# Copying source files
COPY --chown=$UID:$GID . .

# Building app
RUN npm run build

# Running the app
CMD [ "npm", "start" ]