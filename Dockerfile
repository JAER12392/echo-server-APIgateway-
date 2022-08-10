FROM node:12-alpine

RUN mkdir -p /home/ubuntu/echo-server/node_modules && chown -R node:node /home/ubuntu/echo-server

WORKDIR /home/ubuntu/echo-server/app.js

COPY package*.json ./

USER node

RUN npm install

COPY . /home/ubuntu/echo-sever

CMD [ "npm", "start" ]
