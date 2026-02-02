# Matheus Braz | Mixer

A modern, responsive portfolio website for Grammy award-winning sound engineer Matheus Braz. Built with a Figma/React-inspired design using Braz Sound brand colors.

**Live site:** [matheusbraz.com](https://matheusbraz.com)

## Features

- **Modern design**: Clean, professional layout with glass-style buttons, smooth transitions, and subtle shadows
- **Brand consistency**: Color palette matched to Braz Sound logo (deep teal `#1A4B4F`, lime green `#91ED33`)
- **Bilingual**: English / Portuguese toggle
- **Responsive**: Optimized for desktop, tablet, and mobile
- **Studio showcase**: Carousel with studio photos and lightbox for detailed viewing
- **Contact options**: Clickable email, prominent Instagram link, Formspree contact form with response expectations

## Sections

| Section | Description |
|--------|-------------|
| **Hero** | Introduction with blurred studio background, CTA buttons |
| **Work** | Featured portfolio items (filterable: Album, Single, Film, Ad Spot) |
| **Recent Credits** | Extended list of projects and collaborations |
| **About** | Bio and professional background |
| **Studio** | Carousel of studio pictures (click to enlarge) |
| **Contact** | Form, email link, Instagram, location, response expectations |

## Additional Pages

- **Discography** (`discography.html`) – Full discography grid with filters
- **Media** (`media.html`) – Interviews and features

## Tech Stack

- **HTML5** – Semantic markup
- **CSS3** – CSS variables, Flexbox, Grid, modern styling
- **JavaScript** – Navigation, carousel, lightbox, scroll effects, language toggle
- **Font Awesome** – Icons
- **Google Fonts** – Inter font family
- **Formspree** – Contact form backend

## File Structure

```
/
├── index.html          # Main page
├── discography.html    # Discography page
├── media.html          # Media / interviews page
├── styles.css          # Global styles (Braz Sound design system)
├── script.js           # Main JavaScript
├── language.js         # EN/PT translations
├── sitemap.xml         # SEO sitemap
├── assets/
│   ├── ALBUM ARTWORK/  # Portfolio artwork by artist
│   ├── Braz Sound Logo/
│   ├── HEADSHOTS/      # Profile images
│   ├── studio/         # Hero background
│   ├── STUDIO PICS/    # Carousel images
│   └── favicon/
└── README.md
```

## Design System (CSS Variables)

Colors are defined in `styles.css` and can be adjusted via `:root`:

- **Primary**: `#1A4B4F` (deep teal)
- **Accent**: `#91ED33` (lime green)
- **Backgrounds**: Teal family (`--color-bg`, `--color-bg-dark`, `--color-bg-panel`)
- **Text**: `--color-text`, `--color-text-light`, `--color-text-white`

## Setup & Development

1. Clone the repository
2. Open `index.html` in a browser, or use a local server (e.g. `npx serve .`)
3. Edit `index.html`, `styles.css`, or `script.js` as needed

## Deployment

The site is deployed via **GitHub Pages**. Push to the `main` branch to trigger deployment.

```bash
git add .
git commit -m "Your message"
git push
```

## Contact Form

- Powered by [Formspree](https://formspree.io)
- Includes client-side validation
- Response expectations shown below the form

## License

Created for Matheus Braz's personal portfolio. All rights reserved.
