import { stitches } from "stitches";

import fontMetrics from "@capsizecss/metrics/roboto";

import { text } from "mixins";


export const Title = stitches.styled("h1", text.textSelection, text.textAlign, {
    fontFamily: "$primary",
    fontWeight: 600,
    capSize: {
        fontSize: 32,
        fontMetrics
    },
    variants: {
        color: {
            primary: {
                color: "$primary12"
            },
            secondary: {
                color: "$secondary12"
            },
            neutral: {
                color: "$neutral12"
            },
            action: {
                color: "$action12"
            },
            success: {
                color: "$success12"
            },
            warning: {
                color: "$warning12"
            },
            danger: {
                color: "$danger12"
            }
        }
    },
    defaultVariants: {
        color: "primary"
    }
});

Title.displayName = "Title";