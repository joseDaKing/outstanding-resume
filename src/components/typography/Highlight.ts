import { textSelection } from "mixins";

import { stitches } from "stitches";



export const Highlight = stitches.styled(textSelection, "span", {
    display: "inline-block",
    paddingX: "$1",
    variants: {
        color: {
            primary: {
                color: "$primary11",
                backgroundColor: "$primary3"
            },
            secondary: {
                color: "$secondary11",
                backgroundColor: "$secondary3"
            },
            neutral: {
                color: "$neutral11",
                backgroundColor: "$neutral3"
            },
            action: {
                color: "$action11",
                backgroundColor: "$action3"
            },
            success: {
                color: "$success11",
                backgroundColor: "$success3"
            },
            warning: {
                color: "$warning11",
                backgroundColor: "$warning3"
            },
            danger: {
                color: "$danger11",
                backgroundColor: "$danger3"
            }
        }
    },
    defaultVariants: {
        color: "primary"
    }
});