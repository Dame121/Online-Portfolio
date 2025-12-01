# 🔧 Troubleshooting Guide

Common issues and how to fix them.

## 🚨 Installation Issues

### Issue: "npm: command not found" or "npm is not recognized"

**Solution:**
1. Install Node.js from https://nodejs.org (LTS version recommended)
2. Restart your terminal/PowerShell
3. Verify installation:
   ```powershell
   node --version
   npm --version
   ```

---

### Issue: "npm install" fails or hangs

**Solution 1 - Clear npm cache:**
```powershell
npm cache clean --force
npm install
```

**Solution 2 - Delete and reinstall:**
```powershell
Remove-Item node_modules -Recurse -Force
Remove-Item package-lock.json
npm install
```

**Solution 3 - Use different registry:**
```powershell
npm install --registry=https://registry.npmjs.org
```

---

### Issue: "EACCES: permission denied" on Windows

**Solution:**
Run PowerShell as Administrator:
1. Right-click PowerShell icon
2. Select "Run as Administrator"
3. Navigate to project and run commands

---

## 🖥️ Development Server Issues

### Issue: "Port 3000 is already in use"

**Solution 1 - Kill the process:**
```powershell
# Find process on port 3000
netstat -ano | findstr :3000

# Kill the process (replace PID with actual number)
taskkill /PID <PID> /F
```

**Solution 2 - Use different port:**
```powershell
npm run dev -- -p 3001
```

---

### Issue: "npm run dev" doesn't work or crashes

**Solution 1 - Rebuild:**
```powershell
Remove-Item .next -Recurse -Force
npm run dev
```

**Solution 2 - Check Node version:**
```powershell
node --version
# Should be 18.x or higher
```

**Solution 3 - Reinstall dependencies:**
```powershell
Remove-Item node_modules -Recurse -Force
npm install
npm run dev
```

---

### Issue: Changes not reflecting in browser

**Solution:**
1. Hard refresh: `Ctrl + Shift + R`
2. Clear browser cache
3. Check console for errors (F12)
4. Restart dev server

---

## 🎨 Styling Issues

### Issue: Tailwind CSS classes not working

**Solution 1 - Verify Tailwind is installed:**
```powershell
npm list tailwindcss
```

**Solution 2 - Check tailwind.config.ts:**
Ensure content paths are correct:
```typescript
content: [
  "./src/**/*.{js,ts,jsx,tsx,mdx}",
],
```

**Solution 3 - Rebuild:**
```powershell
Remove-Item .next -Recurse -Force
npm run dev
```

---

### Issue: Dark mode not working

**Solution:**
1. Check system settings for dark mode preference
2. Force dark mode for testing in DevTools
3. Verify dark: classes in Tailwind

---

## 🔨 Build Issues

### Issue: "npm run build" fails

**Solution 1 - Check for errors:**
Read the error message carefully - it often tells you exactly what's wrong

**Solution 2 - TypeScript errors:**
```powershell
# Check for TypeScript errors
npx tsc --noEmit

# Fix errors in your code
```

**Solution 3 - Clean build:**
```powershell
Remove-Item .next -Recurse -Force
Remove-Item node_modules -Recurse -Force
npm install
npm run build
```

---

### Issue: Build succeeds but site doesn't work

**Solution:**
1. Check browser console (F12) for errors
2. Verify all imports are correct
3. Check for missing dependencies:
   ```powershell
   npm install
   ```

---

## 🌐 Git Issues

### Issue: "git: command not found" or "git is not recognized"

**Solution:**
1. Install Git from https://git-scm.com
2. Restart terminal/PowerShell
3. Verify:
   ```powershell
   git --version
   ```

---

### Issue: "Permission denied (publickey)" when pushing to GitHub

**Solution:**
1. Generate SSH key:
   ```powershell
   ssh-keygen -t ed25519 -C "your_email@example.com"
   ```
2. Add SSH key to GitHub:
   - Go to GitHub Settings → SSH Keys
   - Add new key
   - Paste your public key from `~/.ssh/id_ed25519.pub`

Or use HTTPS instead:
```powershell
git remote set-url origin https://github.com/username/repo.git
```

---

### Issue: "fatal: not a git repository"

**Solution:**
```powershell
git init
git add .
git commit -m "Initial commit"
```

---

### Issue: Merge conflicts

**Solution:**
1. Open conflicted files
2. Look for markers: `<<<<<<<`, `=======`, `>>>>>>>`
3. Manually resolve conflicts
4. Save files
5. Commit:
   ```powershell
   git add .
   git commit -m "Resolved conflicts"
   ```

---

## 🚀 Deployment Issues

### Issue: Vercel deployment fails

**Solution 1 - Check build logs:**
- Go to Vercel dashboard
- Click on failed deployment
- Read error messages

**Solution 2 - Verify build locally:**
```powershell
npm run build
```
Fix any errors before deploying

**Solution 3 - Check environment variables:**
- Ensure all required env vars are set in Vercel

---

### Issue: Site deployed but shows 404

**Solution:**
1. Check Vercel dashboard - deployment status
2. Verify domain settings
3. Wait a few minutes for DNS propagation
4. Clear browser cache

---

### Issue: Site deployed but images/assets not loading

**Solution:**
1. Verify files are in `public/` folder
2. Use correct paths (start with `/`)
3. Check browser console for 404 errors
4. Redeploy

