// ============================================================
// Music Data for Personal Dashboard
// ============================================================
//
// HOW TO ADD YOUR OWN MUSIC:
//
// Option 1: Use the "添加音乐" button in the dashboard playlist panel
//           (no editing needed, but only saves for current session)
//
// Option 2: Edit this file to add permanent local music entries:
//   { name: 'Song Name', artist: 'Artist', url: 'file:///path/to/song.mp3', type: 'file' }
//
//   macOS example:
//     { name: 'My Song', artist: 'Artist', url: 'file:///Users/you/Music/song.mp3', type: 'file' }
//   Windows example:
//     { name: 'My Song', artist: 'Artist', url: 'file:///C:/Users/you/Music/song.mp3', type: 'file' }
//   Linux example:
//     { name: 'My Song', artist: 'Artist', url: 'file:///home/you/Music/song.mp3', type: 'file' }
//
// ============================================================

window.LOCAL_TRACKS = [
  // Add your local music files here, for example:
  // { name: 'My Song', artist: 'Artist Name', url: 'file:///path/to/song.mp3', type: 'file' },
];

window.RADIO_STATIONS = [
  { name: 'SomaFM - Groove Salad', artist: 'Ambient/Downtempo', url: 'https://ice1.somafm.com/groovesalad-128-mp3', type: 'stream' },
  { name: 'SomaFM - Drone Zone', artist: 'Ambient', url: 'https://ice1.somafm.com/dronezone-128-mp3', type: 'stream' },
  { name: 'SomaFM - Lush', artist: 'Electronic', url: 'https://ice1.somafm.com/lush-128-mp3', type: 'stream' },
  { name: 'SomaFM - Secret Agent', artist: 'Lounge/Spy', url: 'https://ice1.somafm.com/secretagent-128-mp3', type: 'stream' },
  { name: 'SomaFM - Space Station', artist: 'Space/Ambient', url: 'https://ice1.somafm.com/spacestation-128-mp3', type: 'stream' },
  { name: 'SomaFM - Beat Blender', artist: 'Electronic/Dance', url: 'https://ice1.somafm.com/beatblender-128-mp3', type: 'stream' },
  { name: 'SomaFM - Indie Pop Rocks', artist: 'Indie Pop', url: 'https://ice1.somafm.com/indiepop-128-mp3', type: 'stream' },
  { name: 'SomaFM - The Trip', artist: 'Progressive House', url: 'https://ice1.somafm.com/thetrip-128-mp3', type: 'stream' },
  { name: 'SomaFM - Vaporwaves', artist: 'Vaporwave', url: 'https://ice1.somafm.com/vaporwaves-128-mp3', type: 'stream' },
  { name: 'Radio Paradise - Main', artist: 'Eclectic Rock', url: 'https://stream.radioparadise.com/mp3-192', type: 'stream' },
  { name: 'Radio Paradise - Mellow', artist: 'Mellow Mix', url: 'https://stream.radioparadise.com/mellow-192', type: 'stream' },
  { name: '1FM - LoFi Hip Hop', artist: 'Lo-Fi', url: 'https://streams.ilovemusic.de/iloveradio17.mp3', type: 'stream' },
  { name: 'NTS Radio', artist: 'Eclectic', url: 'https://stream-relay-geo.ntslive.net/stream', type: 'stream' },
];
