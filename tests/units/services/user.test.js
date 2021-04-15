const mockDB = require('../../mockMongoDB');
const userService = require('../../../api/services/user')

describe('User Service tests', () => {
  beforeEach(async () => await mockDB.connect());
  afterAll(async done => {
    await mockDB.disconnect()
    done()
  })
  describe('create', () => {
    const user = {
      username: 'test',
      email: 'aet@oui.com',
      password: 'helloworld'
    };
    it('should return user information when create user is successfully', async () => {
      const result = await userService.add(user)

      expect(result.username).toBe(user.username)
      expect(result.email).toBe(user.email)
      expect(result.password).toBe(user.password)
      expect(result.created).toBeDefined()
      expect(result._id).toBeDefined()
    })

    it('should return user already exists', async () => {
      let result = await userService.add(user).then(userService.add(user))
      expect(result.message).toBe(`MongoError: E11000 duplicate key error dup key: { : "aet@oui.com" }`)
    })

    it('should not create empty user ', async () => {
      let result = await userService.add()
      expect(result.message).toBe(`User information missing`)
    })
  })

  describe('read', () => {
    it('should return all users without filter', async () => {
      let result = await userService.findByFilter()
      expect(result.length).toBe(1)
    })

    it('should return all users with empty filter', async () => {
      let result = await userService.findByFilter({})
      expect(result.length).toBe(1)
    })

    it('should return all users with filter', async () => {
      const filter = {
        params: { email : 'test@oui.com' },
      }
      let result = await userService.findByFilter(filter)
      expect(result.length).toBe(0)
    })

  })
})
