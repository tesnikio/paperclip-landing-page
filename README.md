# Paperclip Landing Page

A beautiful landing page for Paperclip - a native macOS clipboard manager. Built with [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/).

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (recommended: 20+)
- npm or your preferred package manager

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev
```

The development server will start at `http://localhost:4321`

### Build

```bash
# Build for production
npm run build
```

The built files will be in the `dist/` directory.

### Preview

```bash
# Preview the production build locally
npm run preview
```

## 🚀 Deploying to GitHub Pages

This project is set up for automatic deployment to GitHub Pages.

### Setup Steps:

1. **Push to GitHub**: Push your code to a GitHub repository.

2. **Configure the site URL**: Update `astro.config.mjs` with your GitHub username and repository name:
   ```js
   export default defineConfig({
     integrations: [tailwind()],
     site: 'https://YOUR_USERNAME.github.io',
     base: '/YOUR_REPO_NAME',
   });
   ```

3. **Enable GitHub Pages**:
   - Go to your repository Settings → Pages
   - Under "Build and deployment", select "GitHub Actions" as the source

4. **Push to main branch**: Every push to the `main` branch will automatically trigger a deployment.

### Manual Deployment

You can also trigger a deployment manually from the Actions tab in your GitHub repository.

## 📁 Project Structure

```
/
├── public/
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Features.astro
│   │   ├── FeatureCard.astro
│   │   ├── FeatureSection.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── Navigation.astro
│   │   └── Pricing.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       ├── 404.astro
│       └── index.astro
├── astro.config.mjs
├── package.json
├── tailwind.config.mjs
└── tsconfig.json
```

## 🛠️ Built With

- [Astro](https://astro.build/) - Static site generator
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Outfit Font](https://fonts.google.com/specimen/Outfit) - Typography

## 📄 License

© 2024 Paperclip. All rights reserved.
