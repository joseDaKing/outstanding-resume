import { formLargeContainer, formLargeText, textSelection } from "mixins";

import { stitches } from "stitches";

import { colorStyles } from "helpers";



export const TextArea = stitches.styled("textarea", textSelection, formLargeText, formLargeContainer, {
    borderRadius: "$sm",
    minHeight: "$64",
    resize: "vertical",
    width: "100%",
    "&::before,&::after": {
        display: "none"
    },
    display: "block",
    outlineWidth: "$1",
    outlineOffset: "-$borderWidth$1",
    cursor: "text",
    stateDisabled: {
        cursor: "default",
        outlineColor: "$washed8",
        color: "$washed10",
    },
    variants: {
        color: {
            primary: {},
            secondary: {},
            neutral: {},
            action: {},
            success: {},
            warning: {},
            danger: {}
        }
    },
    defaultVariants: {
        color: "primary"
    },
    compoundVariants: colorStyles({
        styles: (getColor, colorName) => ({
            outlineStyle: "solid",
            outlineColor: colorName === "neutral" ? getColor("12") : getColor("11"),
            focusWithin: {
                outlineWidth: "$2",
                outlineColor: colorName === "neutral" ? getColor("11") : getColor("10"),
            },
            color: colorName === "neutral" ? getColor("12") : getColor("11"),
        })
    })
});