FROM node:18

RUN mkdir -p /home/app

WORKDIR /home/app

COPY ./app/package*.json ./

RUN npm i

EXPOSE 3000

CMD ["npm", "run", "start"]