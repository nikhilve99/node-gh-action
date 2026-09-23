FROM node:22-alpine AS build

ENV NODE_ENV=production
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --omit=dev

COPY src/ ./src/
RUN npm run build

FROM node:22-alpine AS runtime

WORKDIR /app

COPY --from=build --chown=node:node /app/package.json ./package.json
COPY --from=build --chown=node:node /app/src/ ./src/

USER node
CMD ["npm", "start"]
