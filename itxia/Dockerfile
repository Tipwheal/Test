FROM nginx

ADD ./dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

RUN /bin/bash -c 'echo init ok'
