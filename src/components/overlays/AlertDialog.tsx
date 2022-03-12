import * as PrimitiveAlertDialog from "@radix-ui/react-alert-dialog";

import { Button, ButtonProps } from "components/form";

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



export const AlertDialogAction = forwardRef<ElementRef<typeof PrimitiveAlertDialog.Action>, ButtonProps>((props, ref) => {
    return (
        <PrimitiveAlertDialog.Action 
        asChild>
            <Button
            {...props}
            ref={ref}>
                {props.children}
            </Button>
        </PrimitiveAlertDialog.Action>
    );
});

AlertDialogAction.toString = Button.toString;

AlertDialogAction.displayName = "AlertDialogAction";



export const AlertDialogCancel = forwardRef<ElementRef<typeof PrimitiveAlertDialog.Cancel>, ButtonProps>((props, ref) => {
    return (
        <PrimitiveAlertDialog.Cancel 
        ref={ref}
        asChild>
            <Button
            {...props}>
                Cancel
            </Button>
        </PrimitiveAlertDialog.Cancel>
    );
});

AlertDialogCancel.toString = Button.toString;

AlertDialogCancel.displayName = "AlertDialogCancel";



export { 
    AlertDialogTrigger,
    AlertDialog,
    AlertDialogTitle,
    AlertDialogDescription
}
from "@radix-ui/react-alert-dialog";

export type { 
    AlertDialogTriggerProps,
    AlertDialogProps,
    AlertDialogTitleProps,
    AlertDialogDescriptionProps 
} 
from "@radix-ui/react-alert-dialog";