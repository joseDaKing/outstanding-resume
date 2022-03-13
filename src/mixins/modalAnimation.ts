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
    stateToggled: {
        animation: `${fadeInKeyframes} 300ms ease-out forwards`
    },
    stateUntoggled: {
        animation: `${fadeOutKeyframes} 300ms ease-out forwards`
    }
});