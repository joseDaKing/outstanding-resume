import { getColorValue, getValue } from "../helpers";

import { $opacityValues } from "../theme";

import type { AllColors, AllOpacities } from "../types";

const $$placeHolderOpacity = "$$placeHolderOpacity";

export const _placeholderColor = (color: AllColors) => ({
    "&::placeholder": {
        [$$placeHolderOpacity]: 1,
        color: getColorValue(color as string, $$placeHolderOpacity)
    }
});

export const _placeholderOpacity = (value: AllOpacities) => ({
    "&::placeholder": {
        [$$placeHolderOpacity]: getValue(value, $opacityValues)
    }
});