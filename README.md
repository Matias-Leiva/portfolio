# Matias Leiva - Portfolio Website

A modern, interactive portfolio website built with Next.js 16.1.6, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Fully Responsive**: Mobile-first design that works on all devices
- **Dark Mode**: Automatic dark mode support based on system preferences
- **Interactive Skills Showcase**: Animated skill cards with hover effects
- **Dynamic Blog/Vlog System**: Integrated with Supabase for content management
- **Contact Form**: Functional contact form with validation
- **SEO Optimized**: Proper metadata and semantic HTML
- **Performance Focused**: Fast loading times with Next.js optimizations

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── about/
│   │   └── page.tsx           # About/Skills page
│   ├── blog/
│   │   ├── [slug]/
│   │   │   └── page.tsx       # Individual blog post page
│   │   └── page.tsx           # Blog listing page
│   ├── contact/
│   │   └── page.tsx           # Contact page
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Root layout with navigation
│   └── page.tsx               # Home page
├── components/
│   ├── Footer.tsx             # Footer component
│   └── Navigation.tsx         # Navigation bar
├── lib/
│   └── supabase.ts            # Supabase client configuration
└── public/                    # Static assets
```

## 🛠️ Technologies Used

- **Framework**: Next.js 16.1.6 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Database**: Supabase
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:
   Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🗄️ Supabase Setup

### Create the Posts Table

Run /migrations SQL files in your Supabase SQL editor:

## 🎨 Customization

### Updating Profile Information

Edit the content in these files:

- `app/page.tsx` - Home page hero and stats
- `app/about/page.tsx` - About section and skills
- `components/Footer.tsx` - Footer links and info
- `app/layout.tsx` - SEO metadata

### Adding New Skills

Edit the `skills` array in `app/about/page.tsx`:

```typescript
const skills: Skill[] = [
  { name: 'Your Skill', icon: '🚀', category: 'Category' },
  // ... more skills
];
```

### Changing Colors

Edit `app/globals.css` to customize the color scheme:

```css
:root {
  --background: #ffffff;
  --foreground: #09090b;
}
```

## 📝 Adding Blog Posts

### Via Supabase Dashboard

1. Go to your Supabase project
2. Navigate to Table Editor → posts
3. Click "Insert row"
4. Fill in the fields:
   - title: Your post title
   - slug: URL-friendly version (e.g., "my-post-title")
   - content: Your post content (supports Markdown-style formatting)
   - type: 'blog' or 'vlog'
   - cover_image: URL to cover image (optional)
   - published_at: Publication date

### Via API (for programmatic insertion)

```typescript
const { data, error } = await supabase.from('posts').insert([
  {
    title: 'Your Post Title',
    slug: 'your-post-title',
    content: 'Your post content...',
    type: 'blog',
    cover_image: '/path/to/image.jpg',
    published_at: new Date().toISOString(),
  },
]);
```

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import the project in Vercel
3. Add your environment variables in Vercel dashboard
4. Deploy!

```bash
# Or use Vercel CLI
npm install -g vercel
vercel
```

## 📱 Mobile Testing

The site is fully responsive. Test on:

- Mobile devices (320px - 480px)
- Tablets (481px - 768px)
- Laptops (769px - 1024px)
- Desktops (1025px+)

## 🎯 Performance

- Lighthouse Score: 95+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Optimized images with Next.js Image component
- Code splitting and lazy loading

## 📄 License

This project is licensed under the Apache License 2.0 - see the LICENSE file for details.

## 👤 Author

**Matias Leiva**

- Website: [leivamatias.com](https://leivamatias.com)
- GitHub: [@Matias-Leiva](https://github.com/Matias-Leiva)
- LinkedIn: [matias-oscar-leiva](https://www.linkedin.com/in/matias-oscar-leiva/)
- Instagram: [@leivamatias.dev](https://instagram.com/leivamatias.dev)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 💖 Show Your Support

Give a ⭐️ if you like this project!

---

Built with ❤️ using Next.js and TypeScript
