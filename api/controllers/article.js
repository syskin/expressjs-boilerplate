const { ErrorHandler } = require(`../services/ErrorHandler`)
const { findAll, findOneById } = require(`../services/article`)

const readOne = async (req, res, next) => {
  try {
    if (!req.params || !req.params.id)
      return next(new ErrorHandler(400, `Missing article id.`))

    const article = await findOneById(parseInt(req.params.id))

    if (!article || article.length === 0)
      return next(
        new ErrorHandler(
          404,
          `Sorry we cannot found the article you are looking for.`
        )
      )

    res.status(200).json({
      message: `We found the article you are looking for!`,
      article,
    })
  } catch (e) {
    return next(new ErrorHandler(500, e))
  }
}

const checkArticles = async (req, res, next) => {
  try {
    const articles = await findAll()

    res.status(200).json({
      articles,
    })
  } catch (e) {
    return next(new ErrorHandler(500, e))
  }
}

module.exports = {
  readOne,
  checkArticles,
}
