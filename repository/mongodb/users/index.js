const User = require(`./userModel.js`)

const create = async (info) => {
  try {
    const user = new User(info)
    const newUser = await user.save(info)
    return newUser
  } catch (e) {
    return new Error(e)
  }
}

const find = async (filter) => {
  try {
    const users = await User.find(filter.params)
      .sort(filter.order)
      .skip(filter.skip)
      .limit(filter.limit)
      .lean()

    return users
  } catch (e) {
    return new Error(e)
  }
}

module.exports = {
  create,
  find,
}
