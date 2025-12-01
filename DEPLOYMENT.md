# Vercel Deployment Guide

This guide will walk you through deploying your portfolio to Vercel's free tier.

## 🚀 Quick Deployment (5 minutes)

### Step 1: Push to GitHub

1. Create a new repository on [GitHub](https://github.com/new)
2. Push your code:

```bash
cd d:\Portfolio
git init
git add .
git commit -m "Initial commit: Portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### Step 2: Deploy to Vercel

1. **Sign Up/Login to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Sign Up" and choose "Continue with GitHub"
   - Authorize Vercel to access your GitHub account

2. **Import Your Project**
   - Click "Add New..." → "Project"
   - Select "Import Git Repository"
   - Choose your portfolio repository from the list
   - Click "Import"

3. **Configure Project**
   - **Project Name**: Choose a name (e.g., `damewan-portfolio`)
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build` (auto-filled)
   - **Output Directory**: `.next` (auto-filled)
   - Click "Deploy"

4. **Wait for Deployment**
   - Vercel will build and deploy your site (usually takes 1-2 minutes)
   - You'll see a success screen with your live URL

5. **Your Site is Live! 🎉**
   - Your portfolio is now live at: `https://your-project-name.vercel.app`
   - Every push to the `main` branch will automatically deploy updates

## 🔧 Configuration Options

### Custom Domain

To add a custom domain (e.g., `damewanbareh.com`):

1. Go to your project dashboard on Vercel
2. Click "Settings" → "Domains"
3. Enter your domain name
4. Follow the DNS configuration instructions
5. Wait for DNS propagation (can take up to 24 hours)

### Environment Variables

If you need to add environment variables:

1. Go to "Settings" → "Environment Variables"
2. Add your variables (e.g., for EmailJS, API keys)
3. Redeploy to apply changes

Example:
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_USER_ID=your_user_id
```

## 📊 Vercel Free Tier Limits

The free tier includes:
- ✅ Unlimited personal projects
- ✅ Automatic HTTPS
- ✅ Continuous deployment from Git
- ✅ 100GB bandwidth per month
- ✅ Serverless functions
- ✅ Custom domains
- ✅ Analytics (limited)

Perfect for personal portfolios!

## 🔄 Updating Your Portfolio

After deployment, updating is automatic:

```bash
# Make changes to your code
git add .
git commit -m "Update: Added new project"
git push origin main
```

Vercel will automatically detect the push and redeploy your site!

## 🌐 Alternative Deployment Options

### Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login:
```bash
vercel login
```

3. Deploy from project directory:
```bash
cd d:\Portfolio
vercel
```

4. Deploy to production:
```bash
vercel --prod
```

### One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/YOUR_REPO_NAME)

Add this button to your README.md for easy one-click deployment.

## 🎯 Post-Deployment Checklist

- [ ] Test on mobile devices
- [ ] Check all links work correctly
- [ ] Verify dark mode functionality
- [ ] Test contact form
- [ ] Check page load speed (use [PageSpeed Insights](https://pagespeed.web.dev/))
- [ ] Verify SEO meta tags (use [Meta Tags](https://metatags.io/))
- [ ] Set up custom domain (optional)
- [ ] Enable Vercel Analytics (optional)

## 🐛 Troubleshooting

### Build Failed
- Check the build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility

### Images Not Loading
- Make sure images are in the `public` folder
- Use relative paths starting with `/`

### 404 on Custom Domain
- Check DNS settings
- Wait for DNS propagation (up to 24 hours)
- Verify domain is correctly configured in Vercel

## 📞 Need Help?

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Community](https://github.com/vercel/vercel/discussions)

---

**Happy Deploying! 🚀**
