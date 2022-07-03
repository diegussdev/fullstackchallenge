FROM node:12

RUN mkdir -p /srv/app/backend && chown -R node:node /srv/app/backend
WORKDIR /srv/app/backend

COPY . .
COPY --chown=node:node . .

USER node