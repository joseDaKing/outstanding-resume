import fontMetrics from "@capsizecss/metrics/roboto";

import { colorStyles } from "helpers";

import { stitches } from "stitches";

import { dropdownSubMenuAnimation } from "./dropdownSubMenuAnimation";

import { popoverContent } from "./popover";

import { popoverAnimation } from "./popoverAnimation";



export const dropdownIcon = stitches.css({
    display: "block",
    marginLeft: "auto"
});

export const dropdownDescription = stitches.css({
    marginLeft: "auto",
    color: "$neutral11"
});

export const dropdownItem = stitches.css({
    paddingX: "$5",
    paddingY: "$2",
    borderRadius: "$sm",
    fontFamily: "$primary",
    capSize: {
        fontSize: 15,
        fontMetrics,
    },
    cursor: "pointer",
    stateDisabled: {
        cursor: "default",
        color: "$washed8 !important",
        [`& ${dropdownIcon.selector}, & ${dropdownDescription.selector}`]: {
            color: "$washed8 !important",
        }
    }
});

export const dropdownItemText = stitches.css({
    display: "flex",
    alignItems: "center",
});

export const dropdownSeperator = stitches.css({
    height: 1,
    margin: 5
});

const baseDropdownContent = stitches.css(popoverContent, {
    minWidth: "$64",
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
                        [`& ${dropdownDescription.selector}`]: {
                            color: "$inverted"
                        },
                    },
                    color: colorName === "neutral" ? getColor("12") : getColor("11"),
                },
            }
        })
    })
});

export const dropdownContent = stitches.css(baseDropdownContent, popoverAnimation);

export const dropdownSubContent = stitches.css(baseDropdownContent, dropdownSubMenuAnimation);