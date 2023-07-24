# Howler Playlist Player
A drag-and-drop, yet customisable, HTML music player!

## How-to
### Usage
To include this in your website, simply load the javascript file
- (TODO: document CDN)
- Or, download `howler-playlist-player.js` from the latest [Release](https://github.com/Denperidge/howler-playlist-player/releases), place it in your directory and include it through `<script src="howler-playlist-player.js"></script>`

Then simply run `howlerplaylistplayer("target-element-id", ["path/to/song.mp3", "path/to/song2.mp3"])`!


### Build locally
```bash
git clone https://github.com/Denperidge/howler-playlist-player.git
cd howler-playlist-player
npm install
npm run build  # Alternatively, use npm start to watch for automatic rebuild
```

### Publish a new version
- Run `npm version {major,minor,patch}`
- This will return the new version number
- Run `git push origin vX.X.X`
- That's it! GitHub Actions will take care of publishing it.

## Discussions
### Dev instability
Whether it be because of how I've set up the project or because of the tools I am/was using; occasionally, using `npm run dev`, would casue the builds to return invalid code or return "module is undefined". Just try saving again, and then it should work!
