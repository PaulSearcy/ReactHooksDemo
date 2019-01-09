FROM node:11.6.0

WORKDIR /ReactHooks
COPY ./ /ReactHooks

RUN npm i && npx webpack --mode production

CMD node server.js