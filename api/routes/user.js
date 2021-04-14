const { login, register } = require(`../controllers/user.js`)
const prefix = `user`

module.exports = (router) => {
  router.route(`/${prefix}/login`).post(login)
  router.route(`/${prefix}/register`).post(register)
}
