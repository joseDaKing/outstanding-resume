import { stitches } from "stitches";

import fontMetrics from "@capsizecss/metrics/roboto";

import { colorStyles } from "helpers";

import { VariantProps } from "@stitches/react";



export const SubTitle = stitches.styled("h2", {
    fontFamily: "$primary",
    fontWeight: 600,
    capSize: {
        fontSize: 22,
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
            danger: {}
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

export type SubTitleProps = VariantProps<typeof SubTitle>;

SubTitle.displayName = "SubTitle";