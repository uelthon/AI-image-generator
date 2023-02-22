import { Router } from 'express'

import openai from '../services/openia.js'

const router = Router()

router.post('/', async (req, res) => {
  const { prompt } = req.body
  try {
    const dalleResponse = await openai.createImage({
      prompt,
      n: 1,
      size: '512x512',
      response_format: 'b64_json'
    })
    const image = dalleResponse.data.data[0].b64_json
    res.status(200).json({
      prompt,
      image,
      model: 'Dall-E'
    })
  } catch (error) {
    console.log(error)
    res.status(500).send(error?.response.data.message)
  }
})

export default router
