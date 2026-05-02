# Build Stage
FROM node:20-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci --legacy-peer-deps
COPY . .
RUN npm run build

# Production Stage
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

# The default nginx configuration serves static files on port 80.
# Cloud Run expects the container to listen on the port defined by the PORT environment variable.
# We will substitute the $PORT variable into the nginx config at runtime or just expose 80.
# Cloud Run sets the PORT env var to 8080 by default, but it can route to 80 if exposed.
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
