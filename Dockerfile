FROM node:16 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

FROM nginx:stable-alpine
COPY --from=builder /app/dist/desafio-tecnico /usr/share/nginx/html
EXPOSE 80