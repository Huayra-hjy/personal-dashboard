# Personal Dashboard

A beautiful single-file HTML start page with clock, search, weather, music player, and more. Linear-inspired dark theme with GSAP animations.

![Dashboard](https://img.shields.io/badge/HTML-Single%20File-blue) ![License](https://img.shields.io/badge/License-MIT-green) ![No Dependencies](https://img.shields.io/badge/Dependencies-Zero-brightgreen)

## Features

- **Clock** — Gradient text with character-by-character reveal animation
- **Multi-Engine Search** — Google, Bing, GitHub, Bilibili, Douyin, Zhihu
- **Weather** — Real-time weather with 3-day forecast (wttr.in API)
- **Daily Quote** — Random quotes from hitokoto.cn
- **Quick Links** — Editable bookmarks with localStorage persistence
- **Todo List** — Simple task management with localStorage
- **Music Player** — Local files + 20 online radio stations with visualizer
- **System Monitor** — CPU cores, JS heap memory, network type
- **GitHub Heatmap** — Contribution-style activity grid
- **Countdown** — Track important dates with days remaining
- **Command Palette** — `Cmd+K` / `Ctrl+K` for quick actions
- **Theme System** — 3 themes: Linear (dark), Neon (cyber), Pastel (light)
- **GSAP Animations** — Smooth entrance animations, hover effects, breathing pulses
- **PWA Support** — Install to desktop/home screen
- **Responsive** — Works on desktop, tablet, and mobile

## Quick Start

1. Download `dashboard.html` and `music-data.js` (same directory)
2. Open `dashboard.html` in your browser
3. Done!

No build tools, no npm, no frameworks. Just a single HTML file.

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Cmd+K` / `Ctrl+K` | Open command palette |
| `/` | Focus search |
| `Space` | Play/pause music |
| `←` `→` | Seek 5s backward/forward |
| `Cmd+1-6` | Quick navigation links |

## Adding Music

Edit `music-data.js` to add your own music:

```javascript
window.LOCAL_TRACKS = [
  { name: 'Song Name', artist: 'Artist', url: 'file:///path/to/song.mp3', type: 'file' },
];
```

Online radio stations are included by default (SomaFM, Radio Paradise, NTS, etc.).

## Themes

Click the theme buttons below the clock to switch:
- **Linear** — Dark theme with purple accents (default)
- **Neon** — Cyberpunk dark with cyan accents
- **Pastel** — Light warm theme with indigo accents

Theme preference is saved to localStorage.

## Customization

### Change Colors
Edit the CSS variables in `:root`:
```css
--primary: #5e6ad2;     /* Accent color */
--canvas: #010102;      /* Page background */
--surface-1: #0f1011;   /* Card background */
```

### Change Search Engines
Edit the `search-engines` div in HTML:
```html
<button class="se-btn" data-url="https://www.google.com/search?q=">Google</button>
```

### Change Default Links
Edit the `DEFAULT_LINKS` array in JavaScript:
```javascript
const DEFAULT_LINKS = [
  { name: 'GitHub', url: 'https://github.com', icon: 'https://github.com/favicon.ico' },
];
```

## Tech Stack

- Pure HTML/CSS/JavaScript (no frameworks)
- [GSAP 3.12](https://gsap.com/) for animations (CDN, with CSS fallback)
- [wttr.in](https://wttr.in) for weather data
- [hitokoto.cn](https://hitokoto.cn) for daily quotes
- [SomaFM](https://somafm.com) for radio stations
- Linear-inspired design system

## License

MIT

## Credits

- [GSAP](https://gsap.com/) — Animation library (now free for all use)
- [wttr.in](https://wttr.in) — Weather API
- [hitokoto.cn](https://hitokoto.cn) — Quote API
- [SomaFM](https://somafm.com) — Internet radio
- [Radio Paradise](https://radioparadise.com) — Internet radio
- Design inspired by [Linear](https://linear.app)
