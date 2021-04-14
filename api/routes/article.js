const { readOne, checkArticles } = require(`../controllers/article.js`)
const prefixSingle = `article`
const prefixMany = `articles`

module.exports = (router) => {
  router.route(`/${prefixSingle}/:id`).get(readOne)
  router.route(`/${prefixMany}/check`).get(checkArticles)
}
