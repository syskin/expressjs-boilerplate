const userRoutes = require(`./user`)

module.exports = (router) => {
  userRoutes(router)
  return router
}
