# Quick Start Guide

Get your portfolio live in 5 minutes!

## Step 1: Customize Your Content (2 min)

Edit `index.html`:

1. **Line 6**: Change `<title>Your Name - Portfolio</title>` to your name
2. **Line 15**: Change `<h1 class="title">Your Name Here</h1>` 
3. **Social buttons** (Lines 17-31): Update your links
4. **Bio section** (Lines 53-58): Write about yourself
5. **Experience section** (Lines 75-90): Add your jobs
6. **Projects section** (Lines 103-130): Add your projects
7. **Footer**: Update links and credits

### Quick Template:

```html
<!-- Change social links -->
<a href="https://linkedin.com/in/YOUR_USERNAME" target="_blank" class="btn btn-social">
    <span class="icon">in</span> LinkedIn
</a>

<!-- Update experience -->
<div class="experience-card">
    <div class="experience-logo">🏢</div>
    <div class="experience-content">
        <h3>Your Company</h3>
        <p class="role">Your Position</p>
        <p class="meta">01/2024 - Present</p>
        <p class="description">What you did</p>
    </div>
</div>
```

## Step 2: Test Locally (1 min)

**Option A: Simple (Drag & Drop)**
- Right-click `index.html` → Open with → Your browser

**Option B: With Local Server (Better)**
```bash
cd d:\portfolio-2026
python -m http.server 8000
# Open http://localhost:8000 in browser
```

### Test Checklist:
- [ ] All links work
- [ ] Dark mode toggle works (button in top-right)
- [ ] Mobile view looks good (F12 → Device toolbar)
- [ ] No typos
- [ ] All your info is correct

## Step 3: Deploy to GitHub Pages (2 min)

### 3.1 Create Repository

1. Go to https://github.com/new
2. Name: `portfolio-2026` (or any name)
3. Description: "My portfolio website"
4. Choose Public
5. **Skip** "Add .gitignore" and "Add license"
6. Click "Create repository"

### 3.2 Push Your Code

Copy these commands to your terminal/PowerShell:

```bash
cd d:\portfolio-2026

git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio-2026.git
git push -u origin main
```

**Replace `YOUR_USERNAME`** with your actual GitHub username!

### 3.3 Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (gear icon)
3. Scroll down to **Pages** section (left sidebar)
4. Under "Build and deployment":
   - Source: **Deploy from a branch**
   - Branch: **main** | **/ (root)**
5. Click **Save**
6. Wait 2-3 minutes for deployment
7. Your site is live at: `https://YOUR_USERNAME.github.io/portfolio-2026`

## Step 4: Custom Domain (Optional - 5 min)

### Using a .me or Custom Domain:

1. Buy a domain (namecheap.com, godaddy.com, etc.)
2. Edit DNS settings:
   - Add `A` record: `185.199.108.153`
   - Add `A` record: `185.199.109.153`
   - Add `A` record: `185.199.110.153`
   - Add `A` record: `185.199.111.153`

3. On GitHub, go to your repo **Settings > Pages**
4. Add your custom domain in the "Custom domain" field
5. Click **Save**
6. Check "Enforce HTTPS"

**More help**: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-site

## Step 5: Share! 🎉

- Post on social media
- Add to LinkedIn profile
- Share in your resume/email signature
- Send to friends and mentors

## Common Issues & Fixes

### Problem: Git not recognized
**Solution**: Install Git from https://git-scm.com/

### Problem: Git push fails
**Solution**: 
1. Create personal access token: https://github.com/settings/tokens
2. Copy token (keep safe!)
3. When prompted, paste token as password (not your GitHub password)

### Problem: Site shows "404 Not Found"
**Solution**: 
1. Go to repo Settings > Pages
2. Check branch is set to `main`
3. Check folder is `/ (root)`
4. Wait 2-3 minutes and refresh

### Problem: Changes not showing on live site
**Solution**:
1. Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
2. Wait 5 minutes for GitHub Pages to rebuild
3. Check you pushed with `git push`

### Problem: Dark mode not saving
**Solution**: 
- Check browser allows localStorage
- Disable browser extensions blocking scripts
- Try different browser

## Customization Tips

### Change Colors
Edit `styles.css` line 1-16:
```css
:root {
    --accent-color: #0066cc;  /* Blue to your color */
}
```

### Change Fonts
Edit `styles.css` line 13-14:
```css
--font-family: 'Arial', sans-serif;  /* Change to any font */
--font-mono: 'Courier New', monospace;
```

### Add More Sections
Copy any section in `index.html` and customize:
```html
<section class="content-section">
    <div class="section-header">— cat ~/your-section.md</div>
    <div class="section-content">
        <!-- Your content here -->
    </div>
</section>
```

## Resources

- **Markdown**: https://www.markdownguide.org/
- **Git**: https://git-scm.com/book/en/v2
- **GitHub Pages**: https://docs.github.com/en/pages
- **CSS**: https://developer.mozilla.org/en-US/docs/Web/CSS
- **Fonts**: https://fonts.google.com/

## Next Steps

1. ✅ Customize content
2. ✅ Test locally
3. ✅ Deploy to GitHub
4. ✅ Set up custom domain (optional)
5. ✅ Share your portfolio!

---

**Having issues?** 
- Check the README.md
- Review the CONTENT-TEMPLATE.md
- Google the error message
- Ask on Stack Overflow

Good luck! 🚀
