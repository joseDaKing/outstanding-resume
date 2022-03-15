import { stitches } from "stitches";



const fadeInKeyframes = stitches.keyframes({
    from: { 
        opacity: 0 
    },
    to: { 
        opacity: 1
    }
});

const fadeOutKeyframes = stitches.keyframes({
    to: { 
        opacity: 0 
    },
    from: { 
        opacity: 1
    }
});

export const modalAnimation = stitches.css({
    animationDuration: "300ms",
    animationTimingFunction: "ease-out",
    animationFillMode: "forwards",
    stateToggled: {
        animationName: fadeInKeyframes.name
    },
    stateUntoggled: {
        animationName: fadeInKeyframes.name
    }
});