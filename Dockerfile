# build environment
FROM node:alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package*.json ./
RUN npm install --silent
COPY . ./
RUN npm run build

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

#docker build . -t ghcr.io/kelatev/sa-signinfo
#docker run -it --rm -p 1337:3000 -d ghcr.io/kelatev/sa-signinfo

#docker push ghcr.io/kelatev/sa-signinfo:latest
