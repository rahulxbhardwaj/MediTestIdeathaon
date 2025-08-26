# MediTest - Next.js Version

This is a Next.js version of the MediTest website, optimized for deployment on Vercel.

## Features

- Single-page educational website explaining multi-disease diagnostic test strip
- Modern, clean, minimal design with Tailwind CSS
- Responsive design optimized for all devices
- SEO optimized with proper meta tags and Open Graph
- Static export ready for hosting on any platform

## Quick Start

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Deployment on Vercel

### Option 1: Direct Deploy
1. Push this code to a GitHub repository
2. Connect your GitHub repo to Vercel
3. Vercel will automatically deploy

### Option 2: Manual Deploy
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts

### Option 3: Static Export
1. Run `npm run build` to generate static files
2. Upload the `out` folder to any static hosting service

## File Structure

```
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Main homepage
│   └── globals.css     # Global styles
├── public/             # Static assets
├── next.config.js      # Next.js configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── package.json        # Dependencies and scripts
```

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons
- **Static Export** - For universal hosting compatibility

## Website Sections

1. **Hero Section** - "One Strip. Multiple Tests." with key benefits
2. **Diseases Section** - Visual explanation of 4 diseases (Anemia 🩸, Malaria 🦟, Typhoid 💊, Diabetes 🍬)
3. **Process Section** - 3-step process explanation
4. **Footer** - "Affordable, Fast, Accurate – Healthcare for Everyone."

## SEO Features

- Optimized meta titles and descriptions
- Open Graph tags for social media sharing
- Twitter Card support
- Semantic HTML structure
- Mobile-friendly responsive design

## Customization

- Colors can be modified in `tailwind.config.js`
- Content can be updated in `app/page.tsx`
- Meta information can be changed in `app/layout.tsx`