# CS391 URL Shortener

A URL shortener built with the Next.js App Router. A user enters a long URL and an alias; visiting `<host>/<alias>` redirects straight to the long URL. Aliases and URLs are stored in MongoDB.

Deployed URL: _TODO: add Vercel URL here_

## Features

- URL validation on the backend (only `http://` and `https://` URLs are accepted)
- Duplicate aliases are rejected with an error message
- Aliases may only contain letters, numbers, `-` and `_`
- The shortened URL is shown after creation, with a Copy button
- Unknown aliases show an "Alias not found" page

## Tech stack

- Next.js (App Router) + TypeScript
- MongoDB (`mongodb` driver)
- MUI (`@mui/material`) and styled-components for styling

## Folder structure

```
url-shortener/
├── .env.local                 # MONGO_URI only, never committed
├── db.ts                      # MongoDB connection
├── types.ts                   # shared types
├── app/
│   ├── layout.tsx             # root layout: GlobalStyle + Header + page
│   ├── page.tsx               # home page with the form
│   ├── not-found.tsx          # shown when an alias does not exist
│   └── [alias]/
│       └── page.tsx           # looks up the alias and redirects
├── components/
│   ├── Header.tsx
│   ├── GlobalStyle.tsx
│   ├── UrlForm.tsx
│   └── ShortUrlDisplay.tsx
└── lib/
    ├── createShortUrl.ts      # server action: validate + insert
    ├── getUrlByAlias.ts       # lookup used by the redirect page
    └── isValidUrl.ts          # URL validation helper
```

## Setup

1. Install dependencies:
   ```
   npm install
   ```
2. Create a `.env.local` file in the project root:
   ```
   MONGO_URI="your-connection-string-here"
   ```
3. Start the dev server:
   ```
   npm run dev
   ```
4. Open http://localhost:3000

## Deployment (Vercel)

- Add `MONGO_URI` as an environment variable in the Vercel project settings.
- In MongoDB Atlas, under **Network Access**, allow access from anywhere (`0.0.0.0/0`) so the deployed app can reach the database.
