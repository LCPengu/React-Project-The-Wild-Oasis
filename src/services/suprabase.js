import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://knixngvmajkqzjuxbxow.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtuaXhuZ3ZtYWprcXpqdXhieG93Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc3MTUxMjUsImV4cCI6MjA5MzI5MTEyNX0.9GA522aXKJ1aGtoBSGqQ0JGsP7uDJQ3Gx5eXT0PTzt0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
