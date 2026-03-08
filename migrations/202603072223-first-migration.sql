-- Create posts table
CREATE TABLE IF NOT EXISTS posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  content TEXT NOT NULL,
  type TEXT CHECK (type IN ('blog', 'vlog')) NOT NULL,
  cover_image TEXT,
  published_at TIMESTAMPTZ DEFAULT NOW(),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create index on slug for faster lookups
CREATE INDEX IF NOT EXISTS idx_posts_slug ON posts(slug);

-- Create index on published_at for sorting
CREATE INDEX IF NOT EXISTS idx_posts_published_at ON posts(published_at DESC);

-- Enable Row Level Security
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE schemaname = 'public'
    AND tablename = 'posts'
    AND policyname = 'Allow public read access'
  ) THEN
    CREATE POLICY "Allow public read access"
      ON posts
      FOR SELECT
      USING (true);
  END IF;
END
$$;

-- Create policy for authenticated users to insert
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE schemaname = 'public'
    AND tablename = 'posts'
    AND policyname = 'Allow authenticated users to insert'
  ) THEN
    CREATE POLICY "Allow authenticated users to insert"
      ON posts
      FOR INSERT
      WITH CHECK (auth.role() = 'authenticated');
  END IF;
END
$$;

-- Create policy for authenticated users to update
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE schemaname = 'public'
    AND tablename = 'posts'
    AND policyname = 'Allow authenticated users to update'
  ) THEN
    CREATE POLICY "Allow authenticated users to update"
      ON posts
      FOR UPDATE
      USING (auth.role() = 'authenticated');
  END IF;
END
$$;

-- Create contacts table
CREATE TABLE IF NOT EXISTS contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE schemaname = 'public'
    AND tablename = 'contacts'
    AND policyname = 'Allow public insert'
  ) THEN
    CREATE POLICY "Allow public insert"
      ON contacts
      FOR INSERT
      WITH CHECK (true);
  END IF;
END
$$;