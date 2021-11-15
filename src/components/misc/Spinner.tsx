import React from "react";

import { keyframes } from "../../stitches";

import { Box } from "../layout";

interface ISpinnerProps {
    size?: number;
    color?: string;
}

const spinnerAnimation = keyframes({
    "0%": {
        transform: "rotate(0deg)"
    },
    "100%": {
        transform: "rotate(365deg)"
    }
});

export const Spinner: React.FC<ISpinnerProps> = ({ size = 18, color = "white" }) => {

    return (
        <Box
        css={{
            width: size,
            height: size,
            borderStyle: "solid",
            borderWidth: 2,
            borderColor: color,
            borderTopColor: "transparent",
            borderRadius: "$full",
            animationName: `${spinnerAnimation}`,
            animationDuration: "500ms",
            animationTimingFunction: "linear",
            animationFillMode: "forwards",
            animationIterationCount: "infinite"
        }}/>
    );
}