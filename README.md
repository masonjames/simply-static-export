# Simply Static Next.js

A modern Next.js conversion of a WordPress static site export, optimized for CloudFlare deployment.

## 🚀 Features

- **Next.js 15.4.3** with App Router
- **Tailwind CSS v4** with modern design system
- **TypeScript** for type safety
- **CloudFlare Workers** for hosting and future API functionality
- **Static Site Generation** for optimal performance
- **Responsive Design** with dark mode support

## 📁 Project Structure

```
├── src/
│   ├── app/
│   │   ├── page.tsx                 # Homepage with blog listing
│   │   ├── hello-world/page.tsx     # First blog post
│   │   ├── new-post/page.tsx        # Course-related post
│   │   ├── sample-page/page.tsx     # About/sample page
│   │   ├── layout.tsx               # Root layout
│   │   └── globals.css              # Tailwind v4 styles
│   └── index.ts                     # CloudFlare Worker
├── wordpress-export/                # Original WordPress files
├── wrangler.jsonc                   # CloudFlare configuration
├── next.config.ts                   # Next.js configuration
└── package.json                     # Dependencies and scripts
```

## 🛠 Development

### Prerequisites
- Node.js 18+
- npm

### Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run deploy` - Build and deploy to CloudFlare Pages
- `npm run preview` - Preview with CloudFlare Pages locally

## 🌐 Deployment

### CloudFlare Pages

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy to CloudFlare:**
   ```bash
   npm run deploy
   ```

3. **Local preview:**
   ```bash
   npm run preview
   ```

### Configuration

The `wrangler.jsonc` file configures:
- Static asset serving from `./out/` directory
- Single Page Application routing
- Node.js compatibility
- Observability settings

## 🎨 Styling

### Tailwind CSS v4

This project uses Tailwind CSS v4 with:
- CSS-first configuration in `globals.css`
- Custom color palette with dark mode
- Modern design tokens
- Utility classes for components

### Component System

Pre-built utility classes:
- `.btn` - Base button styles
- `.btn-primary` - Primary button variant
- `.btn-secondary` - Secondary button variant
- `.card` - Card container
- `.container` - Responsive container

## 📝 Content

### Converted from WordPress

- **Homepage** - Blog listing with 2 posts
- **Sample Page** - About page with example content
- **Hello World** - Default WordPress first post
- **New Post** - Course-related content (originally LearnDash LMS)

### Site Information

- **Title:** mason test ldea
- **Navigation:** Sample Page
- **Categories:** Uncategorized
- **Author:** masonjames

## 🔮 Future Enhancements

The CloudFlare Worker is ready for:
- Form submissions
- API endpoints at `/api/*`
- Dynamic functionality
- Database integration (D1, KV, etc.)
- Authentication
- Real-time features

## 📚 Tech Stack

- **Framework:** Next.js 15.4.3
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **Deployment:** CloudFlare Pages + Workers
- **Build Tool:** Turbopack (dev), Webpack (prod)

## 🔄 Migration Notes

### From WordPress to Next.js

1. **Content Extraction:** Analyzed WordPress static export HTML files
2. **Structure Mapping:** Converted pages and posts to Next.js routes
3. **Styling:** Replaced WordPress theme with Tailwind CSS v4
4. **Assets:** Prepared for CloudFlare static asset serving
5. **Navigation:** Converted WordPress menus to Next.js routing

### Original WordPress Features

- **Theme:** Twenty Twenty-Five
- **Plugins:** LearnDash LMS, EA Course Reviews, EA Events Calendar
- **Export Tool:** Simply Static v3.3.2

## 📄 License

This project maintains the same license as the original WordPress content.
