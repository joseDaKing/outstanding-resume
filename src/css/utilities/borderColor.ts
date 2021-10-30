import { getColorValue, getValue } from "../helpers";

import { $opacityValues } from "../theme";

import type { AllColors, AllOpacities } from "../types";

const $$borderLeftOpacity = "$$borderLeftOpacity";

const $$borderRightOpacity = "$$borderRightOpacity";

const $$borderTopOpacity = "$$borderTopOpacity";

const $$borderBottomOpacity = "$$borderBottomOpacity";

export const _borderLeftColor = (color: AllColors) => ({
    [$$borderLeftOpacity]: "1",
    borderLeftColor: getColorValue(color as string, $$borderLeftOpacity)
});

export const _borderLeftOpacity = (value: AllOpacities) => ({
    [$$borderLeftOpacity]: getValue(value, $opacityValues)
});

export const _borderRightColor = (color: AllColors) => ({
    [$$borderRightOpacity]: "1",
    borderRightColor: getColorValue(color as string, $$borderRightOpacity)
});

export const _borderRightOpacity = (value: AllOpacities) => ({
    [$$borderRightOpacity]: getValue(value, $opacityValues)
});

export const _borderTopColor = (color: AllColors) => ({
    [$$borderTopOpacity]: "1",
    borderTopColor: getColorValue(color as string, $$borderTopOpacity)
});

export const _borderTopOpacity = (value: AllOpacities) => ({
    [$$borderTopOpacity]: getValue(value, $opacityValues)
});

export const _borderBottomColor = (color: AllColors) => ({
    [$$borderBottomOpacity]: "1",
    borderBottomColor: getColorValue(color as string, $$borderBottomOpacity)
});

export const _borderBottomOpacity = (value: AllOpacities) => ({
    [$$borderBottomOpacity]: getValue(value, $opacityValues)
});

export const _borderXColor = (color: AllColors) => ({
    ..._borderLeftColor(color),
    ..._borderRightColor(color)
});

export const _borderXOpacity = (value: AllOpacities) => ({
    ..._borderLeftOpacity(value),
    ..._borderRightOpacity(value)
});

export const _borderYColor = (color: AllColors) => ({
    ..._borderTopColor(color),
    ..._borderBottomColor(color)
});

export const _borderYOpacity = (value: AllOpacities) => ({
    ..._borderTopOpacity(value),
    ..._borderBottomOpacity(value)
});

export const borderColor = (color: AllColors) => ({
    ..._borderXColor(color),
    ..._borderYColor(color)
});

export const _borderOpacity = (value: AllOpacities) => ({
    ..._borderXOpacity(value),
    ..._borderYOpacity(value)
});