import { Howl } from "howler";
import { html, setup } from "./internal.js"

export default function HowlerPlaylistPlayer(id, songs=[], songNameRegex=undefined) {
    try {
        document.getElementById(id).outerHTML = html;
        setup(songs);
    }
    catch (error) {
        console.error(error);
    }
}
