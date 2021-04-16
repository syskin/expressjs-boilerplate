const request = require(`supertest`)
const app = require(`../../config/express.js`)
const mockDB = require(`../mockMongoDB`)

describe(`Test the root path`, () => {
  let server

  beforeAll(async (done) => {
    await mockDB.connect()
    server = app.listen(4000, () => {
      global.agent = request.agent(server)
      done()
    })
  })

  afterAll(async () => {
    await mockDB.disconnect()
    await server.close()
  })

  test(`It should response the GET method`, () => {
    return request(app).get(`/`).expect(404)
  })

  test(`It should return articles`, () => {
    return request(app).get(`/articles`).expect(200)
  })

  test(`It should return 200 found article`, () => {
    return request(app).get(`/article/1`).expect(200)
  })

  test(`It should return error incorrect request`, () => {
    return request(app).get(`/article/ `).expect(400)
  })

  test(`It should return 404 not found article`, () => {
    return request(app).get(`/article/5`).expect(404)
  })

  test(`It should return register missing information 422 user`, () => {
    return request(app).post(`/user/login`).expect(422)
  })

  test(`It should return register 200`, async () => {
    const body = {
      email: `test@test.com`,
      password: `test`,
      username: `test`,
    }
    return request(app)
      .post(`/user/register`)
      .send(body)
      .expect((response) => {
        expect(response.status).toBe(200)
        expect(response.body).toEqual({
          message: `Your profile has been successfully created ${body.username}!`,
        })
      })
  })

  test(`It should return conflict 409`, async () => {
    const body = {
      email: `test@test.com`,
      password: `test`,
      username: `test`,
    }
    return request(app)
      .post(`/user/register`)
      .send(body)
      .expect((response) => {
        expect(response.status).toBe(409)
      })
  })

  test(`It should return missing information register 422`, async () => {
    const body = {
      email: `test@test.com`,
    }
    return request(app)
      .post(`/user/register`)
      .send(body)
      .expect((response) => {
        expect(response.status).toBe(422)
      })
  })

  test(`It should return missing information login 422`, async () => {
    const body = {
      email: `test@test.com`,
    }
    return request(app)
      .post(`/user/login`)
      .send(body)
      .expect((response) => {
        expect(response.status).toBe(422)
      })
  })

  test(`It should return invalid credentials login 401`, async () => {
    const body = {
      email: `test@test.com`,
      password: `123456`,
    }
    return request(app)
      .post(`/user/login`)
      .send(body)
      .expect((response) => {
        expect(response.status).toBe(401)
      })
  })

  test(`It should return logged in user 200`, async () => {
    const body = {
      email: `test@test.com`,
      password: `test`,
    }
    return request(app)
      .post(`/user/login`)
      .send(body)
      .expect((response) => {
        expect(response.status).toBe(200)
        expect(response.body).toEqual({
          message: `Successfully logged in`,
          token: `48-hello-52-world-84`,
        })
      })
  })
})
