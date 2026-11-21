import process from "node:process";
import { createClient } from '@supabase/supabase-js';

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!url || !key) {
  throw new Error("Supabase URL yoki Anon Key topilmadi. .env faylni tekshiring.");
}

export const supabase = createClient(url, key);
