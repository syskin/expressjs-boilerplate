const User = require(`./userModel.js`)

const createUser = async (info) => {
  try {
    const user = new User(info)
    const newUser = await user.save(info)
    return newUser
  } catch (e) {
    throw new Error(e)
  }
}

const findUsers = async (filter) => {
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

const findUserById = async (id) => {
  try {
    const user = await User.findById(id)
    return new User(user)
  } catch (e) {
    throw new Error(e)
  }
}

const deleteUserById = async (id) => {
  try {
    const deletedUser = await User.findByIdAndRemove(id)
    return deletedUser
  } catch (e) {
    throw new Error(e)
  }
}

module.exports = {
  createUser,
  findUsers,
  findUserById,
  deleteUserById,
}
