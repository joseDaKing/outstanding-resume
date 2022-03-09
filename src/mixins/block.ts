import { stitches } from "stitches";



export const block = stitches.css({
    variants: {
        block: {
            true: {
                width: "$full",
                flexShrink: 1
            },
            false: {
                flexBasis: "fit-content",
                width: "fit-content"
            }
        }
    },
    defaultVariants: {
        block: false
    }
});