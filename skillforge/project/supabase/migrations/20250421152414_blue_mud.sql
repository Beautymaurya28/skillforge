/*
  # Create forum threads table

  1. New Tables
    - `forum_threads`
      - `id` (uuid, primary key)
      - `title` (text)
      - `content` (text)
      - `user_id` (uuid, foreign key)
      - `tags` (text array)
      - `upvotes` (integer)
      - `comments` (integer)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `forum_threads` table
    - Add policy for public read access
    - Add policy for authenticated users to create threads
    - Add policy for thread owners to update/delete their threads
*/

CREATE TABLE IF NOT EXISTS forum_threads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  content text NOT NULL,
  user_id uuid REFERENCES users(id) ON DELETE CASCADE,
  tags text[] DEFAULT '{}',
  upvotes integer DEFAULT 0,
  comments integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE forum_threads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Forum threads are viewable by everyone"
  ON forum_threads
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authenticated users can create threads"
  ON forum_threads
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own threads"
  ON forum_threads
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own threads"
  ON forum_threads
  FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);