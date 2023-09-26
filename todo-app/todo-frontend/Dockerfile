FROM node:16 AS test

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci


# Copy the source code
COPY . .

# Run tests with CI=true
RUN CI=true npm test


FROM node:16 AS build

WORKDIR /usr/src/app

COPY . .

ENV REACT_APP_BACKEND_URL=http://localhost:3000

RUN npm ci

RUN npm run build

# 12.13 - Expose port 80 for the React app
RUN npm install -g serve

EXPOSE 5001

# 12.13 - Run the React app
CMD ["serve", "build"]