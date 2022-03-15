import * as PrimitiveTooltip from "@radix-ui/react-tooltip";

import { stitches } from "stitches";

import { CSSProps } from "types";

import { forwardRef, ElementRef } from "react";



export const StyledArrow = stitches.styled(PrimitiveTooltip.Arrow, {});

export const StyledContent = stitches.styled(PrimitiveTooltip.Content, {
    borderRadius: "$sm",
    backgroundColor: "$inverted",
    filterDropShadow: "0px 0px 4px rgba(0 0 0 / 0.275)",
    paddingX: "$2",
    paddingY: "$2_5",
    [`& ${StyledArrow}`]: {
        fill: "$inverted"
    }
});

export type TooltipContentProps = Omit<PrimitiveTooltip.PopperContentProps, "asChild"> & CSSProps;

export const TooltipContent = forwardRef<ElementRef<typeof PrimitiveTooltip.Content>, TooltipContentProps>((props, ref) => {
    
    return (
        <StyledContent 
        side="top"
        align="center"
        sideOffset={6}
        {...props}
        ref={ref}>
            {props.children}
            <StyledArrow/>
        </StyledContent>
    );
});

TooltipContent.displayName = "TooltipTriggerContent";

TooltipContent.toString = () => StyledContent.selector;



export { Tooltip, TooltipTrigger, } from "@radix-ui/react-tooltip";

export type { TooltipProps, TooltipTriggerProps, } from "@radix-ui/react-tooltip";