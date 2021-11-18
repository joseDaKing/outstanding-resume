import { View } from "@react-pdf/renderer";

import React from "react";

import { theme } from "../theme";

interface ISpaceProps {
    size: keyof typeof theme.spacings;
    axis: "x" | "y";
}

export const Spacing: React.FC<ISpaceProps> = ({ size, axis }) => {

    return (
        <View
        style={{
            [axis === "x" ? "marginLeft" : "marginTop"]: theme.spacings[size]
        }}/>
    );
}