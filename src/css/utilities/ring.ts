import type { PropertyValue } from "@stitches/react";

import { getColorValue, getValue } from "../helpers";

import { $opacityValues } from "../theme";

import type { AllColors, AllOpacities } from "../types";

const $$ringOpacity = "$$ringOpacity";

const $$ringInset = "$$ringInset";

export const _ringColor = (color: AllColors) => ({
    [$$ringInset]: "1",
    [$$ringOpacity]: "1",
    outlineColor: getColorValue(color as string, $$ringOpacity)
});

export const _ringOpacity = (value: AllOpacities) => ({
    [$$ringOpacity]: getValue(value, $opacityValues)
});

export const _ringWidth = (value: PropertyValue<"borderWidth">) => ({
    outlineWidth: value
});

export const _ringOffset = (value: PropertyValue<"borderWidth">) => ({
    outlineOffset: `calc(${value} * $$ringInset)`
});

export const _ringInset = (value: boolean) => ({
    [$$ringInset]: value ? "-1" : "1"
});