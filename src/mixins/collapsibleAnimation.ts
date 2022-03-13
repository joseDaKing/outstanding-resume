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
    stateToggled: {
        animation: `${openKeyframes} 300ms ease-out forwards`
    },
    stateUntoggled: {
        animation: `${closeKeyframes} 300ms ease-out forwards`
    }
});