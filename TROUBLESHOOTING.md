# Troubleshooting Guide

Common issues and how to fix them.

## Before You Troubleshoot

1. **Clear your browser cache**: `Ctrl+Shift+Delete` (Windows) or `Cmd+Shift+Delete` (Mac)
2. **Hard refresh**: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
3. **Check browser console**: F12 → Console tab
4. **Try a different browser**: Chrome, Firefox, Safari, Edge

## Local Testing Issues

### ❌ Page doesn't display properly

**Symptom**: HTML shows as text, or styles don't load

**Solution**:
1. Check file paths are correct (case-sensitive on Mac/Linux)
2. Don't open HTML with Notepad - use a browser
3. Use a local server:
```bash
# Python 3
python -m http.server 8000

# Or with Node
npx http-server
```

### ❌ Styles are broken / Looks weird

**Symptom**: Page looks like plain text, no formatting

**Causes & Solutions**:
- [ ] `styles.css` file missing → Check file exists in folder
- [ ] Wrong file path → Verify `<link href="styles.css">` is in `index.html`
- [ ] File not saved → Save and refresh browser
- [ ] Cache issue → Hard refresh (Ctrl+Shift+R)

### ❌ JavaScript not working

**Symptom**: Dark mode toggle doesn't work, no animations

**Solutions**:
```bash
# In browser console (F12 → Console), type:
localStorage.getItem('theme')
# Should return 'light' or 'dark'

# Check for errors:
# F12 → Console tab, look for red errors
```

**Common fixes**:
- [ ] `script.js` file missing
- [ ] Browser has JavaScript disabled
- [ ] Extension blocking scripts
- [ ] File path wrong in HTML

### ❌ Links don't work

**Symptom**: Clicking social buttons doesn't go anywhere

**Solution**:
1. Check links are URLs, not `#hashtags`
2. Open console (F12) and check for warnings
3. Verify link format: `https://` not `http://`
4. Test in different browser

```html
✅ Correct:
<a href="https://linkedin.com/in/username" target="_blank">

❌ Wrong:
<a href="linkedin.com/in/username">
<a href="#linkedin">
```

### ❌ Dark mode doesn't save

**Symptom**: Dark mode resets when page reloads

**Solutions**:
1. **Check localStorage is enabled**:
   - Chrome: Settings → Privacy → Cookies & site data
   - Firefox: Settings → Privacy → Cookies & Site Data
   - Safari: Preferences → Privacy → Manage Website Data

2. **Check for browser extensions**:
   - Disable ad blockers, privacy extensions
   - Try incognito/private mode

3. **Check browser console**:
   - F12 → Console → Type `localStorage`
   - Should return an object, not error

## GitHub Pages Issues

### ❌ Repository not showing on GitHub

**Symptom**: Can't find your repo on GitHub

**Solution**:
1. Go to https://github.com/login
2. Click your profile icon → Your repositories
3. Check if repo exists
4. If not, create new at https://github.com/new

### ❌ Changes don't appear on live site

**Symptom**: Changes locally work, but live site hasn't updated

**Causes & Solutions**:
- [ ] Didn't push to GitHub
  ```bash
  git push
  # Or if first time:
  git push -u origin main
  ```

- [ ] GitHub Pages not enabled
  - Go to Settings > Pages
  - Check "Deploy from a branch" is selected
  - Check branch is `main`

- [ ] Branch not found
  ```bash
  # Check current branch:
  git branch

  # If on different branch, switch:
  git checkout main
  git push origin main
  ```

- [ ] Cache issue
  - Hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
  - Wait 5 minutes for rebuild
  - Check deployment log

**Deployment status**:
1. Go to your repo on GitHub
2. Click "Actions" tab
3. Look for recent deployment
4. Green checkmark = success
5. Red X = failed, click to see error

### ❌ Site shows 404 error

**Symptom**: "There isn't a GitHub Pages site here"

**Solutions**:
1. **Check GitHub Pages is enabled**:
   - Settings > Pages
   - Source: Branch should be `main`
   - Folder should be `/ (root)`

2. **Wait for deployment**:
   - Takes 2-3 minutes first time
   - Can take 1 minute for updates
   - Check Actions tab for status

3. **Check repository name**:
   - If repo is named "myportfolio"
   - URL should be: `https://username.github.io/myportfolio/`
   - Not: `https://username.github.io/`

### ❌ Can't commit/push changes

**Symptom**: `git push` fails or asks for password

**Solutions**:

**Problem: Using old password**
```bash
# GitHub no longer accepts passwords for Git operations
# Create Personal Access Token instead:
# 1. Go to https://github.com/settings/tokens
# 2. Click "Generate new token"
# 3. Select "repo" scope
# 4. Copy token
# 5. When prompted for password, paste token
```

