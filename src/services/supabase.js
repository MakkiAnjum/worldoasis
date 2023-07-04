/* eslint-disable no-undef */
import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://psdhdwviyjbyfupehpvt.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBzZGhkd3ZpeWpieWZ1cGVocHZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODcyODUwMjMsImV4cCI6MjAwMjg2MTAyM30.T4q09jgxFMs5Cr8s6QPS24m4UJKkt_p-IDKz-CuL3z4";
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;