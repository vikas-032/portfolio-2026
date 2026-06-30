# Images & Assets Setup

Guide for adding images to your portfolio.

## Image Types Needed

### 1. Company/Experience Logos
- **Usage**: Experience section
- **Size**: 60x60px (displays at 2.5rem)
- **Format**: PNG or SVG
- **Example**: Folder: `assets/experience/`

### 2. Project Thumbnails
- **Usage**: Project cards
- **Size**: 280x200px (cards are responsive)
- **Format**: PNG, JPG, or WebP
- **Example**: Folder: `assets/projects/`

### 3. Profile Image
- **Usage**: If adding a whoami image
- **Size**: 300x300px
- **Format**: PNG or JPG
- **Example**: `assets/profile.jpg`

## Folder Structure

```
portfolio-2026/
├── index.html
├── styles.css
├── script.js
├── README.md
├── QUICK-START.md
├── CONTENT-TEMPLATE.md
├── .gitignore
└── assets/                  # Create this folder
    ├── experience/          # Company logos
    │   ├── company1.png
    │   ├── company2.png
    │   └── company3.png
    ├── projects/            # Project thumbnails
    │   ├── project1.png
    │   ├── project2.png
    │   └── project3.png
    └── profile.jpg          # Your photo (optional)
```

## How to Use Images in HTML

### Current Setup (Using Emojis - No Files Needed)
```html
<div class="experience-logo">📍</div>
<div class="project-image">🚀</div>
```

**Advantage**: No image files to manage, works everywhere, loads fast
**Current**: Portfolio uses emojis for all icons

### Option 1: Add Company Logos

1. **Create folder**: `assets/experience/`
2. **Save logos**: Download company logos or use emojis
3. **Update HTML**:

```html
<!-- BEFORE (Emoji) -->
<div class="experience-logo">📍</div>

<!-- AFTER (Image) -->
<div class="experience-logo">
    <img src="assets/experience/nvidia.png" alt="NVIDIA logo">
</div>
```

4. **Update CSS** (in `styles.css`):
```css
.experience-logo img {
    width: 60px;
    height: 60px;
    object-fit: contain;
}
```

### Option 2: Add Project Thumbnails

1. **Create folder**: `assets/projects/`
2. **Save thumbnails**: Screenshots or graphics of your projects
3. **Update HTML**:

```html
<!-- BEFORE (Emoji) -->
<div class="project-image">🚀</div>

<!-- AFTER (Image) -->
<div class="project-image">
    <img src="assets/projects/myproject.png" alt="MyProject screenshot">
</div>
```

4. **Update CSS**:
```css
.project-image img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 4px;
}
```

## Image Sources

### Company Logos
- **Google**: `logos.clearbit.com/[company-domain]`
- **Example**: `logos.clearbit.com/google.com`
- **GitHub**:  https://github.com/gilbarbara/logos (huge collection)
- **SVG Logos**: https://www.svgrepo.com/
- **High Quality**: https://www.brandsdb.com/

### Project Screenshots
- Take screenshots of your projects
- For web apps: Full page screenshots
- For games: Gameplay screenshots
- For mobile: Device frames add professionalism

### Profile Photo
- Professional headshot (optional)
- 300x300px square crop
- Well-lit, friendly expression
- High resolution (JPG quality 80+)

## Image Optimization

### File Size Matters
Large images slow down your site! Follow these guides:

**Before uploading:**
1. Resize to needed dimensions
2. Compress: https://tinypng.com/ or https://compressor.io/
3. Convert to WebP for best compression
4. Target: Under 100KB per image

**In HTML:**
```html
<!-- Modern approach with multiple formats -->
<picture>
    <source srcset="image.webp" type="image/webp">
    <img src="image.jpg" alt="Description">
</picture>
```

### Responsive Images
```html
<!-- Loads different sizes for different screen sizes -->
<img 
    srcset="
        image-small.jpg 480w,
        image-medium.jpg 800w,
        image-large.jpg 1200w
    "
    sizes="(max-width: 600px) 100vw, 50vw"
    src="image-large.jpg"
    alt="Description"
>
```

## Step-by-Step: Add Company Logos

1. **Create assets folder**:
```bash
cd d:\portfolio-2026
mkdir assets
mkdir assets\experience
mkdir assets\projects
```

2. **Find and download logos**:
   - Using Clearbit: `https://logos.clearbit.com/google.com` → Save as `google.png`
   - Or use GitHub logos repo (download individual files)

3. **Optimize images**:
   - Resize to 60x60px
   - Compress with TinyPNG
   - Should be < 20KB each

4. **Update HTML**:
```html
<div class="experience-logo">
    <img src="assets/experience/google.png" alt="Google logo" width="60" height="60">
</div>
```

5. **Add CSS** (if needed):
```css
.experience-logo img {
    width: 60px;
    height: 60px;
    object-fit: contain;
}
```

6. **Test**: 
   - Check image loads
   - Verify sizing
   - Test dark mode (logos should have contrast)

## Alternative: Use Font Icons

Instead of images, use icon fonts:

```html
<!-- Using Font Awesome (requires CDN) -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">

<!-- In HTML -->
<div class="experience-logo">
    <i class="fas fa-briefcase"></i>
</div>
```

## Git & Images

**Important**: Add images to `.gitignore` if they're very large!

```bash
# In .gitignore (add if images > 5MB each)
assets/large-videos/*
*.psd
*.ai
```

**Better**: Keep images in Git (they're usually small compressed PNGs)

## Recommended Approach for Your Portfolio

✅ **Best**: Use emojis (current) - Fast, simple, no files
✅ **Good**: Add company logos + project screenshots
✅ **Optional**: Add profile photo for whoami section

## Checklist

- [ ] Create `assets/` folder structure
- [ ] Download/create company logos (if using)
- [ ] Screenshot your projects
- [ ] Optimize all images (< 100KB each)
- [ ] Update HTML src paths
- [ ] Test locally
- [ ] Push to GitHub
- [ ] Verify images display on live site

## Still Having Issues?

Common problems:

**Images not showing?**
- Check file path is correct (relative path from index.html)
- Check filename spelling (case-sensitive on Linux)
- Try full URL temporarily to test
- Check browser console for errors (F12)

**Images too big?**
- Resize in image editor
- Compress with TinyPNG
- Convert PNG to WebP

**Images blurry?**
- Use higher resolution source
- Ensure DPI is 72 or higher
- Don't stretch images in CSS (use object-fit instead)

---

Still need help? Check the README.md or QUICK-START.md
