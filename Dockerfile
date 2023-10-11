FROM node:18-alpine

WORKDIR /app

COPY package.json .

RUN npm install

# Copy local code to the container image.
COPY . .

EXPOSE 3000


CMD [ "npm", "run", "start" ]