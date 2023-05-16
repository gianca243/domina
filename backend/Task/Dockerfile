FROM node:18

RUN mkdir -p /home/app
COPY . /home/app
WORKDIR /home/app

EXPOSE 3001

CMD ["node", "./backend/Task/app.js"]