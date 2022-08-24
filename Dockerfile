FROM node:14.2.0-alpine3.10
WORKDIR /usr/src/express-server-typescript
COPY package*.json ./
RUN npm install
RUN npm run migrate:latest && npm run seed:run
COPY /build ./build/
COPY /.env ./
EXPOSE 8080
ENTRYPOINT ["npm", "start"]
