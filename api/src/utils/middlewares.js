export const requestLogger = (request, response, next) => {
  console.log('-----')
  console.log('Body:  ', request.body)
  console.log('Query', request.query)
  next()
}

export const unknownEndpoint = (request, response, next) => {
  response.status(404).json({ error: 'unknown endpoint' })
  next()
}

export const errorHandler = (error, request, response, next) => {
  console.log(error)
  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  }
  if (error.name === 'ValidationError') {
    return response.status(400).json({ error: 'post name or image already exists' })
  }
  next(error)
}
