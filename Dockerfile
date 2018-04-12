FROM node:8.4
COPY . /app
WORKDIR /app
RUN yarn --registry=https://registry.npm.taobao.org
EXPOSE 8090