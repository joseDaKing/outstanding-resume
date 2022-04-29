import { stitches } from "stitches";

import fontMetrics from "@capsizecss/metrics/roboto";

import { textSelection, textAlign } from "mixins";

import { colorStyles } from "helpers";

import { VariantProps } from "@stitches/react";



export const Display = stitches.styled("h1", textSelection, textAlign, {
    fontFamily: "$primary",
    fontWeight: 600,
    capSize: {
        fontSize: 48,
        fontMetrics
    },
    variants: {
        color: {
            primary: {},
            secondary: {},
            neutral: {},
            action: {},
            success: {},
            warning: {},
            danger: {},
        }
    },
    defaultVariants: {
        color: "primary"
    },
    compoundVariants: colorStyles({
        styles: (getColor, colorName) => ({
            color: colorName === "neutral" ? getColor("11") : getColor("12")
        })
    })
});

export type DisplayProps = VariantProps<typeof Display>;

Display.displayName = "Display";