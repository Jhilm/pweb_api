FROM node:18-alpine3.15

RUN apk -U upgrade

RUN mkdir -p /home/app

WORKDIR /home/app

COPY ./app/package.json /home/app

RUN npm i && \
    npm i nodemon -g

EXPOSE 3000

CMD ["npm", "run", "dev"]