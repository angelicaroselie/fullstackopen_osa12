FROM node:16 

WORKDIR /usr/src/app

COPY . .

ENV REACT_APP_BACKEND_URL=http://localhost:5001

# npm ci is used for production
RUN npm ci

RUN npm run build

RUN npm install -g serve

EXPOSE 3000

# npm start is the command to start the application in development mode
CMD ["npm", "run", "start", "serve", "build"]