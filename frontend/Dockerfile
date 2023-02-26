FROM node:18-alpine as builder
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build

FROM node:18-alpine
WORKDIR /app
ENV NODE_ENV=production
COPY package.json yarn.lock ./
RUN yarn install --production
COPY --from=builder /app/.next ./.next
COPY public ./public
CMD ["yarn", "start"]

