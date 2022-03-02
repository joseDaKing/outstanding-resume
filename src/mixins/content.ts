import { stitches } from "stitches";



export const content = stitches.css({
    variants: {
        content: {
            true: {
                width: "fit-content"
            },
            false: {
                width: "$full"
            }
        }
    },
    defaultVariants: {
        content: false
    }
});