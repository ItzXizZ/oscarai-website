import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || process.env.SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY || process.env.SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables. Please ensure REACT_APP_SUPABASE_URL and REACT_APP_SUPABASE_KEY are set in your .env file.');
}

export const supabase = createClient(supabaseUrl, supabaseKey);

// Types for our contact form
export interface ContactFormData {
  name: string;
  email: string;
  address?: string;
}

export interface ContactFormSubmission extends ContactFormData {
  id?: number;
  created_at?: string;
}
