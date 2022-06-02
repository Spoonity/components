# use node as the base image
FROM node:16-alpine3.11 as node
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

RUN npm install
COPY . /app
RUN yarn build-storybook

#NGINX configuration to have only the compiled app, ready for production with Nginx
FROM nginx:1.19.4-alpine
COPY --from=node /app/storybook-static /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf

ENTRYPOINT ["nginx", "-g", "daemon off;"]
