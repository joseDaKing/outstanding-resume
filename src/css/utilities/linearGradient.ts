import type { AllColors, AllOpacities, Placement } from "../types";

import { getColorValue, getValue } from "../helpers";

import { $opacityValues } from "../theme";

const $$direction = "$$direction";

const $$from = "$$from";

const $$fromOpacity = "$$from-alpha";

const $$to = "$$to";

const $$toOpacity = "$$to-alpha";

export const _linearGradient = (type: "text" | "background" | "none") => {

    const backgroundLinearGradient = {
        backgroundImage: `linear-gradient(to ${$$direction}, ${$$from}, ${$$to})`,
    };

    if (type === "background") {

        return backgroundLinearGradient
    }

    if (type === "text") {

        return {
            ...backgroundLinearGradient,
            "-webkit-background-clip": "text",
            "-webkit-text-fill-color": "transparent"
        }
    }

    return {
        backgroundImage: "none"
    }
}

export const _linearGradientDirection = (direction: Placement) => ({
    [$$direction]: direction.split("-").join(" ")
});

export const _linearGradientFrom = (value: AllColors) => ({
    [$$fromOpacity]: "1",
    [$$from]: getColorValue(value as string, $$fromOpacity)
});

export const _linearGradientFromOpacity = (value: AllOpacities) => ({
    [$$fromOpacity]: getValue(value, $opacityValues)
});

export const _linearGradientTo = (value: AllColors) => ({
    [$$toOpacity]: "1",
    [$$to]: getColorValue(value as string, $$toOpacity)
});

export const _linearGradientToOpacity = (value: AllOpacities) => ({
    [$$toOpacity]: getValue(value, $opacityValues)
});