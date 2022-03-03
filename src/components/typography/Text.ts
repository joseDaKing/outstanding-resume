import { stitches } from "stitches";

import fontMetrics from "@capsizecss/metrics/roboto";

import { textSelection, textAlign } from "mixins";



export const Text = stitches.styled("p", textSelection, textAlign, {
    fontFamily: "$primary",
    fontWeight: 300,
    capSize: {
        fontSize: 16,
        fontMetrics,
        lineGap: 12
    },
    color: "$neutral11"
});

Text.displayName = "Text";