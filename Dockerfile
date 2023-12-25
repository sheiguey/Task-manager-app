FROM node:lts-alpine3.18

WORKDIR /app

COPY package*.json ./

COPY client/package*.json client/
RUN npm run install-client 

RUN npm install -g @angular/cli


COPY server/package*.json server/
RUN npm run install-server --omit=dev

COPY server/ server/

COPY client/ client/
RUN npm run build-client

USER node
CMD ["npm","run","start-server"]
EXPOSE 8000