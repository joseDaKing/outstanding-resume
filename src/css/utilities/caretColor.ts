import { getColorValue, getValue } from "../helpers";

import { $opacityValues } from "../theme";

import type { AllColors, AllOpacities } from "../types";

const $$caretOpacity = "$$caretOpacity";

export const _caretColor = (color: AllColors) => ({
    [$$caretOpacity]: "1",
    caretColor: getColorValue(color as string, $$caretOpacity)
});

export const _caretOpacity = (value: AllOpacities) => ({
    [$$caretOpacity]: getValue(value, $opacityValues)
});