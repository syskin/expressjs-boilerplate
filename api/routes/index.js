const userRoutes = require(`./user`)
const articleRoutes = require(`./article`)
module.exports = (router) => {
  userRoutes(router)
  articleRoutes(router)
  return router
}
