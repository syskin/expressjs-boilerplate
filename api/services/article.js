const articleRepository = require(`../../repository`).articles

const findAll = async (filter) => {
  const articles = await articleRepository.find(filter)
  return articles
}

const findOneById = async (id) => {
  if (!id) return new Error(`Article id missing`)
  const article = await articleRepository.findOneById(id)
  return article
}

module.exports = {
  findOneById,
  findAll,
}
