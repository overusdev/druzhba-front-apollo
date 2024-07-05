FROM node:lts as build-stage
WORKDIR /nuxtapp
COPY . .
RUN npm install
RUN npm run build
RUN rm -rf node_modules && \
  NODE_ENV=production npm install \
  --prefer-offline \
  --pure-lockfile \
  --non-interactive \
  --production=true
FROM node:lts as prod-stage
WORKDIR /nuxtapp
COPY --from=build-stage /nuxtapp/.output/  ./.output/

FROM nginx:1.23.1-alpine
RUN rm -rf /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d


CMD [ "node", ".output/server/index.mjs" ]





# FROM node:17-alpine as build-stage
# FROM node:latest as build-stage

# RUN mkdir -p /usr/src/nuxt-app
# WORKDIR /usr/src/nuxt-app
# COPY . .

# RUN npm ci && npm cache clean --force
# RUN npm run build

# ENV NUXT_HOST=0.0.0.0
# ENV NUXT_PORT=3000

# FROM nginx:1.25.3 as production-stage
# RUN mkdir /var/www/

# # COPY --from=build-stage /usr/src/nuxt-app/.output/ /var/www/
# COPY --from=build-stage /usr/src/nuxt-app/.output/ ./.output/
# COPY ./nginx.conf /etc/nginx/nginx.conf

# RUN nginx -t

# EXPOSE 3000 

# ENTRYPOINT ["node", ".output/server/index.mjs"]

# FROM node:latest as build-stage
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY ./ .
# RUN npm run build

# FROM nginx:1.25.3 as production-stage
# RUN mkdir /app
# COPY --from=build-stage /app/dist /app
# COPY ./nginx.conf /etc/nginx/nginx.conf

# RUN nginx -t

# EXPOSE 8080

# ENV HOST=0.0.0.0 PORT=8080 NODE_ENV=production

# # COPY --from=build-stage /app/.output /app/.output
# COPY --from=build-stage /app/.output ./.output/

# CMD [ "node", "./.output/server/index.mjs" ]