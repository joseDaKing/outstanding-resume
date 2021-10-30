import { styled } from "../../stitches";

export const Container = styled("div", {
    width: "auto",
    _paddingX: "$4",
    _paddingY: "$2",
    _marginX: "auto",
    variants: {
        maxWidth: {
            xl: {
                maxWidth: "$screen-xl"
            },
            lg: {
                maxWidth: "$screen-lg"
            },
            md: {
                maxWidth: "$screen-md"
            },
            sm: {
                maxWidth: "$screen-sm"
            },
            xs: {
                maxWidth: "$xl"
            }
        }
    },
    defaultVariants: {
        maxWidth: "xl"
    }
});