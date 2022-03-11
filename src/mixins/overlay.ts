import { stitches } from "stitches";

import { blackA } from "@radix-ui/colors";

import { fadeAnimation } from "./fadeAnimation";



export const overlay = stitches.css(fadeAnimation, {
    inset: 0,
    position: "fixed",
    backdropBlur: "$md",
    backgroundColor: blackA.blackA9,
});