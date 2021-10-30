import { getColorValue, getValue } from "../helpers";

import { $opacityValues } from "../theme";

import type { AllColors, AllOpacities } from "../types";

const $$backgroundOpacity = "$$backgroundOpacity";

export const _backgroundColor = (color: AllColors) => ({
    [$$backgroundOpacity]: "1",
    backgroundColor: getColorValue(color as string, $$backgroundOpacity)
});

export const _backgroundOpacity = (value: AllOpacities) => ({
    [$$backgroundOpacity]: getValue(value, $opacityValues)
});