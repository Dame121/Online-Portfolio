# Damewan Bareh - Portfolio Website

A modern, professional, and visually appealing personal portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

- 🎨 **Modern Design**: Clean, minimal, and professional aesthetic
- 📱 **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- ⚡ **Performance Optimized**: Built with Next.js 14 for lightning-fast loading
- 🎭 **Smooth Animations**: Engaging animations using Framer Motion
- 🌓 **Dark Mode Support**: Automatic dark/light theme based on system preferences
- 🔍 **SEO Optimized**: Meta tags, Open Graph, and semantic HTML
- ♿ **Accessible**: WCAG compliant with proper ARIA labels

## 📋 Sections

1. **Hero Section**: Introduction with profile image and social links
2. **About Me**: Personal background and expertise
3. **Skills**: Interactive grid of technologies and tools
4. **Projects**: Showcase of featured projects with descriptions
5. **Experience**: Achievements and core competencies
6. **Contact**: Contact form and information
7. **Footer**: Copyright and social links

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn or pnpm

### Installation

1. **Clone or navigate to the repository**:
   ```bash
   cd d:\Portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Building for Production

Build the application for production:

```bash
npm run build
npm start
```

## 🌐 Deployment to Vercel (Free Tier)

### Method 1: Deploy via Vercel Dashboard (Recommended)

1. **Create a Vercel Account**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up with your GitHub account

2. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Portfolio website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

3. **Import Project to Vercel**:
   - Go to [vercel.com/new](https://vercel.com/new)
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

4. **Your site is live!**
   - Vercel will provide you with a URL like: `https://your-portfolio.vercel.app`
   - Custom domains can be added in Project Settings

### Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```

4. **Deploy to Production**:
   ```bash
   vercel --prod
   ```

## ⚙️ Configuration

### Updating Personal Information

Edit the following files to customize with your information:

1. **src/components/Hero.tsx**: Update name, title, and profile image
2. **src/components/About.tsx**: Modify about text and highlights
3. **src/components/Skills.tsx**: Add/remove skills and technologies
4. **src/components/Projects.tsx**: Update project details
5. **src/components/Contact.tsx**: Update contact information and email
6. **src/app/layout.tsx**: Update metadata (title, description, keywords)

### Adding Resume Download

To add a downloadable resume:

1. Place your resume PDF in `public/resume.pdf`
2. Add a download button in the Hero or About section:
   ```tsx
   <a
     href="/resume.pdf"
     download
     className="px-8 py-3 bg-primary-600 text-white rounded-full"
   >
     Download Resume
   </a>
   ```

### Customizing Colors

Edit `tailwind.config.ts` to change the color scheme:

```typescript
colors: {
  primary: {
    // Change these values to your preferred colors
    500: '#0ea5e9',
    600: '#0284c7',
    // ...
  },
}
```

## 📧 Contact Form Setup

The contact form currently uses `mailto:` links. For production, consider integrating:

- **EmailJS**: Free email service for contact forms
- **Formspree**: Simple form backend
- **SendGrid**: Email API service

### EmailJS Setup (Recommended for Free Tier)

1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Create an email service
3. Install EmailJS: `npm install emailjs-com`
4. Update `Contact.tsx` with your EmailJS credentials

## 🎨 Customization Tips

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `src/app/page.tsx`
3. Add navigation link in `src/components/Navbar.tsx`

### Changing Animations

Modify animation properties in components:
```tsx
initial={{ y: 50, opacity: 0 }}
animate={{ y: 0, opacity: 1 }}
transition={{ duration: 0.6 }}
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md, lg)
- **Desktop**: > 1024px (xl, 2xl)

## 🔧 Troubleshooting

### Build Errors

If you encounter build errors:

1. Delete `.next` folder and `node_modules`
2. Reinstall dependencies: `npm install`
3. Clear cache: `npm cache clean --force`

### Styling Issues

- Make sure Tailwind CSS is properly configured
- Check for conflicting class names
- Verify dark mode classes are working

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📞 Support

For support, email damewan.bareh@example.com or open an issue in the repository.

## 🌟 Show Your Support

Give a ⭐️ if you like this project!

---

**Built with ❤️ by Damewan Bareh**

*"Building intelligent solutions, one commit at a time"*
