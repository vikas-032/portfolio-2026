# Portfolio Content Template

This file contains templates and guides for customizing your portfolio.

## Your Information

```
Full Name: [Your Name]
Title: [Your Current Role/Title]
Tagline: [One-line description of yourself]
Email: your.email@domain.com
Location: [Your City, State]
```

## Social Links

```
LinkedIn: https://linkedin.com/in/yourprofile
GitHub: https://github.com/yourprofile
X (Twitter): https://x.com/yourprofile
Email: mailto:your.email@domain.com
```

## Bio / Whoami

Write 2-3 paragraphs about yourself:

**Paragraph 1**: Introduction - Who you are and what you do
**Paragraph 2**: What you're passionate about
**Paragraph 3**: What you do in your spare time / Call to action

### Example:
"Hey! I'm [Your Name], a [Your Title] with expertise in [your skills]. 

Most of my time goes into [main interests], and I love building [what you love building].

When I'm not coding, I'm probably [hobbies]. Feel free to reach out to me on LinkedIn!"

## Experience Entries

Format:
```
Company: [Company Name]
Position: [Job Title]
Duration: MM/YYYY - MM/YYYY
Location: [City, State] / [Remote]
Description: [Brief description of role and accomplishments]
Logo: [Emoji or icon]
```

Example:
```
Company: Google
Position: Software Engineer Intern
Duration: 06/2023 - 08/2023
Location: Mountain View, California
Description: Developed features for Google Cloud Platform, optimized database queries improving performance by 40%.
Logo: 🔍
```

## Project Cards

Format:
```
Title: [Project Name]
Description: [1-2 sentence description]
Technologies: [List of tech used]
Image: [Emoji icon]
Links:
  - GitHub: https://github.com/yourrepo
  - Demo: https://project-demo.com
  - Devpost: https://devpost.com/software/project
```

Example:
```
Title: AI Resume Analyzer
Description: Web app that uses OpenAI to analyze resumes and provide feedback on content and formatting.
Technologies: React, Flask, OpenAI API
Image: 📄
Links:
  - GitHub: https://github.com/yourusername/ai-resume-analyzer
  - Demo: https://ai-resume-analyzer.vercel.app
```

## Personal Interests (Random Section)

Create themed pages for:
- **Travel**: Places you've been, want to go
- **Music**: Favorite artists, playlists
- **Wins**: Achievements, milestones, wins
- **Lore**: Personal story, origin story
- **Toolbox**: Tools, apps, resources you use

## Friend Links

List your friend's portfolios (if they've shared them):
```
[Friend's Name](https://friend-portfolio.com)
```

## Customization Checklist

- [ ] Update title with your name
- [ ] Add your social links
- [ ] Write your bio/whoami section
- [ ] Add your experience entries (3-5 most recent)
- [ ] Add your projects (3-5 best projects)
- [ ] Update friend links
- [ ] Update contact links
- [ ] Choose your color scheme (or keep default)
- [ ] Add custom domain (optional)
- [ ] Test on mobile devices
- [ ] Deploy to GitHub Pages
- [ ] Share your portfolio!

## Color Scheme Customization

If you want a different color scheme, edit these CSS variables in `styles.css`:

```css
:root {
    --bg-primary: #f5f3f0;      /* Light background */
    --bg-secondary: #ffffff;    /* Card background */
    --text-primary: #1a1a1a;    /* Main text */
    --text-secondary: #666666;  /* Secondary text */
    --border-color: #1a1a1a;    /* Border color */
    --accent-color: #0066cc;    /* Link color */
}

body.dark-mode {
    --bg-primary: #1a1a1a;      /* Dark background */
    --text-primary: #f5f3f0;    /* Light text on dark */
    /* ... other dark mode colors ... */
}
```

### Color Palette Ideas

**Professional Blue**:
- Primary: #0066cc
- Secondary: #004499

**Modern Purple**:
- Primary: #7c3aed
- Secondary: #6d28d9

**Warm Orange**:
- Primary: #ea580c
- Secondary: #c2410c

**Forest Green**:
- Primary: #15803d
- Secondary: #166534

## Content Tips

✅ **DO**:
- Keep descriptions concise (1-2 sentences)
- Use active voice ("Developed" not "Was involved in")
- Quantify achievements when possible
- Update regularly with new projects
- Proofread for typos
- Use consistent formatting

❌ **DON'T**:
- Use lorem ipsum in real sections
- Oversell or exaggerate
- Leave placeholder text
- Use very long paragraphs
- Make it cluttered with too many sections
- Forget to update after new accomplishments

## SEO Optimization

Add relevant keywords:
- In your title tag
- In your bio/description
- In project names and descriptions
- In headings

This helps with search engine visibility and social sharing.

## Next Steps

1. Gather all your information and project links
2. Edit `index.html` with your content
3. Customize `styles.css` colors if desired
4. Test locally in your browser
5. Deploy to GitHub Pages
6. Share your portfolio!
