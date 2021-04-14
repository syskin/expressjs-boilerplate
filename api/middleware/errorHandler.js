const handleError = (err, res) => {
  if (process.env.NODE_ENV === `development`) {
    if (err.statusCode)
      console.log({ statusCode: err.statusCode, message: err.message })
    else console.log(err)
  }

  const statusCode = err.statusCode || 500
  let message = err.message || ``

  if (statusCode === 500 && process.env.NODE_ENV === `production`)
    message = `Something wrong happened`

  res.status(statusCode).json({
    status: `error`,
    statusCode,
    message,
  })
}

module.exports = {
  handleError,
}
