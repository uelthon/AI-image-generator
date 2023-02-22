import http from 'http'

import app from './app.js'
import { PORT } from './utils/config.js'
import startDB from './utils/db.js'

const server = http.createServer(app)

startDB()

server.listen(PORT, () => {
  console.log(`server connect to port ${PORT}`)
})
