# JSON Formatter Online

[![Live Site](https://img.shields.io/badge/Live-json--formatter--online.pages.dev-blue)](https://json-formatter-online.pages.dev)
[![Next.js](https://img.shields.io/badge/Built%20with-Next.js%2014-black?logo=next.js)](https://nextjs.org/)
[![Cloudflare Pages](https://img.shields.io/badge/Deployed%20on-Cloudflare%20Pages-orange?logo=cloudflare)](https://pages.cloudflare.com/)

A fast, privacy-first online JSON formatter, validator, and minifier. All processing happens in your browser — your data is never uploaded.

## Features

- **Format / Beautify** — Pretty-print JSON with 2-space indentation
- **Validate** — Instant syntax error detection with clear messages
- **Minify** — Remove whitespace to compress JSON
- **Copy** — One-click copy result to clipboard
- **Download** — Save formatted JSON as `.json` file
- **Sample JSON** — Load example data with one click
- **Dark / Light Mode** — Toggle themes, preference saved locally
- **Privacy First** — No server, no database, no data collection

## SEO Content Guides

In-depth guides for working with JSON:

- [How to Format JSON](https://json-formatter-online.pages.dev/how-to-format-json/) — Complete guide for formatting JSON manually and online
- [JSON Validator Guide](https://json-formatter-online.pages.dev/json-validator-guide/) — Syntax rules, common errors, and validation in multiple languages
- [Fix Invalid JSON](https://json-formatter-online.pages.dev/fix-invalid-json/) — Step-by-step solutions for the 8 most common JSON errors

## Tech Stack

- [Next.js 14](https://nextjs.org/) — React framework with static export
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS
- [Lucide React](https://lucide.dev/) — Icon library
- [Cloudflare Pages](https://pages.cloudflare.com/) — Static site hosting

## Local Development

```bash
# Clone the repository
git clone https://github.com/xuanlinflow413/json-formatter-online.git
cd json-formatter-online

# Install dependencies
npm install

# Start the development server
npm run dev

# Open http://localhost:3000
```

## Build

```bash
npm run build
```

The static site is generated in the `out/` directory.

## Deploy

Deployed on **Cloudflare Pages** with the following settings:

| Setting | Value |
|---------|-------|
| Framework preset | Next.js (Static HTML Export) |
| Build command | `npm run build` |
| Build output directory | `out` |
| Production branch | `main` |

## License

MIT © 2025 JSON Formatter Online
