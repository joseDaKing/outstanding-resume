import React, { ElementRef } from "react"

import * as PrimitiveTooltip from "@radix-ui/react-tooltip";

import { stitches } from "stitches";

import { CSSProps } from "types";

import { VariantProps } from "@stitches/react";

import fontMetrics from "@capsizecss/metrics/roboto";

import { colorStyles } from "helpers";

import { forwardRef } from "react";



export { Tooltip, TooltipTrigger, } from "@radix-ui/react-tooltip";

export type { TooltipProps, TooltipTriggerProps, } from "@radix-ui/react-tooltip";



const StyledArrow = stitches.styled(PrimitiveTooltip.Arrow, {});

const StyledContent = stitches.styled(PrimitiveTooltip.Content, {
    padding: "$3",
    borderRadius: "$sm",
    color: "$inverted",
    fontFamily: "$primary",
    fontWeight: 200,
    capSize: {
        fontSize: 14,
        fontMetrics,
        lineHeight: 1 as any
    },
    variants: {
        color: {
            primary: {},
            secondary: {},
            neutral: {},
            action: {},
            success: {},
            warning: {},
            danger: {}
        },
        variant: {
            inverted: {
                boxShadow: "$3xl",
                backgroundColor: "$inverted",
                [`& ${StyledArrow}`]: {
                    fill: "$inverted",
                }
            },
            filled: {
                color: "$inverted"
            }
        }
    },
    defaultVariants: {
        color: "primary",
        variant: "filled"
    },
    compoundVariants: [
        ...colorStyles({
            variant: "filled",
            styles: (getColor, colorName) => ({
                backgroundColor: colorName === "neutral" ? getColor("12") : getColor("10"),
                [`& ${StyledArrow}`]: {
                    fill: colorName === "neutral" ? getColor("12") : getColor("10"),
                },
            })
        }),
        ...colorStyles({
            variant: "inverted",
            styles: (getColor, colorName) => ({
                color: colorName === "neutral" ? getColor("12") : getColor("10"),
            })
        })
    ]
});

export type TooltipContentProps = VariantProps<typeof StyledContent> & Omit<PrimitiveTooltip.PopperContentProps, "asChild"> & CSSProps & {
    children?: string | null;
};

export const TooltipContent = forwardRef<ElementRef<typeof PrimitiveTooltip.Content>, TooltipContentProps>(props => {

    
    return (
        <StyledContent 
        {...{
            side: "top",
            align: "center",
            sideOffset: 6,
            ...props,
        }}>
            {props.children}
            <StyledArrow/>
        </StyledContent>
    );
});

TooltipContent.displayName = "TooltipTriggerContent";

TooltipContent.toString = () => StyledContent.selector;