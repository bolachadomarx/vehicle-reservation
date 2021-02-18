# Stage 1
FROM node:12 as node
WORKDIR /app
COPY package*.json /app/
RUN npm ci
COPY . /app
RUN npm run build

# Stage 2
FROM nginx:alpine
VOLUME /var/cache/nginx
COPY --from=node /app/dist/vehicle-reservation /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf