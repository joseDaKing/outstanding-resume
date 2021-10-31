import { inlineBlockMixin } from "../../components/mixins";

import { styled } from "../../stitches";

export const IconContainer = styled("div", inlineBlockMixin, {
    display: "block",
    flexBasis: "0px !important",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 24,
    _paddingY: "$1",
    color: "$blue-gray-300",
    transitionDuration: 1000,
    transitionProperty: "all",
    transitionTimingFunction: "$inOut",
    variants: {
        hover: {
            true: {
                "&:hover": {
                    color: "$light-blue-400"
                }
            }
        },
        invisible: {
            true: {
                opacity: 0
            },
            false: {
                opacity: "1 !important"
            }
        }
    }
});