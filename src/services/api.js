import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xwiqztolderegwxkozww.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh3aXF6dG9sZGVyZWd3eGtvend3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTMzNDk1OTMsImV4cCI6MTk2ODkyNTU5M30.By35PNjDIxzmb_ikBZJVSjapnmrN53DjehydT49qkiA'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;