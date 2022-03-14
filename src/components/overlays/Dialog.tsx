import * as PrimitiveDialog from "@radix-ui/react-dialog";

import { IconButton } from "components/form";

import { ElementRef, forwardRef } from "react";

import { stitches } from "stitches";

import { overlay, modal } from "mixins";

import { CSSProps } from "types";

import { ScrollArea, Box } from "components/layout";

import { Cross1Icon } from "@radix-ui/react-icons";



const StyledContent = stitches.styled(PrimitiveDialog.Content, modal);

StyledContent.displayName = "StyledDialogContent";

const StyledOverlay = stitches.styled(PrimitiveDialog.Overlay, overlay);

StyledOverlay.displayName = "StyledDialogOverlay";

export type DialogContentProps = Omit<PrimitiveDialog.DialogContentProps, "asChild"> & CSSProps;

export const DialogContent = forwardRef<ElementRef<typeof StyledContent>, DialogContentProps>((props, ref) => {
    return (
        <PrimitiveDialog.Portal>
            <StyledOverlay>
                <StyledContent
                {...props}
                ref={ref}>
                    <ScrollArea
                    css={{
                        height: "100%",
                        position: "relative",
                    }}>
                        <PrimitiveDialog.Close 
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
                        </PrimitiveDialog.Close>

                        <Box
                        css={{
                            paddingY: "$8",
                            paddingX: "$10",
                        }}>
                            
                            {props.children}
                        </Box>
                    </ScrollArea>
                </StyledContent>
            </StyledOverlay>
        </PrimitiveDialog.Portal>
    );
});

DialogContent.toString = () => StyledContent.selector;

DialogContent.displayName = "DialogContent"



export { 
    DialogTrigger,
    Dialog,
    DialogClose,
    DialogTitle,
    DialogDescription
}
from "@radix-ui/react-dialog";

export type { 
    DialogTriggerProps,
    DialogProps,
    DialogCloseProps,
    DialogTitleProps,
    DialogDescriptionProps 
} 
from "@radix-ui/react-dialog";