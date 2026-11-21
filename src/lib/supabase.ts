// Deno linteri process ni tanishi uchun
import process from "node:process";
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Supabase URL yoki Anon Key topilmadi. .env faylni tekshiring.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
