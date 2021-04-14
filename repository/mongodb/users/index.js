const User = require(`./userModel.js`)

const create = async (info) => {
  try {
    const user = new User(info)
    const newUser = await user.save(info)
    return newUser
  } catch (e) {
    throw new Error(e)
  }
}

const find = async (filter) => {
  try {
    const result = await User.find(filter.params)
      .sort(filter.order)
      .skip(filter.skip)
      .limit(filter.limit)
      .lean()

    const users = result.map((userResult) => {
      return new User(userResult)
    })

    return users
  } catch (e) {
    throw new Error(e)
  }
}

const findById = async (id) => {
  try {
    const user = await User.findById(id)
    return new User(user)
  } catch (e) {
    throw new Error(e)
  }
}

const deleteById = async (id) => {
  try {
    const deletedUser = await User.findByIdAndRemove(id)
    return deletedUser
  } catch (e) {
    throw new Error(e)
  }
}

module.exports = {
  create,
  find,
  findById,
  deleteById,
}
