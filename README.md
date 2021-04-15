# ExpressJS Boilerplate

![ci badge](https://github.com/syskin/expressjs-boilerplate/workflows/CI/badge.svg)
[![Coverage Status](https://coveralls.io/repos/github/syskin/expressjs-boilerplate/badge.svg?branch=master)](https://coveralls.io/github/syskin/expressjs-boilerplate?branch=master&kill_cache=1)
[![GitHub version](https://img.shields.io/badge/version-v1.0.0-blue.svg)](https://github.com/syskin/expressjs-boilerplate)
[![Sync Vulnerabilities Status](https://app.snyk.io/test/github/syskin/expressjs-boilerplate/badge.svg)](https://snyk.io/test/github/syskin/expressjs-boilerplate)

ExpressJS boilerplate structure with multiple datasources (Mongodb and static json used for demonstration) in ES5.

## Requirements
1. Node.js >= 10
2. At least Mongodb (and as many datasources as you need)

## Getting started
1. Install packages:   
`yarn install`
2. Copy paste `.env-example` to `.env` and set up vars
3. Run project in dev mode:   
`yarn dev`
4. Run ESLint with Prettier for static analysis and applying consistent code formatting:   
`yarn lint`

## Included in the boilerplate
- Development & production environments
- Tests (using Jest)
- ExpressJS 4.x
- Env vars config
- Linting
- Error handler

## Boilerplate structure

- api (All relatives folder and file for the API)
  - routes (Declare all endpoints of your API and call middleware, associate controller)
  - controller (Control the data in and out of an endpoint and call needed services)
  - middleware (Declare your middleware in this folder, usefull to execute some kind of code before calling a controller)
  - services (Call functions, repository or dependencies to execute specific job)
- config (Folder of differents config file of your API project)
- repository (Declare your datasources and associated models to return data through services)
- tests (Tests folder)
- index.js (Main entry of expressJS server)
