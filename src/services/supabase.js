import { createClient } from "@supabase/supabase-js";
// export const supabaseUrl = "https://sixckbtqcybsmceeevkl.supabase.co";
// const supabaseKey =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNpeGNrYnRxY3lic21jZWVldmtsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU5NzY4NzQsImV4cCI6MjAzMTU1Mjg3NH0.YrhP_ZIqZhYN0uG7g37PniQ6EKW1xuQpPNVDyYxJasQ";
export const supabaseUrl = "https://wivgbficwqysxrqnsjgm.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndpdmdiZmljd3F5c3hycW5zamdtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkxMTcwMTgsImV4cCI6MjA2NDY5MzAxOH0.4pmAT4fj5BUrgd_MzJXtA2YVH1i5JXl1f_hX1x9Te2g";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
