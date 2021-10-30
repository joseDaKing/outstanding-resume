import { css } from "../../stitches";

export const createInlineMixin = (type: string) => css({
    display: type,
    variants: {
        inline: {
            true: {
                display: `inline-${type}`
            }
        }
    }
});

export const inlineBlockMixin = createInlineMixin("block");

export const inlineFlexMixin = createInlineMixin("flex");