import { stitches } from "stitches";



const slideInBottomKeyframes = stitches.keyframes({
    from: {
        transform: "translateY($translate$8)",
        opacity: 0
    },
    to: {
        transform: "translateY(0px)",
        opacity: 1
    }
});

const slideOutBottomKeyframes = stitches.keyframes({
    to: {
        transform: "translateY($translate$8)",
        opacity: 0
    },
    from: {
        transform: "translateY(0px)",
        opacity: 1
    }
});

const slideInTopKeyframes = stitches.keyframes({
    from: {
        transform: "translateY(-$translate$8)",
        opacity: 0
    },
    to: {
        transform: "translateY(0px)",
        opacity: 1
    }
});

const slideOutTopKeyframes = stitches.keyframes({
    to: {
        transform: "translateY(-$translate$8)",
        opacity: 0
    },
    from: {
        transform: "translateY(0px)",
        opacity: 1
    }
});

const slideInRightKeyframes = stitches.keyframes({
    from: {
        transform: "translateX($translate$8)",
        opacity: 0
    },
    to: {
        transform: "translateX(0px)",
        opacity: 1
    }
});

const slideOutRightKeyframes = stitches.keyframes({
    to: {
        transform: "translateX($translate$8)",
        opacity: 0
    },
    from: {
        transform: "translateX(0px)",
        opacity: 1
    }
});

const slideInLeftKeyframes = stitches.keyframes({
    from: {
        transform: "translateX(-$translate$8)",
        opacity: 0
    },
    to: {
        transform: "translateX(0px)",
        opacity: 1
    }
});

const slideOutLeftKeyframes = stitches.keyframes({
    to: {
        transform: "translateX(-$translate$8)",
        opacity: 0
    },
    from: {
        transform: "translateX(0px)",
        opacity: 1
    }
});

export const popoverAnimation = stitches.css({
    animationDuration: "300ms",
    animationTimingFunction: "ease-out",
    animationFillMode: "forwards",
    sideTop: {
        stateToggled: {
            animationName: slideInTopKeyframes.name
        },
        stateUntoggled: {
            animationName: slideOutTopKeyframes.name
        }
    },
    sideBottom: {
        stateToggled: {
            animationName: slideInBottomKeyframes.name
        },
        stateUntoggled: {
            animationName: slideOutBottomKeyframes.name
        }
    },
    sideLeft: {
        stateToggled: {
            animationName: slideInLeftKeyframes.name
        },
        stateUntoggled: {
            animationName: slideOutLeftKeyframes.name
        }
    },
    sideRight: {
        stateToggled: {
            animationName: slideInRightKeyframes.name
        },
        stateUntoggled: {
            animationName: slideOutRightKeyframes.name
        }
    },
});