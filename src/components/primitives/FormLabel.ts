import { styled } from "../../stitches";

export const FormLabel = styled("label", {
    marginBottom: "$1",
    display: "inline-block",
    fontFamily: "$mono",
    _textColor: "$blue-gray-400",
    fontSize: "$sm",
    letterSpacing: "$tighter",
    userSelect: "none",
    variants: {
        disabled: {
            true: {
                _textColor: "$gray-400"
            }
        }
    },
    defaultVariants: {
        disabled: false
    }
});