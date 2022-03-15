import { stitches } from "stitches";



const openKeyframes = stitches.keyframes({
    from: { 
        height: 0 
    },
    to: { 
        height: "var(--radix-collapsible-content-height)"
    }
});

const closeKeyframes = stitches.keyframes({
    to: { 
        height: 0 
    },
    from: { 
        height: "var(--radix-collapsible-content-height)"
    }
});

export const collapsibleAnimation = stitches.css({
    overflow: "hidden",
    animationDuration: "300ms",
    animationTimingFunction: "ease-out",
    animationFillMode: "forwards",
    stateToggled: {
        animationName: openKeyframes.name
    },
    stateUntoggled: {
        animationName: closeKeyframes.name
    }
});