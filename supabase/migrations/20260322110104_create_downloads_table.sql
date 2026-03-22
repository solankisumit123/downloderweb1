/*
  # Create downloads tracking table

  1. New Tables
    - `downloads`
      - `id` (uuid, primary key)
      - `platform` (text) - Instagram, TikTok, YouTube, etc.
      - `url` (text) - Original video URL
      - `title` (text) - Video title
      - `status` (text) - pending, completed, failed
      - `ip_address` (text) - For analytics
      - `created_at` (timestamp)
  
  2. Security
    - Enable RLS on `downloads` table
    - Add policy for public read access to analytics
    - Add policy for anonymous inserts
*/

CREATE TABLE IF NOT EXISTS downloads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  platform text NOT NULL,
  url text NOT NULL,
  title text,
  status text DEFAULT 'completed',
  ip_address text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE downloads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public to view downloads stats"
  ON downloads FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow anonymous to insert downloads"
  ON downloads FOR INSERT
  TO public
  WITH CHECK (true);
