import { colorStyles } from "helpers";

import { stitches } from "stitches";



export const textSelection = stitches.css({
    variants: {
        color: {
            primary: {},
            secondary: {},
            neutral: {},
            action: {},
            success: {},
            warning: {},
            danger: {}
        }
    },
    defaultVariants: {
        color: "primary"
    },
    compoundVariants: colorStyles({
        styles: getColor => ({
            selectionBackgroundColor: getColor("5", true)
        })
    })
});