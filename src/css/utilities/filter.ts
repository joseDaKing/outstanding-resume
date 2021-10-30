import type { Percentage, PX, Deg, Negative } from "../types";

import type { ScaleValue } from "@stitches/react";

import { getValue, toPx } from "../helpers";

import { $filterBlurValues, $filterBrightnessValues, $filterContrastValues, $filterDropShadowValues, $filterGrayscaleValues, $filterHueRotateValues, $filterInvertValues, $filterSaturateValues, $filterSepiaValues } from "../theme";

const $$blur = "$$filterBlur";

const $$brightness = "$$filterBrightness";

const $$contrast = "$$filterContrast";

const $$grayscale = "$$filterGrayscale";

const $$hueRotate = "$$filterHueRotate";

const $$invert = "$$filterInvert";

const $$saturate = "$$filterSaturate";

const $$sepia = "$$filterSepia";

const $$shadow = "$$filterShadow";

const defaultFilterVariables = {
    
    [$$blur]: "blur(0px)",
    
    [$$brightness]: "brightness(1)",
    
    [$$contrast]: "contrast(1)",
    
    [$$grayscale]: "grayscale(0)",
    
    [$$hueRotate]: "hue-rotate(0deg)",
    
    [$$invert]: "invert(0)",
    
    [$$saturate]: "saturate(1)",
    
    [$$sepia]: "sepia(0)",
    
    [$$shadow]: "drop-shadow(0 0 transparent);"
}

export const _filter = (value: boolean) => {

    if (value) {

        let filter = `${$$blur} `;

        filter += `${$$brightness} `;

        filter += `${$$contrast} `;
        
        filter += `${$$grayscale} `;

        filter += `${$$hueRotate} `;

        filter += `${$$invert} `;

        filter += `${$$saturate} `;

        filter += `${$$sepia} `;
        
        filter += `${$$shadow}`;

        return {
            ...defaultFilterVariables,
            filter,
        };
    }

    return {
        filter: "none"
    }
};

export const _filterBlur = (value: number | PX | ScaleValue<typeof $filterBlurValues>) => ({
    [$$blur]: getValue(`blur(${toPx(value)})`, $filterBlurValues)
});

export const _filterBrightness = (value: Percentage | ScaleValue<typeof $filterBrightnessValues>) => ({
    [$$brightness]: getValue(`brightness(${value})`, $filterBrightnessValues)
});

export const _filterContrast = (value: Percentage | ScaleValue<typeof $filterContrastValues>) => ({
    [$$contrast]: getValue(`contrast(${value})`, $filterContrastValues)
});

export const _filterGrayscale = (value: Percentage | ScaleValue<typeof $filterGrayscaleValues>) => ({
    [$$grayscale]: getValue(`grayscale(${value})`, $filterGrayscaleValues)
});

export const _filterHueRotate = (value: Negative<Deg> | ScaleValue<typeof $filterHueRotateValues>) => ({
    [$$hueRotate]: getValue(`hue-rotate(${value})`, $filterHueRotateValues)
});

export const _filterInvert = (value: Percentage | ScaleValue<typeof $filterInvertValues>) => ({
    [$$invert]: getValue(`invert(${value})`, $filterInvertValues)
});

export const _filterSaturate = (value: Percentage | ScaleValue<typeof $filterSaturateValues>) => ({
    [$$saturate]: getValue(`saturate(${value})`, $filterSaturateValues)
});

export const _filterSepia = (value: Percentage | ScaleValue<typeof $filterSepiaValues>) => ({
    [$$sepia]: getValue(`sepia(${value})`, $filterSepiaValues)
});
 
export const filterShadow = (value: Percentage | ScaleValue<typeof $filterDropShadowValues>) => ({
    [$$shadow]: getValue(`shadow(${value})`, $filterDropShadowValues)
});