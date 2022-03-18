import * as PrimitiveToast from "@radix-ui/react-toast";

import { popoverContent } from "mixins";

import { stitches, ThemedCSS } from "stitches";

import { CSSProps } from "types";



const VIEWPORT_PADDING: ThemedCSS["padding"] = "$8"

const hide = stitches.keyframes({
    from: { 
        opacity: 1 
    },
    to: { 
        opacity: 0 
    },
});
  
const slideIn = stitches.keyframes({
    from: { 
        transform: `translateX(calc(100% + ${VIEWPORT_PADDING}))` 
    },
    to: { 
        transform: "translateX(0)" 
    },
});
  
const swipeOut = stitches.keyframes({
    from: { 
        transform: "translateX(var(--radix-toast-swipe-end-x))"
    },
    to: { 
        transform: `translateX(calc(100% + ${VIEWPORT_PADDING}))` 
    },
});

export const Toast = stitches.styled(PrimitiveToast.Root, popoverContent, {
    paddingY: "$4",
    paddingX: "$3",
    animationDuration: "100ms",
    animationTimingFunction: "ease-out",
    focus: {
        outlineStyle: "solid",
        outlineWidth: "$2",
        outlineColor: "$neutral12",
    },
    stateToggled: {
        animationName: slideIn.name
    },
    stateUntoggled: {
        animationName: hide.name
    },
    swipeMove: {
        transform: "translateX(var(--radix-toast-swipe-move-x))",
    },
    swipeCancel: {
        transform: "translateX(0)",
        transition: "transform 200ms ease-out",
    },
    swipeEnd: {
        animationName: swipeOut.name,
        animationFillMode: "forwards"
    }
});

Toast.displayName = "Toast";



const ToastViewport = stitches.styled(PrimitiveToast.Viewport, {
    position: "fixed",
    insetY: 0,
    right: 0,
    width: "$xs",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    padding: VIEWPORT_PADDING,
    margin: 0,
    listStyle: "none",
    gap: "$4",
    zIndex: "$50",
    outline: "none"
});

ToastViewport.displayName = "ToastViewport";

export {
    ToastProvider,
    ToastTitle,
    ToastDescription,
    ToastAction,
    ToastClose
} 
from "@radix-ui/react-toast";

export type {
    ToastProviderProps,
    ToastProps,
    ToastTitleProps,
    ToastDescriptionProps,
    ToastActionProps,
    ToastCloseProps
} 
from "@radix-ui/react-toast";