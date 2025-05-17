// src/lib/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xyzcompany.supabase.co'  // <-- apna Supabase URL daal yahan
const supabaseAnonKey = 'your-anon-key-here'          // <-- apna anon key bhi

export const supabase = createClient(supabaseUrl, supabaseAnonKey)