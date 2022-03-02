
import { stitches } from "stitches";

import { Box } from "./Box";



export const Stack = stitches.styled(Box, {
    display: "flex",
    "& > *": {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto"
    },
    variants: {
        axis: {
            x: {
                flexDirection: "row"
            },
            y: {
                flexDirection: "column"
            }
        },
        alignMain: {
            start: {
                justifyContent: "flex-start"
            },
            center: {
                justifyContent: "center"
            },
            end: {
                justifyContent: "end"
            },
        },
        alignCross: {
            start: {
                alignItems: "flex-start"
            },
            center: {
                alignItems: "center"
            },
            end: {
                alignItems: "flex-end"
            },
        }
    },
    defaultVariants: {
        axis: "y",
        alignMain: "start",
        alignCross: "start"
    }
});

Stack.displayName = "Stack";