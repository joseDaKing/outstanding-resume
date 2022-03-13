import { stitches } from "stitches";

import { modalAnimation } from "./modalAnimation";



export const modal = stitches.css(modalAnimation, {
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