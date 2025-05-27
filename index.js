{
  "name": "discord-music-bot",
  "version": "4.0.1",
  "description": "Advanced Discord music bot with slash commands and DisTube integration",
  "main": "src/index.js",
  "scripts": {
    "start": "node src/index.js",
    "build": "npm install && npm audit fix",
    "dev": "nodemon src/index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "engines": {
    "node": "18.x",
    "npm": "9.x"
  },
  "dependencies": {
    "@discordjs/builders": "^1.8.2",
    "@discordjs/rest": "^1.7.0",
    "@discordjs/voice": "^0.17.0",
    "@distube/yt-dlp": "^2.0.1",
    "@distube/ytdl-core": "^4.16.9",
    "discord.js": "^14.15.3",
    "distube": "^5.0.1",
    "dotenv": "^16.4.5",
    "ffmpeg-static": "^5.2.0",
    "libsodium-wrappers": "^0.7.13",
    "prism-media": "^1.3.5",
    "express": "^4.18.2",
    "wokcommands": "^1.5.3",
    "play-dl": "^1.9.6"
  },
  "keywords": [
    "discord",
    "music-bot",
    "javascript",
    "nodejs",
    "distube",
    "slash-commands"
  ],
  "author": "Your Name <your.email@example.com>",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/yourusername/your-repo.git"
  },
  "bugs": {
    "url": "https://github.com/yourusername/your-repo/issues"
  },
  "homepage": "https://github.com/yourusername/your-repo#readme",
  "devDependencies": {
    "nodemon": "^3.0.2"
  }
}
