import { stitches } from "stitches";



export const textSelection = stitches.css({
    variants: {
        color: {
            primary: {
                selectionBackgroundColor: "$primaryA5"
            },
            secondary: {
                selectionBackgroundColor: "$secondaryA5"
            },
            neutral: {
                selectionBackgroundColor: "$neutralA5"
            },
            action: {
                selectionBackgroundColor: "$actionA5"
            },
            success: {
                selectionBackgroundColor: "$successA5"
            },
            warning: {
                selectionBackgroundColor: "$warningA5"
            },
            danger: {
                selectionBackgroundColor: "$dangerA5"
            }
        }
    },
    defaultVariants: {
        color: "primary"
    },
});