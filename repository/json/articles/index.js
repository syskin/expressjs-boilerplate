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
const findArticles = () => {
  try {
    return articles
  } catch (e) {
    throw new Error(e)
  }
}

const findOneById = () => {
  try {
    return articles
  } catch (e) {
    throw new Error(e)
  }
}

module.exports = {
  findArticles,
  findOneById,
}
