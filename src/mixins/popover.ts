import { stitches } from "stitches";



export const popoverContent = stitches.css({
    borderRadius: "$sm",
    backgroundColor: "$inverted",
    filter: "drop-shadow(0 4px 6px rgb(0 0 0 / 0.15)) drop-shadow(0px -2px 4px rgb(0 0 0 / 0.15))",
    paddingX: "$2",
    paddingY: "$2_5",
});

export const popoverArrow = stitches.css({
    fill: "$inverted"
});