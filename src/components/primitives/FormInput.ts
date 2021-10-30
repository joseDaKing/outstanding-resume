import { styled } from "../../stitches";

import { inlineBlockMixin } from "../../components/mixins";

export const FormInput = styled("input", inlineBlockMixin, {
    margin: 0,
    border: 0,
    backgroundColor: "$blue-gray-100",
    fontSize: "$base",
    letterSpacing: "$wide",
    fontFamily: "$mono",
    _placeholderColor: "$blue-gray-400",
    borderRadius: "$sm",
    _textColor: "$blue-gray-700",
    _caretColor: "$light-blue-400",
    borderBottomWidth: "$2",
    borderBottomStyle: "solid",
    _borderBottomColor: "$blue-gray-100",
    transitionDuration: "$100",
    transitionProperty: "$colors",
    transitionTimingFunction: "$inOut",
    "&:focus": {
        outline: "none",
        _borderBottomColor: "$light-blue-400",
    },
    "&:disabled": {
        _placeholderColor: "$gray-400",
        backgroundColor: "$gray-100",
        _textColor: "$gray-700",
        _borderBottomColor: "$gray-100",
    },
    variants: {
        block: {
            true: {
                width: "$full"
            }
        },
        size: {
            lg: {
                _paddingX: "$5",
                _paddingY: "$4",
            },
            md: {
                _paddingX: "$4",
                _paddingY: "$3",
            },
            sm: {
                _paddingX: "$3",
                _paddingY: "$2",
            }
        }
    },
    defaultVariants: {
        block: true,
        size: "md"
    }
});