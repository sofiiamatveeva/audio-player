FROM node:18
WORKDIR /audio-player/

COPY ./package.json /audio-player/
RUN npm install

COPY ./webpack.config.js /audio-player/
COPY ./src /audio-player/src

EXPOSE 4200

CMD ["npm", "run", "serve"]