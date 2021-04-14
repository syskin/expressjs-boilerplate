const articles = [
  {
    id: 1,
    title: `Hello world`,
    content: ``,
  },
  {
    id: 2,
    title: `Lorem Ipsum`,
    content: ``,
  },
]
const find = () => {
  try {
    return articles
  } catch (e) {
    throw new Error(e)
  }
}

const findOneById = (id) => {
  try {
    return articles.filter((article) => article.id === id)
  } catch (e) {
    throw new Error(e)
  }
}

module.exports = {
  find,
  findOneById,
}
