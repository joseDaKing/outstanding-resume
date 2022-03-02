import { stitches } from "stitches";



export const textAlign = stitches.css({
    variants: {
        align: {
            start: {
                textAlign: "left",
                "&[dir='ltr']": {
                    textAlign: "left",
                },
                "&[dir='rtl']": {
                    textAlign: "right",
                }
            },
            center: {
                textAlign: "center"
            },
            end: {
                textAlign: "right",
                "&[dir='ltr']": {
                    textAlign: "right",
                },
                "&[dir='rtl']": {
                    textAlign: "left",
                }
            }
        }
    },
    defaultVariants: {
        align: "start"
    }
});