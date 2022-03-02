import { textSelection } from "mixins";

import { stitches } from "stitches";



export const Link = stitches.styled("a", textSelection, {
    textDecoration: "underline",
    textDecorationStyle: "solid",
    cursor: "pointer",
    paddingX: "$1",
    focus: {
        outlineColor: "transparent"
    },
    focusVisible: {
        outlineColor: "transparent"
    },
    variants: {
        color: {
            primary: {
                color: "$primary11",
                textDecorationColor: "$primaryA8",
                hover: {
                    backgroundColor: "$primaryA3"
                },
                focus: {
                    backgroundColor: "$primaryA3",
                    textDecorationColor: "$primaryA9",
                },
                focusVisible: {
                    backgroundColor: "$primaryA3"
                },
            },
            secondary: {
                color: "$secondary11",
                textDecorationColor: "$secondaryA8",
                hover: {
                    backgroundColor: "$secondaryA3"
                },
                focus: {
                    backgroundColor: "$secondaryA3",
                    textDecorationColor: "$secondaryA9",
                },
                focusVisible: {
                    backgroundColor: "$secondaryA3"
                },
            },
            neutral: {
                color: "$neutral11",
                textDecorationColor: "$neutralA8",
                hover: {
                    backgroundColor: "$neutralA3"
                },
                focus: {
                    backgroundColor: "$neutralA3",
                    textDecorationColor: "$neutralA9",
                },
                focusVisible: {
                    backgroundColor: "$neutralA3"
                },
            },
            action: {
                color: "$action11",
                textDecorationColor: "$actionA8",
                hover: {
                    backgroundColor: "$actionA3"
                },
                focus: {
                    backgroundColor: "$actionA3",
                    textDecorationColor: "$actionA9",
                },
                focusVisible: {
                    backgroundColor: "$actionA3"
                },
            },
            success: {
                color: "$success11",
                textDecorationColor: "$successA8",
                hover: {
                    backgroundColor: "$successA3"
                },
                focus: {
                    backgroundColor: "$successA3",
                    textDecorationColor: "$successA9",
                },
                focusVisible: {
                    backgroundColor: "$successA3"
                },
            },
            warning: {
                color: "$warning11",
                textDecorationColor: "$warningA8",
                hover: {
                    backgroundColor: "$warningA3"
                },
                focus: {
                    backgroundColor: "$warningA3",
                    textDecorationColor: "$warningA9",
                },
                focusVisible: {
                    backgroundColor: "$warningA3"
                },
            },
            danger: {
                color: "$danger11",
                textDecorationColor: "$dangerA8",
                hover: {
                    backgroundColor: "$dangerA3"
                },
                focus: {
                    backgroundColor: "$dangerA3",
                    textDecorationColor: "$dangerA9",
                },
                focusVisible: {
                    backgroundColor: "$dangerA3"
                },
            }
        }
    },
    defaultVariants: {
        color: "primary"
    }
});