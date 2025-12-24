import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://mudjwepooyhdddlchcle.supabase.co";
const supabaseKey = "sb_publishable_hDD3t_cCNXLh4aajCIwLMA_A7Ao3_KN";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
