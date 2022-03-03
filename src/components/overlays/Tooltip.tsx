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
                boxShadow: "$3xl"
            },
            filled: {}
        }
    },
    defaultVariants: {
        color: "primary",
        variant: "filled"
    },
    compoundVariants: [
        {
            color: "primary",
            variant: "filled",
            css: {
                backgroundColor: "$primary10",
                [`& ${StyledArrow.selector}`]: {
                    fill: "$primary10",
                },
            }
        },
        {
            color: "secondary",
            variant: "filled",
            css: {
                backgroundColor: "$secondary10",
                [`& ${StyledArrow.selector}`]: {
                    fill: "$secondary10",
                },
            }
        },
        {
            color: "neutral",
            variant: "filled",
            css: {
                backgroundColor: "$neutral12",
                [`& ${StyledArrow.selector}`]: {
                    fill: "$neutral12",
                },
            }
        },
        {
            color: "action",
            variant: "filled",
            css: {
                backgroundColor: "$action10",
                [`& ${StyledArrow.selector}`]: {
                    fill: "$action10",
                },
            }
        },
        {
            color: "success",
            variant: "filled",
            css: {
                backgroundColor: "$success10",
                [`& ${StyledArrow.selector}`]: {
                    fill: "$success10",
                },
            }
        },
        {
            color: "warning",
            variant: "filled",
            css: {
                backgroundColor: "$warning10",
                [`& ${StyledArrow.selector}`]: {
                    fill: "$warning10",
                },
            }
        },
        {
            color: "danger",
            variant: "filled",
            css: {
                backgroundColor: "$danger10",
                [`& ${StyledArrow.selector}`]: {
                    fill: "$danger10",
                },
            }
        },
        {
            color: "primary",
            variant: "inverted",
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
            variant: "inverted",
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
            variant: "inverted",
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
            variant: "inverted",
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
            variant: "inverted",
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
            variant: "inverted",
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