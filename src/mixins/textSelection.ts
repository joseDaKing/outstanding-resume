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
        },
        variants: {
            inverted: {
                selectionBackgroundColor: "black !important"
            },
            filled: {}
        }
    },
    defaultVariants: {
        color: "primary",
        variants: "filled"
    },
    compoundVariants: colorStyles({
        variant: "filled",
        styles: getColor => ({
            selectionBackgroundColor: getColor("5", true)
        })
    })
});