**Problem: SSH Key Issues**
```bash
# If using SSH (advanced):
# Generate SSH key:
ssh-keygen -t ed25519 -C "your_email@example.com"

# Add to GitHub:
# https://github.com/settings/ssh/new
# Paste your public key content

# Use SSH URL for remote:
git remote set-url origin git@github.com:USERNAME/repo.git
```

**Problem: Credentials not saved**
```bash
# Store credentials (Windows):
git config --global credential.helper wincred

# Store credentials (Mac):
git config --global credential.helper osxkeychain

# Store credentials (Linux):
git config --global credential.helper store
```

### ❌ Custom domain not working

**Symptom**: Custom domain shows GitHub Pages 404

**Solutions**:
1. **Check DNS records** (varies by registrar):
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   
   Type: A
   Name: @
   Value: 185.199.109.153
   
   Type: A
   Name: @
   Value: 185.199.110.153
   
   Type: A
   Name: @
   Value: 185.199.111.153
   ```

2. **Wait for DNS propagation**:
   - Can take 24-48 hours
   - Check status: https://www.whatsmydns.net/

3. **Enable HTTPS**:
   - Go to repo Settings > Pages
   - Check "Enforce HTTPS"
   - Wait 5 minutes

4. **Add CNAME file**:
   - Create file named `CNAME` (no extension)
   - Content: Your domain (e.g., `yourname.me`)
   - Commit and push

## Content Issues

### ❌ Typos or formatting looks wrong

**Solution**:
1. Edit `index.html` in your editor
2. Make corrections
3. Save file
4. Refresh browser (F5)
5. If live site: Commit, push, wait 1-2 minutes

```bash
git add index.html
git commit -m "Fix typos"
git push
```

### ❌ Images not showing

**Solutions**:
1. **Check image file exists**:
   - Correct folder: `assets/experience/` or `assets/projects/`
   - Correct filename and extension
   - File size < 5MB

2. **Check image path**:
   ```html
   ✅ Correct:
   <img src="assets/experience/logo.png" alt="Company">
   
   ❌ Wrong:
   <img src="/assets/experience/logo.png">
   <img src="C:\portfolio\assets\logo.png">
   ```

3. **Check image format**:
   - Supported: JPG, PNG, WebP, SVG, GIF
   - Not supported: TIFF, BMP, PSD

4. **Browser console errors**:
   - F12 → Console tab
   - Look for 404 or warnings
   - Fix path accordingly

## Performance Issues

### ❌ Page loads slowly

**Solutions**:
1. **Optimize images**:
   - Compress with TinyPNG: https://tinypng.com/
   - Resize to actual dimensions needed
   - Use WebP format when possible
   - Target: < 100KB per image

2. **Check file sizes**:
   ```bash
   # Run in terminal to see file sizes
   ls -lah
   # Should be: index.html ~20KB, css/js ~15KB each
   ```

3. **Enable caching**:
   - GitHub Pages caches automatically
   - Browser caching can be controlled with HTML headers

### ❌ Dark mode toggle is slow

**Solution**: This is typically a browser issue
- [ ] Disable browser extensions
- [ ] Try different browser
- [ ] Check localStorage isn't full

## Mobile/Responsive Issues

### ❌ Looks broken on phone

**Symptom**: Text too small, overlapping, or cut off

**Solutions**:
1. **Check viewport meta tag** (should be in `index.html`):
   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   ```

2. **Test responsive view**:
   - F12 → Click device icon (top-left)
   - Select "iPhone 12" or "iPad"
   - Check layout

3. **Common fixes**:
   - Images too wide → Add `max-width: 100%`
   - Text too small → Increase base font size
   - Buttons overlap → Increase padding or stack vertically

## Browser Compatibility

### ✅ Tested & Working
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- iOS Safari 14+
- Chrome Mobile

### ⚠️ Known Issues
- IE11: Not supported (it's outdated)
- Very old browsers: May not support CSS Grid/Variables

## Need More Help?

1. **Check these files first**:
   - README.md
   - QUICK-START.md
   - CONTENT-TEMPLATE.md

2. **Search for your error**:
   - Google the exact error message
   - Include "GitHub Pages" or "Git" in search

3. **GitHub Docs**:
   - Pages: https://docs.github.com/en/pages
   - Git: https://git-scm.com/book

4. **Stack Overflow**:
   - Search your issue
   - Post with error screenshot

5. **Browser DevTools**:
   - F12 to open
   - Check Console tab for errors
   - Check Network tab to see what loaded/failed

---

**Still stuck?** Try these debugging steps:

1. Take screenshot of the issue
2. Copy any error messages from console
3. Check what you changed last
4. Undo that change and test
5. Try in a different browser
6. Ask on GitHub Discussions or Stack Overflow

Good luck! 🚀
