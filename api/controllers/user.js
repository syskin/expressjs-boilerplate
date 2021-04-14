const { ErrorHandler } = require(`../services/ErrorHandler`)
const { add, findByFilter } = require(`../services/userService`)

const login = async (req, res, next) => {
  try {
    res.status(200).json({ message: `Successfully logged in` })
  } catch (e) {
    return next(new ErrorHandler(500, e))
  }
}

const register = async (req, res, next) => {
  try {
    if (
      !req.body ||
      !req.body.email ||
      !req.body.password ||
      !req.body.username
    )
      return next(
        new ErrorHandler(422, `Missing information to create your profile.`)
      )

    const checkExistingUser = await findByFilter({
      params: {
        email: req.body.email,
      },
      limit: 1,
    })

    if (checkExistingUser && checkExistingUser.length > 0)
      return next(new ErrorHandler(409, `This email is already used.`))

    await add(req.body)

    res.status(200).json({
      message: `Your profile has been successfully created ${req.body.username}!`,
    })
  } catch (e) {
    return next(new ErrorHandler(500, e))
  }
}

module.exports = {
  login,
  register,
}
