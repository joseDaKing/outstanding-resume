import type { CSS } from "../../stitches";

import { styled } from "../../stitches";

import { ArrayValues } from "../../types";

import { inlineFlexMixin } from "../mixins";

export const Stack = styled("div", inlineFlexMixin, {
    flexWrap: "nowrap",
    width: "100%",
    $$stackSpaceX: "",
    $$stackSpaceY: "",
    variants: {
        wrap: {
            true: {
                flexWrap: "wrap"
            },
        },
        align: {
            start: {
                justifyContent: "flex-start",
            },
            center: {
                justifyContent: "center"
            },
            end: {
                justifyContent: "flex-end"
            },
            stretch: {
                justifyContent: "stretch",
                "& > *": {
                    flexBasis: "100%",
                }
            }
        },
        axis: {
            x: {
                flexDirection: "row"
            },
            y: {
                flexDirection: "column"
            }
        },
        space: {
            xl: {},
            lg: {},
            md: {},
            sm: {},
            xs: {},
            none: {}
        },
    },
    compoundVariants: (() => {

        const axises = ["x", "y"] as const;

        const spaces = ["xl", "lg", "md", "sm", "xs", "none"] as const;

        type CompoundVariant = {
            axis: ArrayValues<typeof axises>;
            space: ArrayValues<typeof spaces>;
            css: CSS;
        }
        
        const values = {
            xl: `$spacingValues$12`,
            lg: `$spacingValues$10`,
            md: `$spacingValues$6`,
            sm: `$spacingValues$3_5`,
            xs: `$spacingValues$2`,
            none: "0px",
        };

        const compoundVariants: Array<CompoundVariant> = [];

        for (const axis of axises) {
            
            for (const space of spaces) {

                const property = `_space${axis.toUpperCase()}` as `_space${"X"|"Y"}`;

                compoundVariants.push({
                    axis,
                    space,
                    css: {
                        [property]: values[space],
                    }
                });
            }
        }

        return compoundVariants;
    })(),
    defaultVariants: {
        wrap: false,
        align: "stretch",
        axis: "x",
        space: "none"
    }
});