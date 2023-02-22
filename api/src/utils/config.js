import * as dotenv from 'dotenv'
dotenv.config()

export const PORT = process.env.PORT || 3001
export const OPENAI_API_KEY = process.env.OPENAI_API_KEY
export const STABILITY_API_KEY = process.env.STABILITY_API_KEY
export const SUPABASE_URL = process.env.SUPABASE_URL
export const SUPABASE_KEY = process.env.SUPABASE_KEY
export const MONGODB_URI = process.env.NODE_ENV === 'development'
  ? process.env.MONGODB_URI_DEV
  : process.env.MONGODB_URI
