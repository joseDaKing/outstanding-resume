import * as PrimitiveTooltip from "@radix-ui/react-tooltip";

import { stitches } from "stitches";

import { CSSProps } from "types";

import { forwardRef, ElementRef } from "react";

import { popoverContent, popoverArrow } from "mixins";



const StyledContent = stitches.styled(PrimitiveTooltip.Content, popoverContent);

const StyledArrow = stitches.styled(PrimitiveTooltip.Arrow, popoverArrow);

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