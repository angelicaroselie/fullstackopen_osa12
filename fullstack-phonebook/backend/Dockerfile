FROM node:16

WORKDIR /usr/src/app

COPY --chown=node:node . .

# npm ci is used for production
RUN npm ci 

USER node

EXPOSE 5001

CMD npm start
