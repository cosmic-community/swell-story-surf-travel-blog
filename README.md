# 🏄 Swell & Story — Surf Travel Blog

![Swell & Story](https://imgix.cosmicjs.com/a0a09e30-06c9-11f1-bd97-ef3d321185a3-photo-1502933691298-84fc14542831-1770759847455.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A modern surf travel blog built with Next.js 16, Tailwind CSS, and [Cosmic](https://www.cosmicjs.com). Browse destination guides, surf tips, gear reviews, and discover the writers behind the stories.

## Features

- 🏄 **Dynamic Blog Posts** — Markdown rendering with featured images
- 🌍 **Category Browsing** — Filter posts by Destinations, Gear & Equipment, Surf Tips
- ✍️ **Author Profiles** — Dedicated pages with bios and published articles
- 📱 **Fully Responsive** — Beautiful on desktop, tablet, and mobile
- ⚡ **Server-Side Rendering** — Fast page loads with Next.js App Router
- 🖼️ **Imgix Optimization** — All images optimized for performance
- 🎨 **Ocean-Inspired Design** — Teal and sand color palette

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](http://localhost:3040/projects/new?clone_bucket=698ba5fd42bd283516b20921&clone_repository=698baa1f42bd283516b2094a)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "A surf travel blog with posts, authors, and categories"

### Code Generation Prompt

> "Based on the content model I created for 'A surf travel blog with posts, authors, and categories', now build a complete web application that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface."

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies

- [Next.js 16](https://nextjs.org/) — React framework with App Router
- [Cosmic](https://www.cosmicjs.com/docs) — Headless CMS for content management
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) — Type-safe development
- [react-markdown](https://github.com/remarkjs/react-markdown) — Markdown rendering

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (recommended) or Node.js 18+
- A [Cosmic](https://www.cosmicjs.com) account with the surf travel blog content model

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd swell-and-story

# Install dependencies
bun install

# Set up environment variables
# Add your Cosmic credentials to your environment

# Run the development server
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to see the blog.

### Environment Variables

Set these in your hosting platform's dashboard or local environment:

| Variable | Description |
|---|---|
| `COSMIC_BUCKET_SLUG` | Your Cosmic bucket slug |
| `COSMIC_READ_KEY` | Your Cosmic read key |
| `COSMIC_WRITE_KEY` | Your Cosmic write key |

## Cosmic SDK Examples

### Fetching Posts with Connected Objects

```typescript
import { cosmic } from '@/lib/cosmic'

const { objects: posts } = await cosmic.objects
  .find({ type: 'posts' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching a Single Post by Slug

```typescript
const { object: post } = await cosmic.objects
  .findOne({ type: 'posts', slug: 'my-post-slug' })
  .props(['id', 'title', 'slug', 'metadata', 'created_at'])
  .depth(1)
```

## Cosmic CMS Integration

This application uses three Cosmic object types:

- **Posts** — Blog articles with markdown content, featured images, connected authors, and categories
- **Authors** — Writer profiles with names, bios, and photos
- **Categories** — Content categories with names and descriptions

All content is managed through the [Cosmic dashboard](https://app.cosmicjs.com) and fetched server-side using the Cosmic SDK.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Add environment variables in the Vercel dashboard
4. Deploy

### Netlify

1. Push your code to GitHub
2. Import in [Netlify](https://netlify.com)
3. Set build command: `bun run build`
4. Set publish directory: `.next`
5. Add environment variables
6. Deploy

<!-- README_END -->