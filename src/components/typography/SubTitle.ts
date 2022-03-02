import { stitches } from "stitches";

import fontMetrics from "@capsizecss/metrics/roboto";

import { textSelection, textAlign } from "mixins";



export const SubTitle = stitches.styled("h2", textSelection, textAlign, {
    fontFamily: "$primary",
    fontWeight: 600,
    capSize: {
        fontSize: 22,
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
                color: "$neutral12"
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
        color: "primary",
    }
});

SubTitle.displayName = "SubTitle";