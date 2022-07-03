FROM node:12

RUN mkdir -p /srv/app/frontend && chown -R node:node /srv/app/frontend
WORKDIR /srv/app/frontend

COPY . .
COPY --chown=node:node . .

USER node