import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://porgbdvucueuhzwgwvww.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBvcmdiZHZ1Y3VldWh6d2d3dnd3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE3MjkyOTksImV4cCI6MjAyNzMwNTI5OX0.QVKHsU8HeGgMhkid6jFhthKUjYP5VTiBO-KF_AB7ypo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
