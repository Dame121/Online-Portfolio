# 🚀 Getting Started - Step by Step

Follow these simple steps to get your portfolio live!

## Step 1: Install Dependencies ⚙️

Open PowerShell/Terminal in the Portfolio folder and run:

```powershell
cd d:\Portfolio
npm install
```

⏱️ This will take 2-3 minutes to download all required packages.

---

## Step 2: Preview Your Site Locally 👀

Start the development server:

```powershell
npm run dev
```

✅ **Success!** Open your browser and go to: http://localhost:3000

You should see your portfolio running locally!

---

## Step 3: Customize Your Content ✏️

### Update Your Information

Open these files and edit your details:

1. **`src/components/Hero.tsx`**
   - Line 31: Change profile image URL
   - Line 47-54: Update name and title

2. **`src/components/About.tsx`**
   - Line 58-75: Edit your bio and description

3. **`src/components/Projects.tsx`**
   - Line 16-76: Add/edit your projects

4. **`src/components/Skills.tsx`**
   - Line 18-61: Add/remove your skills

5. **`src/components/Contact.tsx`**
   - Line 37: Update email address
   - Line 52-75: Update contact information

6. **`src/app/layout.tsx`**
   - Line 11-15: Update SEO metadata

💾 **Save all files** - the browser will auto-refresh!

---

## Step 4: Test on Different Devices 📱

While `npm run dev` is running:

1. Open Chrome DevTools (F12)
2. Click the device toolbar icon (Ctrl+Shift+M)
3. Test on different screen sizes:
   - iPhone 12 Pro
   - iPad Air
   - Desktop (1920x1080)

✅ Make sure everything looks good on all devices!

---

## Step 5: Push to GitHub 📤

### First Time Setup:

1. **Create a new repository on GitHub:**
   - Go to https://github.com/new
   - Name: `portfolio` (or any name you like)
   - Keep it Public
   - Don't add README (we already have one)
   - Click "Create repository"

2. **Push your code:**

```powershell
git init
git add .
git commit -m "Initial commit: My portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username!

---

## Step 6: Deploy to Vercel 🌐

### Quick Deploy (Recommended):

1. **Sign up for Vercel:**
   - Go to https://vercel.com
   - Click "Sign Up"
   - Choose "Continue with GitHub"
   - Authorize Vercel

2. **Import your project:**
   - Click "Add New..." → "Project"
   - Find your `portfolio` repository
   - Click "Import"

3. **Configure:**
   - Project Name: `damewan-portfolio` (or your choice)
   - Framework Preset: Next.js ✅ (auto-detected)
   - Click "Deploy"

4. **Wait for deployment:**
   - ⏱️ Takes about 1-2 minutes
   - Watch the build logs (optional)

5. **🎉 Success!**
   - Your portfolio is now live!
   - You'll get a URL like: `https://damewan-portfolio.vercel.app`

---

## Step 7: Share Your Portfolio 🎊

Your portfolio is now live! Share it:

- ✅ Add to your GitHub profile README
- ✅ Add to your LinkedIn profile
- ✅ Include in your resume
- ✅ Share with recruiters

---

## 🔄 Making Updates

Whenever you want to update your portfolio:

1. **Edit files** in `src/components/`
2. **Test locally**: `npm run dev`
3. **Commit changes**:
   ```powershell
   git add .
   git commit -m "Update: Added new project"
   git push
   ```
4. **Vercel auto-deploys** your changes! ✨

---

## 📞 Need Help?

### Common Issues:

**"npm: command not found"**
- Install Node.js from https://nodejs.org

**"Port 3000 is already in use"**
- Stop other dev servers or use: `npm run dev -- -p 3001`

**"Build failed"**
- Run: `npm install`
- Delete `node_modules` and `.next` folders
- Run `npm install` again

**"Git command not found"**
- Install Git from https://git-scm.com

---

## ✅ Deployment Checklist

Before going live, make sure:

- [ ] Updated all personal information
- [ ] Changed profile image
- [ ] Added real projects
- [ ] Updated contact email
- [ ] Tested on mobile
- [ ] Checked all links work
- [ ] No console errors
- [ ] Dark mode works

---

## 🎯 What's Next?

After deployment:

1. **Add custom domain** (optional)
   - Buy domain from Namecheap, GoDaddy, etc.
   - Add to Vercel in Project Settings

2. **Enable analytics** (optional)
   - Vercel Analytics (free tier available)
   - Google Analytics

3. **Keep updating!**
   - Add new projects
   - Update skills
   - Improve design

---

## 🌟 Pro Tips

- **Keep it updated**: Add new projects as you build them
- **Quality over quantity**: 4-6 strong projects > 20 weak ones
- **Mobile-first**: Most recruiters view on mobile
- **Fast loading**: Optimize images, keep it snappy
- **Clear CTAs**: Make it easy to contact you
- **Professional email**: Use a professional email address

---

## 🎉 Congratulations!

You now have a professional portfolio website that will impress recruiters!

**Your portfolio is:**
- ✅ Modern and professional
- ✅ Fully responsive
- ✅ Optimized for performance
- ✅ SEO-friendly
- ✅ Easy to update

**Share it proudly!** 🚀

---

*Need detailed help? Check:*
- `README.md` - Full documentation
- `DEPLOYMENT.md` - Deployment details
- `COMMANDS.md` - Command reference
- `PROJECT_SUMMARY.md` - Technical details
