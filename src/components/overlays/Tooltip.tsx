import React from "react"

import * as PrimitiveTooltip from "@radix-ui/react-tooltip";

import { stitches } from "stitches";

import { CSSProps } from "types";

import { VariantProps } from "@stitches/react";

import fontMetrics from "@capsizecss/metrics/roboto";

import { colorStyles } from "helpers";



export const StyledTrigger = stitches.styled(PrimitiveTooltip.Trigger, {});

export const StyledArrow = stitches.styled(PrimitiveTooltip.Arrow, {});

export const StyledContent = stitches.styled(PrimitiveTooltip.Content, {
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

type TooltipContentProps = VariantProps<typeof StyledContent> & PrimitiveTooltip.PopperContentProps & CSSProps & {
    children?: string | null;
};

const TriggerContent: React.FC<TooltipContentProps> = props => {

    
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
}

TriggerContent.toString = () => StyledContent.selector;

type SubComponents = {
    Trigger: typeof StyledTrigger;
    Content: typeof TriggerContent;
}

export const Tooltip: React.FC<PrimitiveTooltip.TooltipProps> & SubComponents = props => {

    return (
        <PrimitiveTooltip.Root>
            {props.children}
        </PrimitiveTooltip.Root>
    );
}

Tooltip.Trigger = StyledTrigger;

Tooltip.Content = TriggerContent;