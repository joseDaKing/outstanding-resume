import {
    $borderRadiusValues,
    $borderWidthValues,
    $fontSizeValues,
    $fontFamilyValues,
    $fontWeightValues,
    $heightValues,
    $letterSpacingValues,
    $lineHeightvalues,
    $shadowValues,
    $marginValues,
    $paddingValues,
    $colorValues,
    $transitionDelayValues, 
    $transitionDurationValues,
    $transitionTimingFunctionValues,
    $transitionPropertyValues,
    $widthValues,
    $zIndexValues,
    $opacityValues,
    $spacingValues,
    $minWidthValues,
    $maxWidthValues,
    $minHeightValues,
    $maxHeightValues
} 
from "./theme";

export const borderRadiusThemeMap = {
    borderRadius: $borderRadiusValues,
    borderTopLeftRadius: $borderRadiusValues,
    borderTopRightRadius: $borderRadiusValues,
    borderBottomLeftRadius: $borderRadiusValues,
    borderBottomRightRadius: $borderRadiusValues
} as const;

export const borderWidthThemeMap = {
    borderWidth: $borderWidthValues,
    borderTopWidth: $borderWidthValues,
    borderRightWidth: $borderWidthValues,
    borderLeftWidth: $borderWidthValues,
    borderBottomWidth: $borderWidthValues
} as const;

export const typographyThemeMap = {
    fontSize: $fontSizeValues,
    fontFamily: $fontFamilyValues,
    fontWeight: $fontWeightValues,
    letterSpacing: $letterSpacingValues,
    lineHeight: $lineHeightvalues
} as const;

export const marginThemeMape = {
    margin: $marginValues,
    marginTop: $marginValues,
    marginRight: $marginValues,
    marginBottom: $marginValues,
    marginLeft: $marginValues,
    marginBlock: $marginValues,
    marginBlockEnd: $marginValues,
    marginBlockStart: $marginValues,
    marginInline: $marginValues,
    marginInlineEnd: $marginValues,
    marginInlineStart: $marginValues,
    scrollMargin: $marginValues,
    scrollMarginTop: $marginValues,
    scrollMarginRight: $marginValues,
    scrollMarginBottom: $marginValues,
    scrollMarginLeft: $marginValues,
    scrollMarginX: $marginValues,
    scrollMarginY: $marginValues,
    scrollMarginBlock: $marginValues,
    scrollMarginBlockEnd: $marginValues,
    scrollMarginBlockStart: $marginValues,
    scrollMarginInline: $marginValues,
    scrollMarginInlineEnd: $marginValues,
    scrollMarginInlineStart: $marginValues
} as const; 

export const paddingThemeMap = {
    padding: $paddingValues,
    paddingTop: $paddingValues,
    paddingRight: $paddingValues,
    paddingBottom: $paddingValues,
    paddingLeft: $paddingValues,
    paddingBlock: $paddingValues,
    paddingBlockEnd: $paddingValues,
    paddingBlockStart: $paddingValues,
    paddingInline: $paddingValues,
    paddingInlineEnd: $paddingValues,
    paddingInlineStart: $paddingValues,
    scrollPadding: $paddingValues,
    scrollPaddingTop: $paddingValues,
    scrollPaddingRight: $paddingValues,
    scrollPaddingBottom: $paddingValues,
    scrollPaddingLeft: $paddingValues,
    scrollPaddingX: $paddingValues,
    scrollPaddingY: $paddingValues,
    scrollPaddingBlock: $paddingValues,
    scrollPaddingBlockEnd: $paddingValues,
    scrollPaddingBlockStart: $paddingValues,
    scrollPaddingInline: $paddingValues,
    scrollPaddingInlineEnd: $paddingValues,
    scrollPaddingInlineStart: $paddingValues
} as const;

export const spacingThemeMap = {
    blockSize: $spacingValues,
    minBlockSize: $spacingValues,
    maxBlockSize: $spacingValues,
    inlineSize: $spacingValues,
    minInlineSize: $spacingValues,
    maxInlineSize: $spacingValues,
    flexBasis: $spacingValues,
    inset: $spacingValues,
    insetY: $spacingValues,
    insetX: $spacingValues,
    top: $spacingValues,
    bottom: $spacingValues,
    left: $spacingValues,
    right: $spacingValues,
    insetBlock: $spacingValues,
    insetBlockEnd: $spacingValues,
    insetBlockStart: $spacingValues,
    insetInline: $spacingValues,
    insetInlineEnd: $spacingValues,
    insetInlineStart: $spacingValues
} as const;

export const widthThemeMap = {
    width: $widthValues,
    gridTemplateColumns: $widthValues,
    minWidth: $minWidthValues,
    maxWidth: $maxWidthValues,
} as const;

export const heightThemeMap = {
    height: $heightValues,
    gridTemplateRows: $heightValues,
    minheight: $minHeightValues,
    maxheight: $maxHeightValues,
} as const;

export const opacityThemeMap = {
    opacity: $opacityValues
} as const;

export const zIndexThemeMap = {
    zIndex: $zIndexValues
} as const;

export const transitionDelayThemeMap =  {
    transitionDelay: $transitionDelayValues
} as const;

export const transitionDurationThemeMap =  {
    transitionDuration: $transitionDurationValues
} as const;

export const transitionTimingFunctionThemeMap =  {
    transitionTimingFunction: $transitionTimingFunctionValues
} as const;

export const transitionPropertyThemeMap =  {
    transitionProperty: $transitionPropertyValues
} as const;

export const boxshadowThemeMap = {
    boxShadow: $shadowValues,
    textShadow: $shadowValues
} as const;

export const colorThememap = {
    background: $colorValues,
    backgroundColor: $colorValues,
    backgroundImage: $colorValues,
    border: $colorValues,
    borderBlock: $colorValues,
    borderBlockEnd: $colorValues,
    borderBlockStart: $colorValues,
    borderBottom: $colorValues,
    borderBottomColor: $colorValues,
    borderColor: $colorValues,
    borderInline: $colorValues,
    borderInlineEnd: $colorValues,
    borderInlineStart: $colorValues,
    borderLeft: $colorValues,
    borderLeftColor: $colorValues,
    borderRight: $colorValues,
    borderRightColor: $colorValues,
    borderTop: $colorValues,
    borderTopColor: $colorValues,
    caretColor: $colorValues,
    color: $colorValues,
    columnRuleColor: $colorValues,
    fill: $colorValues,
    outlineColor: $colorValues,
    stroke: $colorValues,
    textDecorationColor: $colorValues
} as const;

export const themeMap = {
    ...borderRadiusThemeMap,
    ...borderWidthThemeMap,
    ...typographyThemeMap,
    ...marginThemeMape,
    ...paddingThemeMap,
    ...spacingThemeMap,
    ...widthThemeMap,
    ...heightThemeMap,
    ...opacityThemeMap,
    ...zIndexThemeMap,
    ...transitionDelayThemeMap,
    ...transitionDurationThemeMap,
    ...transitionTimingFunctionThemeMap,
    ...transitionPropertyThemeMap,
    ...boxshadowThemeMap,
    ...colorThememap
} as const;