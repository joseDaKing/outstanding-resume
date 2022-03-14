import * as PrimitivePopover from "@radix-ui/react-popover";

import { forwardRef, ElementRef } from "react";

import { CSSProps } from "types";

import { StyledArrow, StyledContent } from "components/overlays/Tooltip";

import { ScrollArea, Box } from "components/layout";

import { IconButton } from "components/form";

import { Cross1Icon } from "@radix-ui/react-icons";



export type PopoverContentProps = Omit<PrimitivePopover.PopperContentProps, "asChild"> & CSSProps;

export const PopoverContent = forwardRef<ElementRef<typeof PrimitivePopover.Content>, PopoverContentProps>((props, ref) => {
    
    const { css = {} , ...htmlProps } = props;

    return (
        <StyledContent 
        {...htmlProps}
        as={PrimitivePopover.Content}
        side="top"
        align="center"
        sideOffset={6}
        ref={ref}
        css={{
            ...css,
            padding: 0
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
                    paddingX: "$10"
                }}>
                    {props.children}
                </Box>
            </ScrollArea>

            <StyledArrow
            as={PrimitivePopover.Arrow}/>
        </StyledContent>
    );
});

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