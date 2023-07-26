import { Howl } from "howler";
import { defaultHtml, setup } from "./internal.js";
import defaultCss from "./internal.css";

export default function HowlerPlaylistPlayer(
    id,
    songs= [],
    playerHtml=defaultHtml,
    playerCss=defaultCss,
    songNameRegex = undefined) {
    try {
        document.getElementById(id).outerHTML = "<style>" + playerCss +  "</style>" + playerHtml;

        setup(songs);
    }
    catch (error) {
        console.error(error);
    }
}
