FROM alpine:latest

WORKDIR /app
COPY . /app

RUN apk update && apk upgrade && apk add g++ nodejs npm python3 make && npm install

EXPOSE 8080

CMD ["npm", "start"]
