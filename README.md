# ExpressJS Boilerplate

[![Coverage Status](https://coveralls.io/repos/github/syskin/expressjs-boilerplate/badge.svg?branch=master)](https://coveralls.io/github/syskin/expressjs-boilerplate?branch=master)
[![GitHub version](https://img.shields.io/badge/version-v1.0.0-blue.svg)](https://github.com/syskin/expressjs-boilerplate)
[![Sync Vulnerabilities Status](https://app.snyk.io/test/github/syskin/expressjs-boilerplate/badge.svg)](https://snyk.io/test/github/syskin/expressjs-boilerplate)

This simple ExpressJS boilerplate structure with multiple datasources in ES5.

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
