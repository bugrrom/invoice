FROM node:14.15.0-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN apk add --no-cache udev ttf-freefont chromium git
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true
ENV CHROMIUM_PATH /usr/bin/chromium-browser

RUN npm install

COPY . .
