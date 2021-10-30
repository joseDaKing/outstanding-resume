import { styled } from "../../stitches";

import { inlineBlockMixin } from "../mixins";

export const Spacer = styled("div", inlineBlockMixin, {
    $$space: "",
    variants: {
        space: {
            xl: {
                $$space: "$spacingValues$12"
            },
            lg: {
                $$space: "$spacingValues$10"
            },
            md: {
                $$space: "$spacingValues$6"
            },
            sm: {
                $$space: "$spacingValues$3_5"
            },
            xs: {
                $$space: "$spacingValues$2"
            },
            none: {
                $$space: "0px"
            },
        },
        axis: {
            x: {
                marginRight: "$$space",
            },
            y: {
                marginBottom: "$$space"
            }
        }
    },
    defaultVariants: {
        axis: "y",
        space: "none"
    }
});