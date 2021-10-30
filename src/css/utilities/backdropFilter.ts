import type { Percentage, PX, Deg, Negative, AllOpacities } from "../types";

import type { ScaleValue } from "@stitches/react";

import {
    $backdropFilterBlurValues,
    $backdropFilterBrightnessValues,
    $backdropFilterContrastValues,
    $backdropFilterGrayscaleValues,
    $backdropFilterHueRotateValues,
    $backdropFilterInvertValues,
    $backdropFilterSaturateValues,
    $backdropFilterSepiaValues,
    $opacityValues
} 
from "../theme";

import { getValue, toPx } from "../helpers";

const $$blur = "$$backdropFilterBlur";

const $$brightness = "$$backdropFilterBrightness";

const $$contrast = "$$backdropFilterContrast";

const $$grayscale = "$$backdropFilterGrayscale";

const $$hueRotate = "$$backdropFilterHueRotate";

const $$invert = "$$backdropFilterInvert";

const $$saturate = "$$backdropFilterSaturate";

const $$sepia = "$$backdropFilterSepia";

const $$opacity = "$$backdropOpacity";

const defaultFilterVariables = {
    
    [$$blur]: "blur(0px)",
    
    [$$brightness]: "brightness(1)",
    
    [$$contrast]: "contrast(1)",
    
    [$$grayscale]: "grayscale(0)",
    
    [$$hueRotate]: "hue-rotate(0deg)",
    
    [$$invert]: "invert(0)",
    
    [$$saturate]: "saturate(1)",
    
    [$$sepia]: "sepia(0)",

    [$$opacity]: "opacity(1)"
}

export const _backdropFilter = (value: boolean) => {

    if (value) {

        let filter = `${$$blur} `;

        filter += `${$$brightness} `;

        filter += `${$$contrast} `;
        
        filter += `${$$grayscale} `;

        filter += `${$$hueRotate} `;

        filter += `${$$invert} `;

        filter += `${$$saturate} `;

        filter += `${$$sepia} `;

        return {
            ...defaultFilterVariables,
            filter,
        };
    }

    return {
        filter: "none"
    }
};

export const _backdropFilterBlur = (value: number | PX | ScaleValue<typeof $backdropFilterBlurValues>) => ({
    [$$blur]: getValue(`blur(${toPx(value)})`, $backdropFilterBlurValues)
});

export const _backdropFilterBrightness = (value: Percentage | ScaleValue<typeof $backdropFilterBrightnessValues>) => ({
    [$$brightness]: getValue(`brightness(${value})`, $backdropFilterBrightnessValues)
});

export const _backdropFilterContrast = (value: Percentage | ScaleValue<typeof $backdropFilterContrastValues>) => ({
    [$$contrast]: getValue(`contrast(${value})`, $backdropFilterContrastValues)
});

export const _backdropFilterGrayscale = (value: Percentage | ScaleValue<typeof $backdropFilterGrayscaleValues>) => ({
    [$$grayscale]: getValue(`grayscale(${value})`, $backdropFilterGrayscaleValues)
});

export const _backdropFilterHueRotate = (value: Negative<Deg> | ScaleValue<typeof $backdropFilterHueRotateValues>) => ({
    [$$hueRotate]: getValue(`hue-rotate(${value})`, $backdropFilterHueRotateValues)
});

export const _backdropFilterInvert = (value: Percentage | ScaleValue<typeof $backdropFilterInvertValues>) => ({
    [$$invert]: getValue(`invert(${value})`, $backdropFilterInvertValues)
});

export const _backdropFilterSaturate = (value: Percentage | ScaleValue<typeof $backdropFilterSaturateValues>) => ({
    [$$saturate]: getValue(`saturate(${value})`, $backdropFilterSaturateValues)
});

export const _backdropFilterSepia = (value: Percentage | ScaleValue<typeof $backdropFilterSepiaValues>) => ({
    [$$sepia]: getValue(`sepia(${value})`, $backdropFilterSepiaValues)
});

export const _backdropOpacity = (value: AllOpacities) => ({
    [$$opacity]: getValue(`opacit(${value})`, $opacityValues)
});