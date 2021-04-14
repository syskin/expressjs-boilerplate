require(`dotenv`).config()

module.exports = {
  development: {
    baseUrl: process.env.BASE_URL || `localhost`,
    port: process.env.PORT || 3000,
    fullUrl: `${process.env.BASE_URL}:${process.env.PORT || 3000}`,
  },
  production: {
    baseUrl: process.env.BASE_URL,
    port: process.env.PORT || 5879,
    fullUrl: process.env.BASE_URL,
  },
}
