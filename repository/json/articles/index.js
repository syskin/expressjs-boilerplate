const articles = require(`./articles`)
const find = () => {
  return articles
}

const findOneById = (id) => {
  return articles.filter((article) => article.id === id)
}

module.exports = {
  find,
  findOneById,
}
