FROM --platform=linux/amd64 naskio/strapi AS builder
WORKDIR /a
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build

FROM --platform=linux/amd64 naskio/strapi
WORKDIR /a
COPY --from=builder / ./
CMD ["yarn", "start"]

