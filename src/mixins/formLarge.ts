import fontMetrics from "@capsizecss/metrics/roboto";

import { stitches } from "stitches";



export const formLargeText = stitches.css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "inherit",
    fontFamily: "$primary",
    textTransform: "uppercase",
    "& svg": {
        display: "inline-block"
    }
});

export const formLargeContainer = stitches.css({
    fontFamily: "$primary",
    variants: {
        size: {
            sm: {
                capSize: {
                    fontSize: 14,
                    fontMetrics
                },
                paddingX: "$2_5",
                paddingY: "$2",
                [`& ${formLargeText.selector}`]: {
                    gap: "$2"
                },
                "& svg": {
                    size: 13,
                },
            },
            md: {
                capSize: {
                    fontSize: 15,
                    fontMetrics
                },
                paddingX: "$3",
                paddingY: "$2_5",
                [`& ${formLargeText.selector}`]: {
                    gap: "$2_5"
                },
                "& svg": {
                    size: 14,
                },
            },
            lg: {
                capSize: {
                    fontSize: 16,
                    fontMetrics
                },
                paddingX: "$3_5",
                paddingY: "$3",
                [`& ${formLargeText.selector}`]: {
                    gap: "$3"
                },
                "& svg": {
                    size: 15,
                },
            },
        }
    },
    defaultVariants: {
        size: "md"
    }
});