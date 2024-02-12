FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm install

# RUN npm run build

RUN npm install bcrypt


CMD ["npm", "run", "start:dev"]
