import { View } from "@react-pdf/renderer";

import React from "react";

import { theme } from "../theme";

interface ISpaceProps {
    axis: "x" | "y";
    size: keyof typeof theme.spacings;
    only?: "start" | "end";
}

export const Seperator: React.FC<ISpaceProps> = ({ axis, size, only }) => {

    const spacingValue = theme.spacings[size];

    let margin: "marginHorizontal" | "marginVertical" | `margin${"Top"|"Bottom"}` | `margin${"Left"|"Right"}` = "marginVertical";

    let dimension: "height" | "width" = "width";

    let padding: "paddingLeft" | "paddingTop" = "paddingTop";

    if (axis === "x") {

        margin = "marginHorizontal";

        dimension = "height";

        padding = "paddingLeft";
    }

    if (only === "start" && axis === "x") {
        
        margin = "marginLeft";
    }

    if (only === "end" && axis === "x") {

        margin = "marginRight";
    }

    if (only === "start" && axis === "y") {

        margin = "marginTop";
    }

    if (only === "end" && axis === "y") {

        margin = "marginBottom";
    }

    return (
        <View
        style={{
            backgroundColor: theme.colors.grey,
            [margin]: spacingValue,
            [dimension]: "100%",
            [padding]: 1
        }}/>
    );
}