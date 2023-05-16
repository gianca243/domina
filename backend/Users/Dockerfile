FROM node:18

RUN ls -la
RUN mkdir -p /home/app
COPY . /home/app
WORKDIR /home/app
RUN ls -la

EXPOSE 3000

CMD ["node", "./backend/Users/app.js"]