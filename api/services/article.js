const articleRepository = require(`../../repository`).articles

const findAll = async (filter) => {
  try {
    const articles = await articleRepository.find(filter)
    return articles
  } catch (e) {
    throw new Error(e)
  }
}

const findOneById = async (id) => {
  try {
    if (!id) throw new Error(`Article id missing`)
    const article = await articleRepository.findOneById(id)
    return article
  } catch (e) {
    throw new Error(e)
  }
}

module.exports = {
  findOneById,
  findAll,
}
