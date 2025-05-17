/*
  # Create modules table

  1. New Tables
    - `modules`
      - `id` (uuid, primary key)
      - `title` (text)
      - `description` (text)
      - `difficulty` (text)
      - `category` (text)
      - `tags` (text array)
      - `xp_reward` (integer)
      - `coin_reward` (integer)
      - `estimated_time` (text)
      - `prerequisites` (uuid array)
      - `completions` (integer)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `modules` table
    - Add policy for public read access
    - Add policy for admin write access
*/

CREATE TABLE IF NOT EXISTS modules (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  difficulty text NOT NULL,
  category text NOT NULL,
  tags text[] DEFAULT '{}',
  xp_reward integer DEFAULT 0,
  coin_reward integer DEFAULT 0,
  estimated_time text,
  prerequisites uuid[] DEFAULT '{}',
  completions integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE modules ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Modules are viewable by everyone"
  ON modules
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Only admins can modify modules"
  ON modules
  USING (auth.role() = 'admin');