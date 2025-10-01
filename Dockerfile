# ---------- build stage ----------
FROM node:20-alpine AS build
WORKDIR /app
# copy only the web app first (faster layer caching)
COPY web/package*.json ./web/
WORKDIR /app/web
RUN npm ci
# now copy the rest of the web app
COPY web/ .
RUN npm run build

# ---------- run stage ----------
FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
# copy the web dist
COPY --from=build /app/web/dist /usr/share/nginx/html
# nginx config (at repo root or in web/, pick one and adjust path below)
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
