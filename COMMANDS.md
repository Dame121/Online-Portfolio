# Commands Cheatsheet

Quick reference for all commands you'll need.

## 📦 Initial Setup

```bash
# Navigate to project
cd d:\Portfolio

# Install dependencies
npm install
```

## 🚀 Development

```bash
# Start development server
npm run dev

# Open in browser
# Navigate to: http://localhost:3000

# Stop server
# Press Ctrl+C in terminal
```

## 🔨 Building

```bash
# Create production build
npm run build

# Test production build locally
npm run start

# Lint code
npm run lint
```

## 📤 Git Commands

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit changes
git commit -m "Your commit message"

# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Push to GitHub
git push -u origin main

# Check status
git status

# View commit history
git log --oneline
```

## 🌐 Vercel Deployment

```bash
# Install Vercel CLI (one-time)
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod

# Check deployment status
vercel ls

# Open project in browser
vercel open
```

## 🔧 Troubleshooting

```bash
# Clear node modules and reinstall
rm -rf node_modules
rm package-lock.json
npm install

# Clear Next.js cache
rm -rf .next
npm run build

# Clear npm cache
npm cache clean --force
```

## 📝 Common Tasks

### Update Dependencies
```bash
# Check for outdated packages
npm outdated

# Update all packages
npm update

# Update specific package
npm install package-name@latest
```

### Environment Variables
```bash
# Create .env.local file
echo "NEXT_PUBLIC_API_KEY=your_key" > .env.local

# Never commit .env files!
# They're in .gitignore
```

## 🎨 Customization Quick Tips

### Change Colors
Edit `tailwind.config.ts`:
```typescript
primary: {
  500: '#YOUR_COLOR',
}
```

### Add New Section
1. Create component in `src/components/NewSection.tsx`
2. Import in `src/app/page.tsx`
3. Add navigation link in `Navbar.tsx`

### Update Profile Image
Edit `src/components/Hero.tsx`:
```typescript
src="YOUR_IMAGE_URL"
```

## 📱 Testing Responsive Design

```bash
# Development server must be running
npm run dev

# Then open in browser:
# Mobile: Ctrl+Shift+M (Chrome DevTools)
# Test different devices in DevTools
```

## 🔍 SEO & Performance

```bash
# Build and test locally
npm run build
npm start

# Test with Lighthouse:
# 1. Open site in Chrome
# 2. F12 → Lighthouse tab
# 3. Generate report
```

## 📊 Analytics

### Add Vercel Analytics
```bash
# Install package
npm install @vercel/analytics

# Add to layout.tsx:
# import { Analytics } from '@vercel/analytics/react'
# <Analytics />
```

## 🐛 Debug Mode

```bash
# Run with debug logging
NODE_ENV=development npm run dev

# Check for TypeScript errors
npx tsc --noEmit
```

## 🔄 Update Portfolio

```bash
# Edit files in src/components/
# Save changes
# Check in browser (auto-refreshes)
# Commit and push
git add .
git commit -m "Update: description"
git push

# Vercel auto-deploys from GitHub
```

## 📞 Quick Links

- **Local Dev**: http://localhost:3000
- **Vercel Dashboard**: https://vercel.com/dashboard
- **GitHub Repo**: https://github.com/YOUR_USERNAME/YOUR_REPO
- **Live Site**: https://YOUR_PROJECT.vercel.app

## 💡 Pro Tips

```bash
# Open VS Code from terminal
code .

# Search in files (VS Code)
Ctrl+Shift+F

# Format code (VS Code)
Shift+Alt+F

# Multi-cursor editing
Alt+Click
```

---

Keep this file handy for quick reference! 🚀
