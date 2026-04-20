FROM nginx:alpine

# удаляем стандартный сайт nginx
RUN rm -rf /usr/share/nginx/html/*

# копируем наш сайт
COPY app/ /usr/share/nginx/html/

# открываем порт
EXPOSE 80
