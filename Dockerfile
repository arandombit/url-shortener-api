FROM alpine:latest

WORKDIR /app
COPY . /app

RUN apk update && apk upgrade && apk add nodejs npm && npm install

EXPOSE 8080

CMD ["npm", "start"]
