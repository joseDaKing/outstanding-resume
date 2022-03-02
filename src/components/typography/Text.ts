import { stitches } from "stitches";

import fontMetrics from "@capsizecss/metrics/roboto";

import { text } from "mixins";



export const Text = stitches.styled("h2", text.textSelection, text.textAlign, {
    fontFamily: "$primary",
    fontWeight: 300,
    capSize: {
        fontSize: 16,
        fontMetrics
    },
    variants: {
        color: {
            primary: {
                color: "$primary11"
            },
            secondary: {
                color: "$secondary11"
            },
            neutral: {
                color: "$neutral11"
            },
            action: {
                color: "$action11"
            },
            success: {
                color: "$success11"
            },
            warning: {
                color: "$warning11"
            },
            danger: {
                color: "$danger11"
            }
        }
    },
    defaultVariants: {
        color: "primary"
    }
});

Text.displayName = "Text";