FROM node:16

WORKDIR /usr/src/app

COPY package*.json .
COPY node_modules .

RUN npm install

COPY . .

EXPOSE 3006
CMD [ "npm", "start" ]

