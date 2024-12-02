# Searchify

Searchify is an innovative AI-powered search engine built with [Next.js](https://nextjs.org/) 🖥️, designed to provide a smarter, more efficient search experience 🔍. It combines traditional web results 🌐 with precise, AI-generated answers 🤖, giving users comprehensive insights in one place 📊. With features like seamless signup and login 🔐, personalized search history 📜, and a curated list of relevant websites 🔗, Searchify enhances every query with accuracy and convenience 🎯. Whether you're researching in-depth topics 📚 or looking for quick solutions ⚡, Searchify delivers fast, intelligent results tailored to your needs ✨.

## Features
- **AI-Powered Search**: Get AI-generated answers alongside traditional web results.
- **Personalized Search History**: Keep track of your past searches for convenience.
- **Seamless Authentication**: Sign up and log in with ease.
- **Curated Website Lists**: Find relevant websites quickly, enhancing your search experience.

## Getting Started

### Prerequisites
- Node.js (v16.x or higher)
- MongoDB Atlas account for database management
- Google API Key for AI integration
- RapidAPI account for Google Web Search API

### Install Packages
```bash
npm install
```

## Set Up Environment Variables
### Create a .env.local file at the root of your project, and add the following environment variables:

```bash
MONGO_URI="your-mongo-db-atlas-url"
NEXTAUTH_SECRET="your-next-auth-secret"
GOOGLE_API_KEY="your-google-ai-key"
NEXT_PUBLIC_GOOGLE_WEB_SEARCH_URL="your-google-web-search-api-url"
NEXT_PUBLIC_GOOGLE_WEB_SEARCH_KEY="your-google-web-search-api-key"
NEXT_PUBLIC_GOOGLE_WEB_SEARCH_HOST="your-google-web-search-api-host"
NEXT_PUBLIC_APP_NAME="Searchify | Ai Powered Web SE. Fast and Fun!"
NEXT_PUBLIC_APP_DESC="Searchify is an innovative AI-powered search engine built with Next.js, designed to provide a smarter, more efficient search experience..."
```
## Run the Development Server
```bash
npm run dev
```
### Technologies Used
 - Next.js: Framework for server-rendered React apps.
 - Tailwind CSS: Utility-first CSS framework for styling.
 - Mongoose: MongoDB object modeling tool.
 - NextAuth: Authentication for Next.js apps.
 - Axios: HTTP client for API requests.
 - SWR: Data fetching library for React.
 - Zustand: Lightweight state management.

### Contact:
```bash
https://www.instagram.com/adullahwebwiz/
```


