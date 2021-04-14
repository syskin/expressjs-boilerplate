const userRepository = require(`../../repository`).users

const add = async (userInformation) => {
  try {
    if (!userInformation) throw new Error(`User information missing`)
    userInformation.created = Date.now()

    const user = await userRepository.create(userInformation)
    if (!user) throw new Error(`User not created`)

    return user
  } catch (e) {
    throw new Error(e)
  }
}

const findByFilter = async (filter) => {
  try {
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
  } catch (e) {
    throw new Error(e)
  }
}

const findOneById = async (id) => {
  try {
    if (!id) throw new Error(`User id missing`)
    const user = await userRepository.findOneById(id)
    return user
  } catch (e) {
    throw new Error(e)
  }
}

module.exports = {
  add,
  findOneById,
  findByFilter,
}
