import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://tscuelibegfoezxkabov.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRzY3VlbGliZWdmb2V6eGthYm92Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU2MzIyMDksImV4cCI6MjA0MTIwODIwOX0.D9S_tGHmvmCekSZemHKclAw9x5E5NEpC-Cnnwd1M14w"; //process.env.SUPABASE_KEY;
console.log("TEST");
console.log(supabaseKey);
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
