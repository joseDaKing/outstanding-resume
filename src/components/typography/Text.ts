import { stitches } from "stitches";

import fontMetrics from "@capsizecss/metrics/roboto";

import { textSelection, textAlign } from "mixins";

import { VariantProps } from "@stitches/react";



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

export type TextProps = VariantProps<typeof Text>;

Text.displayName = "Text";