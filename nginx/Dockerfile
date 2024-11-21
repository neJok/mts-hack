FROM nginx:stable-alpine

RUN rm /etc/nginx/conf.d/default.conf

COPY ./nginx.conf.template /etc/nginx/nginx.conf.template

EXPOSE 80

# Стартуем Nginx в фоне
CMD envsubst '$SERVER_NAME' < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf && nginx -g 'daemon off;'