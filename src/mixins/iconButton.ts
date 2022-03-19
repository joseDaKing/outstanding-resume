import { stitches } from "stitches";

import { buttonContainer } from "./button";



export const iconButtonContainer = stitches.css(buttonContainer, {
    display: "block",
    "&::before,&::after": {
        display: "none !important",
    },
    variants: {
        size: {
            sm: {
                padding: "$1_5",
            },
            md: {
                padding: "calc($2 + 0.25px)"
            },
            lg: {
                padding: "$2_5",
            },
        }
    },
    defaultVariants: {
        size: "md",
    },
});

export const iconButtonIconContainer = stitches.css({
    display: "block",
    width: "fit-content",
    margin: "auto"
});