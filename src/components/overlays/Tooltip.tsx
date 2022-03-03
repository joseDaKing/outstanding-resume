import React from "react"

import * as PrimitiveTooltip from "@radix-ui/react-tooltip";

import { stitches } from "stitches";

import { CSSProps } from "types";

import { VariantProps } from "@stitches/react";

import fontMetrics from "@capsizecss/metrics/roboto";



export const StyledTrigger = stitches.styled(PrimitiveTooltip.Trigger, {});

export const StyledArrow = stitches.styled(PrimitiveTooltip.Arrow, {});

export const StyledContent = stitches.styled(PrimitiveTooltip.Content, {
    padding: "$3",
    borderRadius: "$xs",
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
            primary: {
                backgroundColor: "$primary10",
                [`& ${StyledArrow.selector}`]: {
                    fill: "$primary10",
                },
            },
            secondary: {
                backgroundColor: "$secondary10",
                [`& ${StyledArrow.selector}`]: {
                    fill: "$secondary10",
                },
            },
            neutral: {
                backgroundColor: "$neutral12",
                [`& ${StyledArrow.selector}`]: {
                    fill: "$neutral12",
                },
            },
            action: {
                backgroundColor: "$action10",
                [`& ${StyledArrow.selector}`]: {
                    fill: "$action10",
                },
            },
            success: {
                backgroundColor: "$success10",
                [`& ${StyledArrow.selector}`]: {
                    fill: "$success10",
                },
            },
            warning: {
                backgroundColor: "$warning10",
                [`& ${StyledArrow.selector}`]: {
                    fill: "$warning10",
                },
            },
            danger: {
                backgroundColor: "$danger10",
                [`& ${StyledArrow.selector}`]: {
                    fill: "$danger10",
                },
            },
        },
        inverted: {
            true: {
                boxShadow: "$3xl"
            }
        },
    },
    defaultVariants: {
        color: "primary",
        inverted: false,
    },
    compoundVariants: [
        {
            color: "primary",
            inverted: true,
            css: {
                backgroundColor: "$inverted",
                [`& ${StyledArrow}`]: {
                    fill: "$inverted",
                },
                color: "$primary11"
            }
        },
        {
            color: "secondary",
            inverted: true,
            css: {
                backgroundColor: "$inverted",
                [`& ${StyledArrow}`]: {
                    fill: "$inverted",
                },
                color: "$secondary11"
            }
        },
        {
            color: "neutral",
            inverted: true,
            css: {
                backgroundColor: "$inverted",
                [`& ${StyledArrow}`]: {
                    fill: "$inverted",
                },
                color: "$neutral12"
            }
        },
        {
            color: "success",
            inverted: true,
            css: {
                backgroundColor: "$inverted",
                [`& ${StyledArrow}`]: {
                    fill: "$inverted",
                },
                color: "$success11"
            }
        },
        {
            color: "warning",
            inverted: true,
            css: {
                backgroundColor: "$inverted",
                [`& ${StyledArrow}`]: {
                    fill: "$inverted",
                },
                color: "$warning11"
            }
        },
        {
            color: "danger",
            inverted: true,
            css: {
                backgroundColor: "$inverted",
                [`& ${StyledArrow}`]: {
                    fill: "$inverted",
                },
                color: "$danger11"
            }
        }
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