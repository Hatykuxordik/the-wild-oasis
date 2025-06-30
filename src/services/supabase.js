import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://aeselnryzlfmbmgcdsok.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFlc2VsbnJ5emxmbWJtZ2Nkc29rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEzMDk3MDEsImV4cCI6MjA2Njg4NTcwMX0.a7QiUrLjbyrbNWdROxXM5K474VpcmMidnDLORIZnI-I";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
