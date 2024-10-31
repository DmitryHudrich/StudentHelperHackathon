FROM node:17-slim as builder

RUN apt update
RUN apt install git python make g++ gcc -y
RUN apt-get install build-essential -y

WORKDIR /usr/src/

COPY package.json .
COPY package-lock.json .

RUN npm install --legacy-peer-deps

COPY . .

ARG REACT_APP_NODE_ENV=production
ENV REACT_APP_NODE_ENV=${REACT_APP_NODE_ENV}

RUN npm run build

CMD npm run serve
