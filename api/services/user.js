const userRepository = require(`../../repository`).users

const add = async (userInformation) => {
  if (!userInformation) return new Error(`User information missing`)
  userInformation.created = Date.now()

  const user = await userRepository.create(userInformation)

  return user
}

const findByFilter = async (filter) => {
  const limit = 5
  const order = { created: 1 }
  const skip = 0

  if (!filter) filter = { params: {}, limit, order, skip }

  if (!filter.params) filter.params = {}
  if (!filter.limit) filter.limit = limit
  if (!filter.order) filter.order = order
  if (!filter.skip) filter.skip = skip

  const users = await userRepository.find(filter)
  return users
}

module.exports = {
  add,
  findByFilter,
}
