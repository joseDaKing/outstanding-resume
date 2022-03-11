import { stitches } from "stitches";

import { fadeAnimation } from "./fadeAnimation";



export const modalContent = stitches.css(fadeAnimation, {
    padding: "$8",
    borderRadius: "$sm",
    backgroundColor: "$inverted",
    width: "$md",
    height: "auto",
    top: "50%",
    left: "50%",
    transformTranslateX: "-50%",
    transformTranslateY: "-50%",
    position: "fixed"
});