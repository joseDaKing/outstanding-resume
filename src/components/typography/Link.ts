import { textSelection } from "mixins";

import { stitches } from "stitches";



export const Link = stitches.styled("a", textSelection, {
    textDecoration: "underline",
    textDecorationStyle: "solid",
    cursor: "pointer",
    paddingX: "$1",
    variants: {
        color: {
            primary: {
                color: "$primary11",
                textDecorationColor: "$primaryA8",
                selectionBackgroundColor: "transparent",
                hover: {
                    backgroundColor: "$primaryA3"
                }
            },
            secondary: {
                color: "$secondary11",
                textDecorationColor: "$secondaryA8",
                hover: {
                    backgroundColor: "$secondaryA3"
                }
            },
            neutral: {
                color: "$neutral11",
                textDecorationColor: "$neutralA8",
                hover: {
                    backgroundColor: "$neutralA3"
                }
            },
            action: {
                color: "$action11",
                textDecorationColor: "$actionA8",
                hover: {
                    backgroundColor: "$actionA3"
                }
            },
            success: {
                color: "$success11",
                textDecorationColor: "$successA8",
                hover: {
                    backgroundColor: "$successA3"
                }
            },
            warning: {
                color: "$warning11",
                textDecorationColor: "$warningA8",
                hover: {
                    backgroundColor: "$warningA3"
                }
            },
            danger: {
                color: "$danger11",
                textDecorationColor: "$dangerA8",
                hover: {
                    backgroundColor: "$dangerA3"
                }
            }
        }
    },
    defaultVariants: {
        color: "primary"
    }
});