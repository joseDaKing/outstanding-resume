import type { AllColors, AllOpacities } from "../types";

import { getColorValue, getValue } from "../helpers";

import { $opacityValues } from "../theme";

const $$selectionTextOpacity = "$$selectionTextOpacity";

export const _selectionTextColor = (color: AllColors) => ({
    "&::selection": {
        [$$selectionTextOpacity]: "1",
        color: getColorValue(color as string, $$selectionTextOpacity)
    }
});

export const _selectionTextOpacity = (value: AllOpacities) => ({
    "&::selection": {
        [$$selectionTextOpacity]: getValue(value, $opacityValues)
    }
});

const $$selectionBackgroundOpacity = "$$selectionBackgroundOpacity"

export const _selectionBackgroundColor = (backgroundColor: AllColors) => ({
    "&::selection": {
        [$$selectionBackgroundOpacity]: "1",
        backgroundColor: getColorValue(backgroundColor as string, $$selectionBackgroundOpacity)
    }
});

export const _selectionBackgroundOpacity = (value: AllOpacities) => ({
    "&::selection": {
        [$$selectionBackgroundOpacity]: getValue(value, $opacityValues)
    }
});