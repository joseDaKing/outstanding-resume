import { 
    borderWidthValues, 
    borderRadiusValues 
}
from "./border";

import { 
    colorValues,
    opacityValues
} 
from "./color";

import {
    filterBlurValues,
    filterBrightnessValues,
    filterContrastValues,
    filterDropShadowValues,
    filterGrayscaleValues,
    filterHueRotateValues,
    filterInvertValues,
    filterSaturateValues,
    filterSepiaValues,
    backdropFilterBlurValues,
    backdropFilterBrightnessValues,
    backdropFilterContrastValues,
    backdropFilterGrayscaleValues,
    backdropFilterHueRotateValues,
    backdropFilterInvertValues,
    backdropFilterSaturateValues,
    backdropFilterSepiaValues
} 
from "./filter";

import {
    spacingValues,
    marginValues,
    paddingValues,
    widthValues,
    maxWidthValues,
    minWidthValues,
    heightValues,
    maxHeightValues,
    minHeightValues
} 
from "./spacing";

import {
    fontFamilyValues,
    fontSizeValues,
    fontWeightValues,
    letterSpacingValues,
    lineHeightvalues
} 
from "./typography";

import { shadowValues } from "./shadowValues";

import {
    transformRotateValues,
    transformScaleValues,
    transformSkewValues,
    transformTranslateValues
}  
from "./transformValues";

import {  
    transitionDelayValues,
    transitionDurationValues,
    transitionPropertyValues,
    transitionTimingFunctionValues
} 
from "./transitionValues";

import { zIndexValues } from "./zIndexValues";

export const theme = {
    ...borderRadiusValues,
    ...borderWidthValues,
    ...colorValues,
    ...opacityValues,
    ...filterBlurValues,
    ...filterBrightnessValues,
    ...filterContrastValues,
    ...filterDropShadowValues,
    ...filterGrayscaleValues,
    ...filterHueRotateValues,
    ...filterInvertValues,
    ...filterSaturateValues,
    ...filterSepiaValues,
    ...backdropFilterBlurValues,
    ...backdropFilterBrightnessValues,
    ...backdropFilterContrastValues,
    ...backdropFilterGrayscaleValues,
    ...backdropFilterHueRotateValues,
    ...backdropFilterInvertValues,
    ...backdropFilterSaturateValues,
    ...backdropFilterSepiaValues,
    ...spacingValues,
    ...marginValues,
    ...paddingValues,
    ...widthValues,
    ...maxWidthValues,
    ...minWidthValues,
    ...heightValues,
    ...maxHeightValues,
    ...minHeightValues,
    ...fontFamilyValues,
    ...fontSizeValues,
    ...fontWeightValues,
    ...letterSpacingValues,
    ...lineHeightvalues,
    ...shadowValues,
    ...transformRotateValues,
    ...transformScaleValues,
    ...transformSkewValues,
    ...transformTranslateValues,
    ...transitionDelayValues,
    ...transitionDurationValues,
    ...transitionPropertyValues,
    ...transitionTimingFunctionValues,
    ...zIndexValues,
} as const;

export * from "./border";

export * from "./color";

export * from "./filter";

export * from "./spacing";

export * from "./typography";

export * from "./shadowValues";

export * from "./transformValues";

export * from "./transitionValues";

export * from "./zIndexValues";