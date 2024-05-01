# FROM node:18
# WORKDIR /usr/src/app
# COPY package*.json ./
# RUN npm install
# COPY . .
# RUN npm run build
# EXPOSE 5000

# COPY ./docker-entrypoint.sh /docker-entrypoint.sh
# ENTRYPOINT ["/docker-entrypoint.sh"]

#
# Development stage
#
FROM node:18-alpine as dev
RUN apk add --no-cache libc6-compat
WORKDIR /app

ENV NODE_ENV development

COPY --chown=node:node . .

RUN npm ci

USER node

#
# Build stage
#
FROM node:18-alpine as build

WORKDIR /app
RUN apk add --no-cache libc6-compat

ENV NODE_ENV production

COPY --chown=node:node --from=dev /app/node_modules ./node_modules
COPY --chown=node:node . .

RUN npm run build

RUN npm ci --production

USER node

#
# Production stage
#
FROM node:18-alpine as prod

WORKDIR /app
RUN apk add --no-cache libc6-compat

ENV NODE_ENV production

COPY --chown=node:node --from=build /app/dist dist
COPY --chown=node:node --from=build /app/ops ops
COPY --chown=node:node --from=build /app/node_modules node_modules
COPY --chown=node:node --from=build /app/docker-entrypoint.sh .
COPY --chown=node:node --from=build /app/package.json .

USER node

ENTRYPOINT ["/app/docker-entrypoint.sh"]

