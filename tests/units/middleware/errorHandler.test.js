const { handleError } = require(`../../../api/middleware/errorHandler.js`)
describe(`Error handler middleware tests`, () => {
  const OLD_ENV = process.env
  const res = {
    send: jest.fn(),
    status: jest.fn(() => res),
    json: jest.fn(() => res),
  }

  beforeEach(() => {
    jest.resetModules()
    process.env = { ...OLD_ENV }
  })
  afterAll(() => {
    process.env = OLD_ENV
  })

  const scenarios = [
    {
      description: `Internal serv error`,
      error: {message: `Missing something`},
      envResponse: {
        development: {"message": "Missing something", "status": "error", "statusCode": 500},
        production: {"message": "Something wrong happened", "status": "error", "statusCode": 500},
      },
      status: 500,
    },
    {
      description: `Internal serv error`,
      error: {},
      envResponse: {
        development: {"message": "", "status": "error", "statusCode": 500},
        production: {"message": "Something wrong happened", "status": "error", "statusCode": 500},
      },
      status: 500,
    },
    {
      description: `Specific error`,
      error: {
        statusCode: 401,
        message: `Unauthorized`,
      },
      envResponse: {
        development: {"message": "Unauthorized", "status": "error", "statusCode": 401},
        production: {"message": "Unauthorized", "status": "error", "statusCode": 401},
      },
      status: 401,
    },
  ]
  describe(`dev env`, () => {
    scenarios.forEach(({ description, error, status, envResponse }) => {
      test(description, async () => {
        process.env.NODE_ENV = `development`
        await handleError(error, res)
        expect(res.status).toBeCalledWith(status)
        expect(res.json).toBeCalledWith(envResponse[process.env.NODE_ENV])
      })
    })
  })

  describe(`prod env`, () => {
    scenarios.forEach(({ description, error, status, envResponse }) => {
      test(description, async () => {
        process.env.NODE_ENV = `production`
        await handleError(error, res)
        expect(res.status).toBeCalledWith(status)
        expect(res.json).toBeCalledWith(envResponse[process.env.NODE_ENV])
      })
    })
  })
})
