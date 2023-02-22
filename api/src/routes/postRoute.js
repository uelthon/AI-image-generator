import { Router } from 'express'
import { randomBytes } from 'crypto'
import { decode } from 'base64-arraybuffer'

import supabase from '../services/supabase.js'
import Post from '../models/post.js'

const router = Router()
const BASE_IMAGE_PATH = 'https://ajukivxzgclzxkwneebs.supabase.co/storage/v1/object/public/images'

router.get('/', async (req, res) => {
  const {
    offset = 0,
    limit = 10,
    search = '',
    orderby = 'name',
    dir = -1,
    modelos = []
  } = req.query

  const regexp = search.length > 0 ? new RegExp(search.replace(/[^\w ]|_/gi, ''), 'i') : null

  const count = await Post.find({
    ...(search.length > 0 && {
      $or: [
        { name: regexp },
        { prompt: regexp }
      ]
    }
    ),
    ...(modelos.length > 0 && { modelo: { $in: modelos } })
  }).count()

  const posts = await Post.find({
    ...(search.length > 0 && {
      $or: [
        { name: regexp },
        { prompt: regexp }
      ]
    }
    ),
    ...(modelos.length > 0 && { modelo: { $in: modelos } })
  })
    .limit(limit)
    .skip(offset)
    .sort({ [orderby]: dir })

  res.status(200).json({
    offset,
    limit,
    count,
    posts
  })
})

router.get('/:id', async (req, res) => {
  const image = await Post.findById(req.params.id)
  res.status(200).json(image)
})

router.post('/', async (req, res) => {
  const { name, prompt, baseImage, modelo } = req.body

  if (!name || !prompt || !baseImage || !modelo) {
    return res.status(400).json({ error: 'invalid arguments' })
  }

  const randomName = randomBytes(20).toString('hex')
  const urlName = `${randomName} ${name}`.split(' ').join('-')

  const image = await supabase
    .storage
    .from('images')
    .upload(`image-generator/${urlName}.png`, decode(baseImage), {
      contentType: 'image/png'
    })

  console.log(urlName, image)

  const url = `${BASE_IMAGE_PATH}/${image.data.path}`

  const post = await Post.create({
    name,
    prompt,
    image: url,
    modelo
  })

  if (!post) {
    await supabase
      .storage
      .from('images')
      .remove([`image-generator/${urlName}.png`])
  }

  res.status(200).json(post)
})

export default router
