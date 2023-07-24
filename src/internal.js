const className = "howler-playlist-player";
export const html = `
<section class="${className}">
    <button class="prev"></button>
    <button class="play"></button>
    <button class="nowPlaying">
        <span>Now playing:</span>
        <span class="songNameContainer">
            <span class="songName"></span>
        </span>
    </button>

    <div class="range">
        <input class="volume" type="range" value="10"/>
    </div>
    <button class="next"></button>

</section>
`;

function getElement(selector) {
    console.log(document)
    return document.querySelector(`.${className} ${selector}`);
}


let play, volume, nowPlaying, songName, prev, next;

let songIndex;
let sound;
let songs;

// Playlist functionality based on https://github.com/goldfire/howler.js/issues/191
function playSong() {
    if (songIndex >= songs.length) {
        songIndex = 0;
    } else if (songIndex < 0) {
        songIndex = songs.length - 1;
    }

    let file = songs[songIndex];
    let artist = file.substring(file.indexOf("/") + 1, file.indexOf("-") - 1)
    let track = file.substring(file.indexOf("-") + 1, file.lastIndexOf("."))

    songName.innerText = (`${track} by ${artist}`);
    nowPlaying.title = file;

    return new window.Howl({
        src: file,
        volume: volume.value / 100,
        onplay: () => {
            play.innerText = "pause";
        },
        onpause: () => {
            play.innerText = "play";
        },
        onend: nextSong
    });
}

function nextSong() {
    songIndex++;
    sound.unload();
    sound = playSong();
    sound.play();
}

function prevSong() {
    songIndex--;
    sound.unload();
    sound = playSong();
    sound.play();
}


export function setup(songsArg) {
    songs = songsArg;

    play = getElement(".play");
    volume = getElement(".volume");
    nowPlaying = getElement(".nowPlaying");
    songName = getElement(".songName");
    prev = getElement(".prev");
    next = getElement(".next");

    getElement(".volume").addEventListener("change", (event) => {
        sound.volume(event.target.value/100);
    });

    prev.addEventListener("click", prevSong);
    next.addEventListener("click", nextSong);

    
    play.addEventListener("click", function() {
        if(sound.playing()) {
            sound.pause();
        } else {
            sound.play();
        }
    });

    songIndex = random(0, songs.length);
    sound = playSong();
    
}


