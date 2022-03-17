import { stitches } from "stitches";

import { block } from "./block";

import { 
    formLargeText, 
    formLargeContainer 
}
from "./formLarge";

import { round } from "./round";

import { textSelection } from "./textSelection";

import { colorStyles } from "helpers";



export const textFieldContainer = stitches.css(round, block, formLargeContainer, {
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
            focus: {
                outline: "solid",
                outlineWidth: "$2",
                outlineColor: colorName === "neutral" ? getColor("11") : getColor("10"),
            },
            color: colorName === "neutral" ? getColor("12") : getColor("11"),
        })
    })
});

export const textFieldTextContainer = stitches.css(formLargeText, {
    overflow: "hidden"
});

export const textFieldText = stitches.css(textSelection, {
    fontFamily: "inherit",
    fontSize: "inherit",
    fontWeight: "inherit",
    backgroundColor: "transparent",
    width: "100%", 
    flexShrink: 1,
    focusVisible: {
        outline: "none"
    },
    stateDisabled: {
        color: "$washed11",
        placeholderColor: "$washed8 !important"
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
            color: colorName === "neutral" ? getColor("12") : getColor("11"),
            placeholderColor: colorName === "neutral" ? getColor("9") : getColor("8")
        })
    })
});