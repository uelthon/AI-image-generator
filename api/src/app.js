import 'express-async-errors'
import express from 'express'
import cors from 'cors'
import path from 'path'
import morgan from 'morgan'

import { requestLogger, errorHandler, unknownEndpoint } from './utils/middlewares.js'

import dalleRoute from './routes/dalleRoute.js'
import stableRoute from './routes/stableRoute.js'
import postRoute from './routes/postRoute.js'

const app = express()
const __dirname = path.resolve()

app.use(express.json({ limit: '2mb' }))
app.use(cors())
app.use(express.static('dist'))
app.use(morgan('dev'))
app.use(requestLogger)

app.use('/api/image-generator-openia/dall-e', dalleRoute)
app.use('/api/image-generator/stable', stableRoute)
app.use('/api/posts', postRoute)

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/dist/index.html')
})

app.use(unknownEndpoint)
app.use(errorHandler)

export default app
