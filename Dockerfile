FROM node:lts-alpine3.18

WORKDIR /app

COPY client/package*.json client/
RUN npm install --prefix client --omit=dev

COPY backend/package*.json server/
RUN npm install --prefix server --omit=dev

COPY client/ client/
RUN npm run build --prefix client

COPY server/ server/

USER node

CMD ["npm","start","--prefix","server"]

EXPOSE 10000