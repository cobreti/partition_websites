FROM node:8.2

COPY server/nodejs /var/www/websites/server/nodejs
COPY web /var/www/websites/web

RUN cd  /var/www/websites/server/nodejs && npm install
RUN cd /var/www/websites/web && npm install

WORKDIR /var/www/websites/server/nodejs
#ENTRYPOINT ["node", "dist/main.js"]
