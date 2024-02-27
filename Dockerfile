FROM node:18.18.0

WORKDIR /app-backend

COPY package* .

RUN yarn

COPY . .

ENTRYPOINT [ "yarn", "run" ]
CMD [ "dev" ]