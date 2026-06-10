# Personal Dashboard

A beautiful, single-file HTML dashboard designed as a browser start page. Features a clean, modern interface with clock, weather, music player, and customizable themes.

## Features

- **Clock & Greeting** — Large, elegant time display with date and dynamic greeting
- **Multi-Engine Search** — Switch between Google, Bing, DuckDuckGo, and more
- **Weather Widget** — Current conditions and 3-day forecast (via wttr.in)
- **Daily Quotes** — Inspirational quotes from hitokoto.cn with one-click refresh
- **Quick Links** — Customizable shortcut grid with drag-and-drop editing
- **Music Player** — Built-in player with support for online streams and local files
- **Todo List** — Persistent task management with local storage
- **Theme System** — Multiple themes including dark, light, and color variants
- **System Monitor** — Real-time CPU, memory, and disk usage display
- **GitHub Heatmap** — Visual contribution graph
- **Countdown Timer** — Track important dates and events
- **Command Palette** — Quick access to all features via `Cmd/Ctrl + K`
- **Keyboard Shortcuts** — Efficient navigation without a mouse
- **GSAP Animations** — Smooth entrance animations and transitions
- **Responsive Design** — Works on desktop and mobile

## Quick Start

1. Download `dashboard.html` and `music-data.js`
2. Place both files in the same directory
3. Open `dashboard.html` in your browser
4. (Optional) Set as your browser's start page

## Music Player

The dashboard includes a built-in music player. To add your own music:

1. Edit `music-data.js`
2. Add entries following this format:
   ```javascript
   {
     name: 'Song Name',
     artist: 'Artist Name',
     url: 'https://example.com/song.mp3',
     type: 'file'  // or 'stream' for radio
   }
   ```
3. Supports MP3, FLAC, OGG, and other browser-compatible formats
4. Online radio streams (like SomaFM) are included by default

## Theme System

Switch themes using the theme button or command palette. Available themes:

- **Default Dark** — Deep black with subtle blue accents
- **Midnight** — Dark blue-tinted theme
- **Forest** — Nature-inspired green theme
- **Sunset** — Warm orange and purple tones
- **Light** — Clean, bright theme for daytime use

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Cmd/Ctrl + K` | Open command palette |
| `Cmd/Ctrl + /` | Show keyboard shortcuts |
| `Escape` | Close modals/panels |
| `Space` | Play/pause music (when music player focused) |

## Credits

- **GSAP** — Animation library (https://greensock.com/gsap/)
- **wttr.in** — Weather data API (https://wttr.in)
- **hitokoto.cn** — Quote API (https://hitokoto.cn)
- **SomaFM** — Internet radio streams (https://somafm.com)
- **Radio Paradise** — Music streams (https://radioparadise.com)

## Customization

The dashboard uses CSS custom properties (variables) for easy theming. Edit the `:root` section in the HTML file to customize colors, fonts, and spacing.

## License

MIT License - Feel free to modify and distribute.
