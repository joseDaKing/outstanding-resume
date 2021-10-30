import type { PropertyValue } from "@stitches/react";

import { getColorValue, getValue } from "../helpers";

import { $opacityValues } from "../theme";

import type { AllColors, AllOpacities } from "../types";

const $$divideXReverse = "$$divideXReverse";

const $$divideOpacity = "$$divideOpacity";

export const _divideXWidth = (value: PropertyValue<"borderWidth">) => ({
    "& > * + *": {
        $$divideXReverse: 0,
        borderRightWidth: `calc(${value} * var(${$$divideXReverse}))`,
        borderLeftWidth: `calc(${value} * calc(1 - var(${$$divideXReverse})))`
    }
});

const $$divideYReverse = "$$divideYReverse";

export const _divideYWidth = (value: PropertyValue<"borderWidth">) => ({
    "& > * + *": {
        $$divideYReverse: 0,
        borderRightWidth: `calc(${value} * var(${$$divideYReverse}))`,
        borderLeftWidth: `calc(${value} * calc(1 - var(${$$divideYReverse})))`
    }
});

export const _divideStyle = (value: PropertyValue<"borderStyle">) => ({
    "& > * + *": {
        borderStyle: value
    }
});

export const _divideColor = (color: AllColors) => ({
    "& > * + *": {
        [$$divideOpacity]: "1",
        borderColor: getColorValue(color as string, $$divideOpacity)
    }
});

export const divideOpacity = (value: AllOpacities) => ({
    "& > * + *": {
        [$$divideOpacity]: getValue(value, $opacityValues),
    }
});