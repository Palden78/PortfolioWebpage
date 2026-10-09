-- Run this file once in your Neon PostgreSQL SQL Editor.
-- Public reads are handled by the Next.js API; never expose database credentials to the browser.

CREATE TABLE IF NOT EXISTS story_comments (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  story_slug TEXT NOT NULL,
  display_name VARCHAR(40) NOT NULL,
  body VARCHAR(2000) NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  CONSTRAINT story_comments_display_name_nonempty CHECK (length(trim(display_name)) BETWEEN 1 AND 40),
  CONSTRAINT story_comments_body_nonempty CHECK (length(trim(body)) BETWEEN 1 AND 2000)
);

CREATE INDEX IF NOT EXISTS story_comments_story_newest_idx
  ON story_comments (story_slug, created_at DESC, id DESC);

-- Rate-limit writes by a keyed hash of the visitor IP. Raw IP addresses are not stored.
CREATE TABLE IF NOT EXISTS comment_rate_limits (
  ip_hash CHAR(64) PRIMARY KEY,
  window_started_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  attempts INTEGER NOT NULL DEFAULT 0
);

-- A playful example comment, stored as a real record and shown publicly.
-- It is intentionally dated before future comments so new posts appear above it.
INSERT INTO story_comments (story_slug, display_name, body, created_at)
SELECT
  'everything-happens-for-a-reason',
  'Palden',
  'This is a sample comment. Be nice, or I’ll make you debug my code. :)',
  NOW() - INTERVAL '1 day'
WHERE NOT EXISTS (
  SELECT 1
  FROM story_comments
  WHERE story_slug = 'everything-happens-for-a-reason'
    AND display_name = 'Palden'
    AND body = 'This is a sample comment. Be nice, or I’ll make you debug my code. :)'
);
