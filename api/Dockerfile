FROM node:18

WORKDIR /audio-player

COPY ./package.json /audio-player
COPY ./package-lock.json /audio-player
COPY . /audio-player/api

RUN cd /audio-player && npm install
EXPOSE 3000
CMD [ "npm", "run", "dev" ]