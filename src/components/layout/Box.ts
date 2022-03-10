import { VariantProps } from "@stitches/react";

import { stitches } from "stitches";



export const Box = stitches.styled("div", {
    variants: {
        screen: {
            true: {
                height: "100vh",
                width: "100vw"
            }
        },
        screenX: {
            true: {
                width: "100vw"
            }
        },
        screenY: {
            true: {
                height: "100vh"
            }
        },
        full: {
            true: {
                height: "100%",
                width: "100%"
            }
        },
        fullX: {
            true: {
                width: "100%"
            }
        },
        fullY: {
            true: {
                height: "100%",
            }
        }
    }
});

export type BoxProps = VariantProps<typeof Box>;

Box.displayName = "Box";