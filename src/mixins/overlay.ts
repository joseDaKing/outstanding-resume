import { stitches } from "stitches";

import { blackA } from "@radix-ui/colors";

import { modalAnimation } from "./modalAnimation";



export const overlay = stitches.css(modalAnimation, {
    inset: 0,
    position: "fixed",
    backdropBlur: "$md",
    backgroundColor: blackA.blackA9,
});