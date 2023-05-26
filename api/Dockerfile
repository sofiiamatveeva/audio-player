FROM node:18

WORKDIR /audio-player

COPY ./package.json /audio-player/
RUN npm install

COPY ./api /audio-player/api

EXPOSE 3000
CMD [ "npm", "run", "api" ]