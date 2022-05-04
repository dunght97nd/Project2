# # 1. Build
# FROM node:16-alpine as builder
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . .
# RUN npm run build
# # CMD [ "node" ]

# # 2. Serve Production
# FROM nginx:stable-alpine
# COPY --from=builder /app/build /usr/share/nginx/html
# COPY --from=builder /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf

# EXPOSE 3000
# CMD ["nginx", "-g", "daemon off;"]

# 1. Build
FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD [ "npm", "start" ]
