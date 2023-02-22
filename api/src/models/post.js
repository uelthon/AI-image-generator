import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const postSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  prompt: {
    type: String,
    required: true
  },
  image: {
    type: String,
    unique: true,
    required: true
  },
  modelo: {
    type: String,
    required: true
  }
}, { timestamps: true })

postSchema.plugin(uniqueValidator)

postSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Post = mongoose.model('Post', postSchema)

export default Post
