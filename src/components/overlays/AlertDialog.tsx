import * as PrimitiveAlertDialog from "@radix-ui/react-alert-dialog";

import { ElementRef, forwardRef } from "react";

import { stitches } from "stitches";

import { overlay, modal } from "mixins";

import { CSSProps } from "types";

import { ScrollArea, Box } from "components/layout";



const StyledContent = stitches.styled(PrimitiveAlertDialog.Content, modal);

StyledContent.displayName = "StyledAlertDialogContent";

const StyledOverlay = stitches.styled(PrimitiveAlertDialog.Overlay, overlay);

StyledOverlay.displayName = "StyledAlertDialogOverlay";

export type AlertDialogContentProps = Omit<PrimitiveAlertDialog.DialogContentProps, "asChild"> & CSSProps;

export const AlertDialogContent = forwardRef<ElementRef<typeof StyledContent>, AlertDialogContentProps>((props, ref) => {
    return (
        <PrimitiveAlertDialog.Portal>
            <StyledOverlay>
                <StyledContent
                {...props}
                ref={ref}>
                    <ScrollArea
                    css={{
                        height: "100%"
                    }}>
                        <Box
                        css={{
                            padding: "$8",
                        }}>
                            {props.children}
                        </Box>
                    </ScrollArea>
                </StyledContent>
            </StyledOverlay>
        </PrimitiveAlertDialog.Portal>
    );
});

AlertDialogContent.toString = () => StyledContent.selector;

AlertDialogContent.displayName = "AlertDialogContent"



export { 
    AlertDialogTrigger,
    AlertDialogCancel,
    AlertDialogAction,
    AlertDialog,
    AlertDialogTitle,
    AlertDialogDescription
}
from "@radix-ui/react-alert-dialog";

export type { 
    AlertDialogTriggerProps,
    AlertDialogCancelProps,
    AlertDialogActionProps,
    AlertDialogProps,
    AlertDialogTitleProps,
    AlertDialogDescriptionProps 
} 
from "@radix-ui/react-alert-dialog";