import { keyframes } from "@stitches/react";

export const spinAnimation = keyframes({
    from: {
        transform: "rotate(0deg)"
    },
    to: {
        transform: "rotate(360deg)"
    }
});

export const pingAnimation = keyframes({
    "75%, 100%": {
        transform: "scale(2)",
        opacity: 0
    }
});

export const pulseAnimation = keyframes({
    "0%, 100%": {
        opacity: 1,
    },
    "50%": {
        opacity: 0.5
    }
});

export const bounceAnimation = keyframes({
    "0%, 100%": {
        transform: "translateY(-25%)",
        animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)"
    },
    "50%": {
        transform: "translateY(0)",
        animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)"
    }
});