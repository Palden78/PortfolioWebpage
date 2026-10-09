# Story comments setup

The comment list is public. Only visitors who know the shared friends-only password can submit comments. The password is checked on the server; its salted scrypt hash is kept in environment variables and is never sent to the browser.

## 1. Create the database

1. In Vercel, open the portfolio project and find the Storage/Marketplace integration for Neon Postgres (or create a Neon database directly).
2. Create a PostgreSQL database and copy its connection string into the Vercel environment variable `DATABASE_URL`.
3. Open the database's SQL Editor and run the contents of `database/comments.sql` once. This creates the comments and rate-limit tables and seeds the sample Palden comment.

Keep the connection string private. It must only be stored as a server-side environment variable.

## 2. Configure the shared password

On your own computer, from the project root, run:

```bash
node scripts/hash-comment-password.mjs
```

Choose a long, unique passphrase (at least 12 characters; longer is better). The script prints a random salt and scrypt hash. Add both values to Vercel as environment variables:

- `COMMENT_PASSWORD_SALT`
- `COMMENT_PASSWORD_HASH`

Share the original password privately with friends. Do not put the password, salt, or hash in source code, a public README, or a client-side variable such as `NEXT_PUBLIC_...`.

Also create a long random secret for IP-key hashing, for example with `openssl rand -hex 32`, and add it as:

- `COMMENT_RATE_LIMIT_SECRET`

## 3. Deploy

Set the variables for the environments you use (Production, and Preview if you want comments to work on preview deployments), then redeploy the site. The database schema only needs to be run once.

## Behaviour and safeguards

- Anyone can read comments without entering a password.
- Only valid-password submissions are saved.
- Comments are ordered newest first, with ten on each page.
- The API trims and validates input, caps names at 40 characters and comments at 2,000 characters, checks same-origin POSTs, and limits submissions to ten attempts per IP-hash per 15-minute window.
- IP addresses are hashed with a server-side secret before being stored in the rate-limit table; raw IP addresses are not stored.
- Comment text is rendered as text, not HTML.
- The sample comment is a real database row. New comments should appear above it.

The shared password is a lightweight friends-only gate, not a personal identity system: anyone who learns it can post under any display name. Rotate it by generating a new hash and updating the two password environment variables. For a personal site, also review comments periodically and remove abusive entries directly from the database if needed.
