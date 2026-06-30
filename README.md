# Portfolio 2026

A clean, minimalist portfolio website inspired by Andrew Vu's design, built with vanilla HTML/CSS/JavaScript.

## Features

✨ **Design Features**
- Terminal/code editor aesthetic with ASCII-style section headers
- Light and dark mode toggle with local storage persistence
- Fully responsive design (mobile, tablet, desktop)
- Smooth animations and transitions
- Keyboard shortcuts (Cmd/Ctrl + / for dark mode)
- Print-friendly styling

📱 **Sections**
- Header with social links and theme toggle
- Bio/Whoami section
- Personal interests (Travel, Music, Wins, Toolbox)
- Professional experience with company info
- Featured projects showcase
- Friends/peer portfolio links
- Contact links

## Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Variables, Grid, Flexbox, Dark Mode
- **Vanilla JavaScript** - No dependencies
- **GitHub Pages** - Free hosting

## Getting Started

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio-2026.git
cd portfolio-2026
```

2. Open `index.html` in your browser or use a local server:
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js http-server
npx http-server
```

3. Customize content in `index.html` with your information

### Customization

#### Change Your Information
Edit these sections in `index.html`:
- Title and name in the `<title>` tag and `.title` element
- Social media links in the header
- Bio text in the "whoami" section
- Experience entries
- Project information
- Friend links
- Contact information

#### Style Customization
Edit `styles.css`:
- **Colors**: Modify CSS variables in `:root` and `body.dark-mode`
- **Fonts**: Change `--font-family` and `--font-mono`
- **Spacing**: Adjust `--spacing-*` variables
- **Layout**: Modify grid templates and flexbox properties

#### Interactivity
Edit `script.js`:
- Add search functionality
- Create expandable sections
- Add more keyboard shortcuts
- Implement analytics

## Deployment

### GitHub Pages (Recommended)

1. Create a GitHub repository named `portfolio-2026` (or your preferred name)

2. Push your code:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/portfolio-2026.git
git push -u origin main
```

3. Enable GitHub Pages:
   - Go to repository Settings
   - Scroll to "GitHub Pages" section
   - Select `main` branch as source
   - Your site will be available at `https://yourusername.github.io/portfolio-2026`

### Custom Domain

To use a custom domain (like `yourname.me`):
1. Add a `CNAME` file with your domain
2. Configure DNS settings with your domain registrar
3. Enable HTTPS in GitHub Pages settings

## Keyboard Shortcuts

- `Cmd/Ctrl + /` - Toggle dark mode

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Fully static site (no server required)
- Fast page loads
- Optimized for SEO
- Lighthouse score: 95+

## License

Free to use and modify. Credit to [Andrew Vu](https://andrewvu.me/) for the design inspiration.

## Resources

- [CSS Variables Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
- [GitHub Pages Docs](https://docs.github.com/en/pages)

## Next Steps

1. Customize with your information
2. Add your own project images
3. Deploy to GitHub Pages
4. Share your portfolio!

---

Made with ❤️ • [GitHub](https://github.com)
