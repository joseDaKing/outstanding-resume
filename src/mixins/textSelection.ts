import { stitches } from "stitches";



export const textSelection = stitches.css({
    variants: {
        color: {
            primary: {
                selectionBackgroundColor: "$primaryA4"
            },
            secondary: {
                selectionBackgroundColor: "$secondaryA4"
            },
            neutral: {
                selectionBackgroundColor: "$neutralA4"
            },
            action: {
                selectionBackgroundColor: "$actionA4"
            },
            success: {
                selectionBackgroundColor: "$successA4"
            },
            warning: {
                selectionBackgroundColor: "$warningA4"
            },
            danger: {
                selectionBackgroundColor: "$dangerA4"
            }
        }
    },
    defaultVariants: {
        color: "primary",
    },
});