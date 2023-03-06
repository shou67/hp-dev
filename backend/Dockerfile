FROM --platform=linux/amd64 naskio/strapi AS builder
WORKDIR /app
# COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build

FROM --platform=linux/amd64 naskio/strapi
WORKDIR /app
# COPY --from=builder / ./
CMD ["yarn","develop"]

