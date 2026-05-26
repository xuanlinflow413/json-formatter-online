# JSON Formatter Online

[![Live Site](https://img.shields.io/badge/Live-json--formatter--online.pages.dev-blue)](https://json-formatter-online.pages.dev)
[![Next.js](https://img.shields.io/badge/Built%20with-Next.js%2014-black?logo=next.js)](https://nextjs.org/)
[![Cloudflare Pages](https://img.shields.io/badge/Deployed%20on-Cloudflare%20Pages-orange?logo=cloudflare)](https://pages.cloudflare.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

**[https://json-formatter-online.pages.dev](https://json-formatter-online.pages.dev)**

A fast, privacy-first online JSON formatter, validator, and minifier. All processing happens in your browser — your data is never uploaded.

## Features

- **JSON Formatter** — Pretty-print JSON with 2-space indentation for readability
- **JSON Validator** — Instant syntax error detection with clear error messages
- **JSON Minifier** — Remove all whitespace to compress JSON for production use
- **Local Browser Processing** — No server, no database, no data collection. Your JSON never leaves your device
- **Dark / Light Mode** — Toggle between themes, preference saved to localStorage
- **Copy & Download** — One-click copy to clipboard or save as `.json` file
- **Sample JSON** — Load example data with one click to test the tool
- **SEO Guides** — In-depth tutorials for working with JSON (see below)

## SEO Content Guides

Learn how to work with JSON from the basics to advanced topics:

| Guide | Description |
|-------|-------------|
| [How to Format JSON](https://json-formatter-online.pages.dev/how-to-format-json/) | Complete guide to formatting JSON manually and online. Covers JavaScript, Python, CLI tools, and common mistakes. |
| [JSON Validator Guide](https://json-formatter-online.pages.dev/json-validator-guide/) | JSON syntax rules (RFC 8259), common validation errors, and how to validate in JavaScript, Python, Go, and more. |
| [Fix Invalid JSON](https://json-formatter-online.pages.dev/fix-invalid-json/) | Step-by-step solutions for the 8 most common JSON errors. Fix trailing commas, single quotes, unquoted keys, and more. |

## Tech Stack

- [Next.js 14](https://nextjs.org/) — React framework with static export (`output: 'export'`)
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS framework
- [Lucide React](https://lucide.dev/) — Icon library
- [Cloudflare Pages](https://pages.cloudflare.com/) — Static site hosting with global CDN

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

## Deploy to Cloudflare Pages

### Option 1: Git Integration (Recommended)

1. Push code to GitHub
2. In Cloudflare Dashboard, go to **Pages** → **Create a project**
3. Connect your GitHub repository
4. Use these build settings:

| Setting | Value |
|---------|-------|
| Framework preset | Next.js (Static HTML Export) |
| Build command | `npm run build` |
| Build output directory | `out` |
| Production branch | `main` |

5. Click **Save and Deploy**

### Option 2: Wrangler CLI

```bash
# Install Wrangler
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy
npx wrangler pages deploy out --project-name=json-formatter-online
```

## License

[MIT](LICENSE) © 2025 JSON Formatter Online
