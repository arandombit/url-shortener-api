import createError from 'http-errors'

export default logger => (error, req, res, next) => {
  logger.error(error)
  const { status, message } = createError(error.status || 500)
  res.status(status).json({ message })
}
