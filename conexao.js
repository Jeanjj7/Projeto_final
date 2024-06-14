import { createClient } from "@supabase/supabase-js"

const link = "https://bxyutdanzxxpqguqttap.supabase.co"
const chave = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ4eXV0ZGFuenh4cHFndXF0dGFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg0MDAxMTQsImV4cCI6MjAzMzk3NjExNH0.Y_ooNubVEZgfxv5_A2__kQeO-OgYwevNTkXr9qmXZ_s"
export const supabase = createClient(link,chave)