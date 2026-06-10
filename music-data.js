/**
 * Music Data Configuration
 * ========================
 * Add your music tracks and radio stations here.
 *
 * Each entry should follow this format:
 * {
 *   name: 'Track Name',       // Display name
 *   artist: 'Artist Name',    // Artist or station name
 *   url: 'https://...',       // URL to the audio file or stream
 *   type: 'file' or 'stream'  // 'file' for audio files, 'stream' for live radio
 * }
 *
 * You can use:
 * - Direct URLs to audio files (MP3, FLAC, OGG, etc.)
 * - Online radio stream URLs
 * - Free music from sources like freemusicarchive.org, pixabay.com/music
 */

window.LOCAL_TRACKS = [
  // === Radio Stations ===
  {
    name: 'SomaFM - Groove Salad',
    artist: 'SomaFM',
    url: 'https://ice1.somafm.com/groovesalad-128-mp3',
    type: 'stream'
  },
  {
    name: 'SomaFM - Drone Zone',
    artist: 'SomaFM',
    url: 'https://ice1.somafm.com/dronezone-128-mp3',
    type: 'stream'
  },
  {
    name: 'SomaFM - Lush',
    artist: 'SomaFM',
    url: 'https://ice1.somafm.com/lush-128-mp3',
    type: 'stream'
  },
  {
    name: 'SomaFM - Space Station',
    artist: 'SomaFM',
    url: 'https://ice1.somafm.com/spacestation-128-mp3',
    type: 'stream'
  },
  {
    name: 'Radio Paradise - Main Mix',
    artist: 'Radio Paradise',
    url: 'https://stream.radioparadise.com/mp3-192',
    type: 'stream'
  },
  {
    name: 'SomaFM - DEF CON',
    artist: 'SomaFM',
    url: 'https://ice1.somafm.com/defcon-128-mp3',
    type: 'stream'
  },

  // === Example Tracks ===
  // To add your own music, uncomment and edit the examples below:
  //
  // {
  //   name: 'My Favorite Song',
  //   artist: 'Artist Name',
  //   url: 'https://example.com/path/to/song.mp3',
  //   type: 'file'
  // },
  //
  // For local files (will only work when opened from the same machine):
  // {
  //   name: 'Local Song',
  //   artist: 'Local Artist',
  //   url: 'file:///path/to/your/music/song.mp3',
  //   type: 'file'
  // },
];
