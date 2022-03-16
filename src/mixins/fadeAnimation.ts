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

export const fadeAnimation = stitches.css({
    animationDuration: "225ms",
    animationTimingFunction: "ease-out",
    animationFillMode: "forwards",
    stateToggled: {
        animationName: fadeInKeyframes.name
    },
    stateUntoggled: {
        animationName: fadeOutKeyframes.name
    }
});