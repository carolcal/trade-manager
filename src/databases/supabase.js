import { createClient } from '@supabase/supabase-js';


const SUPABASE_URL = "https://jejjucywrsjvmbbmpnmc.supabase.co"
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Implamp1Y3l3cnNqdm1iYm1wbm1jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAyNDc5NTcsImV4cCI6MjAyNTgyMzk1N30.NmYkEOTbpbi1L414M8q3Pj9u1lf0l5COhRoyX_FGwKM"
        

// Inicialização do cliente Supabase
export default supabase = createClient(SUPABASE_URL, SUPABASE_KEY);