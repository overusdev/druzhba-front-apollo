FROM node:21-alpine3.17

RUN mkdir -p /var/www/html/druzhba-nn.site
WORKDIR /var/www/html/druzhba-nn.site
COPY package*.json .

RUN npm install
RUN npm run build

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

EXPOSE 3000

CMD ["npm", "run", "dev"]

# ENTRYPOINT ["node", ".output/server/index.mjs"]