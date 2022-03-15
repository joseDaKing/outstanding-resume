import * as PrimitivePopover from "@radix-ui/react-popover";

import { forwardRef, ElementRef } from "react";

import { CSSProps } from "types";

import { StyledArrow, StyledContent as StyledTooltipContent } from "components/overlays/Tooltip";

import { Box, ScrollArea } from "components/layout";

import { IconButton } from "components/form";

import { Cross1Icon } from "@radix-ui/react-icons";

import { stitches } from "stitches";

import { popoverAnimation } from "mixins";



const StyledContent = stitches.styled(StyledTooltipContent, popoverAnimation);

export type PopoverContentProps = Omit<PrimitivePopover.PopperContentProps, "asChild"> & CSSProps;

export const PopoverContent = forwardRef<ElementRef<typeof PrimitivePopover.Content>, PopoverContentProps>((props, ref) => {
    
    const { css = {} , ...htmlProps } = props;

    return (
        <StyledContent 
        side="top"
        align="center"
        sideOffset={6}
        {...htmlProps}
        as={PrimitivePopover.Content}
        ref={ref}
        css={{
            padding: 0,
            ...css,
        }}>
            <ScrollArea
            css={{
                height: "100%",
                position: "relative"
            }}>
                <PrimitivePopover.Close
                asChild>
                    <IconButton
                    Icon={Cross1Icon}
                    variant="text"
                    size="sm"
                    round
                    css={{
                        position: "absolute",
                        right: "$3",
                        top: "$3"
                    }}/>
                </PrimitivePopover.Close>
                
                <Box
                css={{
                    paddingY: "$8",
                    paddingX: "$10",
                }}>                
                    {props.children}
                </Box>
            </ScrollArea>

            <StyledArrow
            as={PrimitivePopover.Arrow}/>
        </StyledContent>
    );
});

PopoverContent.displayName = "PopoverContent";

PopoverContent.toString = () => StyledContent.selector;

export { 
    Popover, 
    PopoverAnchor, 
    PopoverClose, 
    PopoverTrigger, 
} 
from "@radix-ui/react-popover";

export type { 
    PopoverProps, 
    PopoverAnchorProps, 
    PopoverCloseProps, 
    PopoverTriggerProps, 
} 
from "@radix-ui/react-popover";