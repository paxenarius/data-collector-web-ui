# Ajira GIS Data Collector Web UI

Built on
1. [Nuxt.js](https://nuxtjs.org/)
2. [Vuetify.js](https://vuetifyjs.com/)

#
# Docker Configuration

This is the preferred configuration since it will also include the api component and launch the project as a single instance (optional), vs the manual configuration which will only deploy the standalone web ui project

## Prerequisites

1. [Docker](https://www.docker.com/get-docker)
2. Copy `.env.example` to `.env` and make necessary changes per your local environment (NOTE: `.env` file should NOT be checked in)

## Setup/Run (Web UI only)

```bash
$ docker build -t ajiragis/collector-web-ui .
$ docker run -it --rm --name ajiragis_collector_web_ui -p 3000:3000 ajiragis/collector-web-ui
```

## Setup/Run (API + Web UI) _coming soon_

```bash
# use the --build option the first time you run docker on this project or whenever you have changes that you need picked up
$ docker-compose up --build
```

#
# Manual Configuration

## Prerequisites

1. [NodeJS LTS](https://nodejs.org/en/download/)
2. [Yarn](https://yarnpkg.com/) (preferred over npm)
3. NPM (will be installed automatically by NodeJS)

## Setup

```bash
$ yarn install
$ # npm install # if you prefer npm
```

## Running

```bash
$ yarn dev
$ # npm run dev # if you prefer npm
```

Application will run on port [3000](http://localhost:3000)

## Production Build

```bash
$ yarn build
$ # npm run build # if you prefer npm
```

The production ready artitfacts will be stored under the dist directory.
You can deploy contents of this directory to your prefered hosting server.