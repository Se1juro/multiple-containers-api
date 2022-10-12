FROM node:16

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json /usr/src/app

USER node

RUN npm install

COPY . /usr/src/app

EXPOSE 3006

CMD [ "npm", "start" ]

