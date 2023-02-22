import { createClient } from '@supabase/supabase-js'

import { SUPABASE_URL, SUPABASE_KEY } from '../utils/config.js'

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

export default supabase
