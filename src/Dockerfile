# grabs base image from Dockerhub
# FROM node:18-alpine
FROM node:14.17.3-buster

WORKDIR /code

# copy in packages & dependencies
COPY package.json ./code/package.json
COPY package-lock.json ./code/package-lock.json

# install packages and dependencies
RUN npm install

# copy source code into image
COPY . .

# start application
CMD [ "npm", "run", "start" ]