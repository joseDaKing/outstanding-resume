import { getColorValue, getValue } from "../helpers";

import { $opacityValues } from "../theme";

import type { AllColors, AllOpacities } from "../types";

const $$textOpacity = "$$textOpacity";

export const _textColor = (color: AllColors) => ({
    [$$textOpacity]: "1",
    color: getColorValue(color as string, $$textOpacity)
});

export const _textOpacity = (value: AllOpacities) => ({
    [$$textOpacity]: getValue(value, $opacityValues)
});