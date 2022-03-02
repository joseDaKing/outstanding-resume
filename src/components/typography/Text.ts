import { stitches } from "stitches";

import fontMetrics from "@capsizecss/metrics/roboto";

import { textSelection, textAlign } from "mixins";



export const Text = stitches.styled("h2", textSelection, textAlign, {
    fontFamily: "$primary",
    fontWeight: 300,
    capSize: {
        fontSize: 16,
        fontMetrics,
        lineGap: 12
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