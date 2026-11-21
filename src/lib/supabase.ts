
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qndxcuzwukgdgxurvtth.supabase.co";

const supabasePublishableKey =
  "sb_publishable_5YSIw-a6c2GI_oynMkZVAQ_TNZF2GX-";

export const supabase = createClient(
  supabaseUrl,
  supabasePublishableKey
);
