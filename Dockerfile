FROM node:8.11.3

WORKDIR /src/ajiragis/data-collector/web-ui

RUN apt-get update \
  && apt-get -y install apt-utils apt-transport-https curl \
  && curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - \
  && echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list \
  && apt-get update \
  && apt-get -y install --no-install-recommends yarn

COPY package.json .

RUN yarn install

COPY . .

ENV NODE_ENV development

ENTRYPOINT [ "yarn", "dev" ]
