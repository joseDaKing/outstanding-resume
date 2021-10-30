import { css } from "../../stitches";

export const textAlignMixin = css({
    variants: {
        align: {
            start: {
                textAlign: "left"
            },
            center: {
                textAlign: "center"
            },
            end: {
                textAlign: "right"
            }
        }
    }
})