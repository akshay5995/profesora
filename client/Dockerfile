FROM node:10-alpine as builder
WORKDIR /app
COPY . ./
RUN yarn && yarn build

FROM  nginx:1.17.10
COPY --from=builder /app/default.conf.template /etc/nginx/conf.d/default.conf.template
COPY --from=builder /app/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist /usr/share/nginx/html
CMD /bin/bash -c "envsubst '\$PORT' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf" && nginx -g 'daemon off;'
