const articleService = require(`../../../api/services/article`)
const articles = require(`../../../repository/json/articles/articles`)
describe(`Article Service tests`, () => {
  describe(`create`, () => {
    it(`should return all articles`, async () => {
      const result = await articleService.findAll()
      expect(result).toStrictEqual(articles)
    })
    it(`should return one article by its id`, async () => {
      const id = 1
      const result = await articleService.findOneById(id)
      const article = articles.filter((article) => article.id === id)
      expect(result).toStrictEqual(article)
    })
    it(`should return error missing article id`, async () => {
      const result = await articleService.findOneById()
      expect(result.message).toBe(`Article id missing`)
    })
  })
})
