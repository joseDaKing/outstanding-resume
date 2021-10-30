import { styled } from "../../stitches";

import { inlineBlockMixin, textAlignMixin } from "../mixins";

export const Button = styled("button", textAlignMixin, inlineBlockMixin, {
    fontWeight: "$medium",
    borderRadius: "$md",
    fontFamily: "$mono",
    width: "$full",
    _textColor: "white",
    _backgroundColor: "$light-blue-400",
    "&:hover ": {
        _backgroundColor: "$light-blue-500"
    },
    "&:active": {
        _backgroundColor: "$light-blue-600",
    },
    variants: {
        inline: {
            true: {
                width: "auto"
            }
        },
        size: {
            lg: {
                _paddingX: "$5",
                _paddingY: "$2_5",
            },
            md: {
                _paddingX: "$4",
                _paddingY: "$2",
            },
            sm: {
                _paddingX: "$2_5",
                _paddingY: "$1_5",
            }
        },
        variant: {
            fill: {},
            text: {
                _backgroundOpacity: 0,
                _textColor: "$light-blue-400",
                "&:hover ": {
                    _textColor: "$light-blue-500",
                    _backgroundOpacity: "$10",
                }
            }
        }
    },
    defaultVariants: {
        size: "md",
        variant: "fill"
    }
});