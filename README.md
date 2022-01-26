<h1 align="center">Jobs Jet ⚕️</h1>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![Issues](https://img.shields.io/github/issues/anthony-magana/JobsJet)](https://github.com/anthony-magana/jobsjet/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/anthony-magana/JobsJet.svg)](https://github.com/anthony-magana/JobsJet/pulls)

</div>

---
## 🏁 [WEBSITE](https://jobs-jet.vercel.app)
Jobs Jet is the all in one platform for finding a job or for hiring candidate. Swipe left or right to determine if you the employer or the candidate are a match.

## ⛏️ Built Using

- [Nextjs](https://nextjs.org) - Web Framework
- [Auth0](https://auth0.com) - Authentication
- [ChakraUI](https://chakra-ui.com) - React component library
- [MongoDB](https://www.mongodb.com) - NoSQL Database

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## 🔧 Getting Started

1. Clone or Fork repository
2. `cd` to project directory
3. Run `npm install` to install project dependencies.
4. Create `.env.local` file in root project directory
5. Add following configurations/keys to .env.local file
    - [Follow Auth0's quickstart guide](https://auth0.com/docs/quickstart/webapp/nextjs/01-login)
        - `AUTH0_SECRET='use [openssl rand -hex 32] to generate a 32 bytes value'`
        - `AUTH0_BASE_URL='http://localhost:3000'`
        - `AUTH0_ISSUER_BASE_URL='https://YOUR_DOMAIN'`
        - `AUTH0_CLIENT_ID='YOUR_CLIENT_ID'`
        - `AUTH0_CLIENT_SECRET='YOUR_CLIENT_SECRET'`
    - `MONGO_URI='YOUR_MONGODB_URI'`

run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