---

## 📱 Browser Issues

### Issue: Site looks broken on mobile

**Solution:**
1. Test in Chrome DevTools mobile view
2. Check responsive breakpoints
3. Verify viewport meta tag in layout.tsx
4. Test on actual device

---

### Issue: Animations not working

**Solution:**
1. Check browser console for errors
2. Verify framer-motion is installed:
   ```powershell
   npm list framer-motion
   ```
3. Check for JavaScript errors
4. Try different browser

---

### Issue: Slow loading / poor performance

**Solution:**
1. Run Lighthouse audit (Chrome DevTools)
2. Optimize images (compress, use WebP)
3. Remove unused dependencies
4. Check Network tab for slow requests

---

## 🔍 TypeScript Issues

### Issue: Type errors in VSCode

**Solution 1 - Restart TypeScript server:**
- VSCode: `Ctrl+Shift+P`
- Type: "TypeScript: Restart TS Server"

**Solution 2 - Check tsconfig.json:**
Ensure it's properly configured

**Solution 3 - Install type definitions:**
```powershell
npm install --save-dev @types/react @types/node
```

---

### Issue: "Cannot find module" errors

**Solution:**
1. Check import paths are correct
2. Verify file exists
3. Restart VSCode
4. Rebuild:
   ```powershell
   Remove-Item .next -Recurse -Force
   npm run dev
   ```

---

## 🎨 Component Issues

### Issue: Component not rendering

**Solution:**
1. Check import path is correct
2. Verify export statement (default vs named)
3. Check for JavaScript errors in console
4. Add console.log() to debug

---

### Issue: Props not working

**Solution:**
1. Check TypeScript interface matches props
2. Verify prop names (case-sensitive)
3. Check for typos
4. Use TypeScript IntelliSense

---

## 🔐 Environment Variable Issues

### Issue: Environment variables not working

**Solution:**
1. Create `.env.local` file in root
2. Prefix with `NEXT_PUBLIC_` for client-side:
   ```
   NEXT_PUBLIC_API_KEY=your_key
   ```
3. Restart dev server
4. Access with `process.env.NEXT_PUBLIC_API_KEY`

---

## 📧 Email/Form Issues

### Issue: Contact form not working

**Solution:**
The default form uses `mailto:` links.

For production, integrate email service:
1. **EmailJS** (Recommended):
   ```powershell
   npm install emailjs-com
   ```
2. Update Contact.tsx with EmailJS code
3. Add API keys to environment variables

---

## 🖼️ Image Issues

### Issue: Images not loading

**Solution 1 - Check path:**
```tsx
// Correct - files in public/
<img src="/image.jpg" alt="..." />

// Wrong
<img src="./image.jpg" alt="..." />
```

**Solution 2 - Use Next.js Image:**
```tsx
import Image from 'next/image'

<Image 
  src="/image.jpg" 
  alt="..." 
  width={500}
  height={300}
/>
```

---

## 🔄 Cache Issues

### Issue: Old version showing after update

**Solution:**
1. Clear browser cache
2. Hard refresh: `Ctrl + Shift + R`
3. Clear Vercel cache (redeploy)
4. Try incognito mode

---

## 💾 VS Code Issues

### Issue: Extensions not working

**Solution:**
1. Install recommended extensions:
   - ESLint
   - Prettier
   - Tailwind CSS IntelliSense
2. Reload VS Code
3. Check settings.json

---

### Issue: Auto-format not working

**Solution:**
1. Install Prettier extension
2. Enable format on save:
   - File → Preferences → Settings
   - Search "format on save"
   - Check the box

---

## 🆘 Still Stuck?

### Quick Fixes to Try:

1. **Restart everything:**
   ```powershell
   # Stop dev server (Ctrl+C)
   # Close terminal
   # Restart VS Code
   # Restart computer if needed
   npm run dev
   ```

2. **Nuclear option - Fresh start:**
   ```powershell
   Remove-Item node_modules -Recurse -Force
   Remove-Item .next -Recurse -Force
   Remove-Item package-lock.json
   npm cache clean --force
   npm install
   npm run dev
   ```

3. **Check the logs:**
   - Terminal output
   - Browser console (F12)
   - Vercel deployment logs

### Get Help:

- 📖 Check documentation files in project
- 🔍 Google the error message
- 💬 Ask on Stack Overflow
- 📚 Next.js Docs: https://nextjs.org/docs
- 📚 Tailwind Docs: https://tailwindcss.com/docs

### Report Bugs:

If you find a bug in the template:
1. Check if it's already reported
2. Create detailed bug report with:
   - Error message
   - Steps to reproduce
   - Your environment (OS, Node version, etc.)

---

## 📊 Error Message Guide

### Common Error Patterns:

| Error | Likely Cause | Solution |
|-------|--------------|----------|
| "Cannot find module..." | Missing import or typo | Check import path |
| "Unexpected token" | Syntax error | Check for missing brackets/semicolons |
| "Type '...' is not assignable" | TypeScript type error | Fix type definitions |
| "EADDRINUSE" | Port already in use | Kill process or use different port |
| "Network request failed" | API or connectivity issue | Check network/API endpoint |

---

**Remember:** Most issues can be fixed by reading the error message carefully!

If all else fails, try the "nuclear option" above. 💥
