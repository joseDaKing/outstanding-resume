import fontMetrics from "@capsizecss/metrics/roboto";

import { colorStyles } from "helpers";

import { stitches } from "stitches";

import { popoverContent } from "./popover";



export const dropdownIcon = stitches.css({
    display: "block",
    marginLeft: "auto"
});

export const dropdownSlot = stitches.css({
    marginLeft: "auto",
    color: "$neutral11"
});

export const dropdownItem = stitches.css({
    paddingX: "$5",
    paddingY: "$2",
    borderRadius: "$sm",
    fontFamily: "$primary",
    cursor: "pointer",
    capSize: {
        fontSize: 15,
        fontMetrics,
    },
    stateDisabled: {
        cursor: "default",
        color: "$washed8 !important",
        [`& ${dropdownIcon.selector}, & ${dropdownSlot.selector}`]: {
            color: "$washed8 !important",
        }
    }
});

export const dropdownItemText = stitches.css({
    gap: "$8",
    display: "flex",
    alignItems: "center",
});

export const dropdownSeperator = stitches.css({
    height: 1,
    margin: 5
});

export const dropdownContent = stitches.css(popoverContent, {
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
            [`& ${dropdownSeperator.selector}`]: {
                backgroundColor: getColor("6")
            },
            [`& ${dropdownItem.selector}`]: {
                stateUndisabled: {
                    focus: {
                        outline: "none",
                        color: "$inverted",
                        backgroundColor: colorName === "neutral" ? getColor("12") : getColor("10"),
                        [`& ${dropdownSlot.selector}`]: {
                            color: "$inverted"
                        },
                    },
                    color: colorName === "neutral" ? getColor("12") : getColor("11"),
                },
            }
        })
    })
});