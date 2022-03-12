import { stitches } from "stitches";

import { fadeAnimation } from "./fadeAnimation";



export const modal = stitches.css(fadeAnimation, {
    borderRadius: "$sm",
    backgroundColor: "$inverted",
    width: "$md",
    height: "auto",
    top: "50%",
    left: "50%",
    transformTranslateX: "-50%",
    transformTranslateY: "-50%",
    position: "fixed",
    boxShadow: "$2xl"
});