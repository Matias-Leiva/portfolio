import { createClient } from '@supabase/supabase-js';

// Use placeholders if environment variables are not set
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://example.supabase.co';
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV4YW1wbGUiLCJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MjU0MjQwMCwiZXhwIjoxOTU4MTE4NDAwfQ.example';

// Check if Supabase is properly configured
export const isSupabaseConfigured =
  process.env.NEXT_PUBLIC_SUPABASE_URL !== undefined &&
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY !== undefined &&
  process.env.NEXT_PUBLIC_SUPABASE_URL !== '' &&
  !process.env.NEXT_PUBLIC_SUPABASE_URL.includes('example');

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Post = {
  id: string;
  title: string;
  slug: string;
  content: string;
  type: 'blog' | 'vlog';
  cover_image?: string;
  published_at: string;
  created_at: string;
};
