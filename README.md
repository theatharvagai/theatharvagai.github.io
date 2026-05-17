# Atharva Gai — Portfolio Website

Personal portfolio site for **Atharva Gai**, M.Tech CSE student at VIT Vellore — Machine Learning 

**Live site:** [https://theatharvagai.github.io](https://theatharvagai.github.io)

## Overview

A single-page portfolio with a liquid-glass UI, animated video backgrounds, firefly effects, smooth scrolling, and sections for about, education, and projects. Hosted on GitHub Pages from this repository.

## Features

- **Dual theme** — Dark (aurora) and light (night sky) video backgrounds with toggle
- **Liquid glass UI** — Frosted glass cards, navbar, and specular highlights
- **Interactions** — Custom cursor, Lenis smooth scroll, multi-language preloader
- **Sections** — Hero, About, Education, Projects (with expandable list)
- **Footer** — Live UTC/IST clocks, GitHub, LinkedIn, and email links
- **Resume** — PDF available from the site (`assets/resume.pdf`)

## Tech Stack

| Layer | Technologies |
|-------|----------------|
| Markup & style | HTML5, CSS3 (custom properties, glassmorphism) |
| Scripting | Vanilla JavaScript |
| Scroll | [Lenis](https://github.com/darkroomengineering/lenis) (CDN) |
| Hosting | GitHub Pages |

## Project Structure

```
├── index.html          # Main page
├── css/
│   └── style.css       # Styles & theme variables
├── js/
│   ├── main.js         # Cursor, theme, fireflies, projects toggle
│   └── footer.js       # Footer clocks
├── assets/
│   ├── aurora-live-bg.mp4
│   ├── night-sky-live-bg.mp4
│   ├── profile.webp
│   └── resume.pdf
└── README.md
```

## Local Development

No build step required. Serve the folder with any static server:

```bash
# Python
python -m http.server 8000

# Node (npx)
npx serve .
```

Open [http://localhost:8000](http://localhost:8000) in your browser.

## Deployment

This repo is named `theatharvagai.github.io`, so GitHub Pages serves the `main` branch at:

**https://theatharvagai.github.io/**

To publish updates:

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

Changes usually go live within one to two minutes.

## Contact

- **GitHub:** [@theatharvagai](https://github.com/theatharvagai)
- **LinkedIn:** [atharvagai](https://linkedin.com/in/atharvagai)
- **Email:** theatharvagai@gmail.com

## License

Personal portfolio — all rights reserved unless otherwise noted.

---

Click here >> https://theatharvagai.github.io
