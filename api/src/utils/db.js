import mongoose from 'mongoose'
import { MONGODB_URI } from './config.js'

const startDB = () => {
  mongoose.set('strictQuery', true)
  mongoose.connect(MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.log(error))
}

export default startDB
