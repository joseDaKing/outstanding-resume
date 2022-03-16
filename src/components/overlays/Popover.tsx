import * as PrimitivePopover from "@radix-ui/react-popover";

import { forwardRef, ElementRef } from "react";

import { CSSProps } from "types";

import { Box, ScrollArea } from "components/layout";

import { IconButton } from "components/form";

import { Cross1Icon } from "@radix-ui/react-icons";

import { stitches } from "stitches";

import { popoverAnimation, popoverArrow, popoverContent } from "mixins";



const StyledContent = stitches.styled(PrimitivePopover.Content, popoverAnimation, popoverContent, {
    padding: 0,
});

StyledContent.displayName = "StyledPopoverContent";

const StyledArrow = stitches.styled(PrimitivePopover.Arrow, popoverArrow);

StyledArrow.displayName = "StyledPopoverArrow";

export type PopoverContentProps = Omit<PrimitivePopover.PopperContentProps, "asChild"> & CSSProps;

export const PopoverContent = forwardRef<ElementRef<typeof PrimitivePopover.Content>, PopoverContentProps>((props, ref) => {

    return (
        <StyledContent 
        side="top"
        align="center"
        sideOffset={6}
        {...props}
        ref={ref}>
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