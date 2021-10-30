import { styled, css } from "../stitches";

import { textAlignMixin } from "../components/mixins";

export const baseTypeography = css(textAlignMixin, {
    fontFamily: "$sans",
    variants: {
        gutter: {
            true: {
                marginBottom: "$4"
            }
        }
    },
    defaultVariants: {
        gutter: false
    }
})

export const Title = styled("h1", baseTypeography, {
    fontSize: "$xl",
    letterSpacing: "$wide",
    fontWeight: "$bold",
    _textColor: "$blue-gray-800"
});

export const Text = styled("p", baseTypeography, {
    _textColor: "$blue-gray-400",
    fontSize: "$sm"
});