import { stitches } from "stitches";



export const round = stitches.css({
    variants: {
        round: {
            true: {
                borderRadius: "$round"
            },
            false: {
                borderRadius: "$sm"
            }
        }
    },
    defaultVariants: {
        round: false
    }
});