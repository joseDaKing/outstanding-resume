import { stitches } from "stitches";

import fontMetrics from "@capsizecss/metrics/roboto";

import { colorStyles } from "helpers";

import { textSelection } from "mixins";



export const Label = stitches.styled("label", textSelection, {
    fontFamily: "$primary",
    fontWeight: 400,
    capSize: {
        fontSize: 14,
        fontMetrics
    },
    stateDisabled: {
        color: "$washed8",
        userSelect: "none"
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
            color: colorName === "neutral" ? getColor("10") : getColor("9")
        })
    })
});