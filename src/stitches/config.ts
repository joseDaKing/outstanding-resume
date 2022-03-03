import { 
    slate,
    slateA,
    gray,
    grayA,
    violet,
    violetA,
    pink,
    pinkA,
    amber,
    amberA,
    blue,
    blueA,
    red,
    redA,
    green,
    greenA,
}
from "@radix-ui/colors";

import { CSS, PropertyValue, ScaleValue } from "@stitches/react";

import Stitches from "@stitches/react/types/stitches";

import { linearGradient, filter, transform } from "./helpers";

import { createStyleObject } from "@capsizecss/core";



export const media = {
    "2xl": "@media (min-width: 1536px)",
    xl: "@media (min-width: 1280px)",
    lg: "@media (min-width: 1024px)",
    md: "@media (min-width: 768px)",
    sm: "@media (min-width: 512px)",
    vertical: "@media (orientation: vertical)",
    horizontal: "@media (orientation: horizontal)",

};

const varThemeMap = {
    $$gradientDirection: "rotate",
    $$gradientFrom: "color",
    $$gradientTo: "color",
    
    $$filterBlur: "blur",
    $$filterBrightness: "brightness",
    $$filterContrast: "contrast",
    $$filterDropShadow: "shadow",
    $$filterGrayscale: "grayscale",
    $$filterHueRotate: "hueRotate",
    $$filterInvert: "invert",
    $$filterOpacity: "opacity",
    $$filterSaturate: "saturate",
    $$filterSepia: "sepia",

    $$backdropFilterBlur: "blur",
    $$backdropFilterBrightness: "brightness",
    $$backdropFilterContrast: "contrast",
    $$backdropFilterDropShadow: "shadow",
    $$backdropFilterGrayscale: "grayscale",
    $$backdropFilterHueRotate: "hueRotate",
    $$backdropFilterInvert: "invert",
    $$backdropFilterOpacity: "opacity",
    $$backdropFilterSaturate: "saturate",
    $$backdropFilterSepia: "sepia",

    $$transformRotate: "rotate",
    $$transformTranslateX: "translate",
    $$transformTranslateY: "translate",
    $$transformSkewX: "skew",
    $$transformSkewY: "skew",
    $$transformScaleX: "scale",
    $$transformScaleY: "scale",
} as any;

const propertyThemeMap = {
    outlineWidth: "borderWidth",
    borderWidth: "borderWidth",
    transition: "transition",
    letterSpacing: "letterSpacing",
    opacity: "opacity",
    boxShadow: "shadow",
    textShadow: "shadow",
    
    background: "color",
    backgroundColor: "color",
    backgroundImage: "color",
    
    border: "color",
    borderBottom: "color",
    borderRight: "color",
    borderLeft: "color",
    borderTop: "color",
    
    borderBlock: "color",
    borderBlockEnd: "color",
    borderBlockStart: "color",
    
    borderInline: "color",
    borderInlineEnd: "color",
    borderInlineStart: "color",
    
    borderColor: "color",
    borderBottomColor: "color",
    borderLeftColor: "color",
    borderRightColor: "color",
    borderTopColor: "color",

    caretColor: "color",
    color: "color",
    columnRuleColor: "color",
    fill: "color",
    outlineColor: "color",
    stroke: "color",
    textDecorationColor: "color",

    fontFamily: "fontFamily",

    borderRadius: "borderRadius",
    borderTopLeftRadius: "borderRadius",
    borderTopRightRadius: "borderRadius",
    borderBottomRightRadius: "borderRadius",
    borderBottomLeftRadius: "borderRadius",

    borderEndEndRadius: "borderRadius",
    borderStartStartRadius: "borderRadius",
    borderEndStartRadius: "borderRadius",
    borderStartEndRadius: "borderRadius",

    blockSize: "size",
    minBlockSize: "size",
    maxBlockSize: "size",
    
    inlineSize: "size",
    minInlineSize: "size",
    maxInlineSize: "size",
    
    width: "size",
    minWidth: "size",
    maxWidth: "size",

    height: "size",
    minHeight: "size",
    maxHeight: "size",

    flexBasis: "size",
    gridTemplateColumns: "size",
    gridTemplateRows: "size",

    gap: "space",
    columnGap: "space",
    rowGap: "space",

    inset: "space",
    insetBlock: "space",
    insetBlockEnd: "space",
    insetBlockStart: "space",
    insetInline: "space",
    insetInlineEnd: "space",
    insetInlineStart: "space",

    margin: "space",
    marginTop: "space",
    marginRight: "space",
    marginBottom: "space",
    marginLeft: "space",

    marginBlock: "space",
    marginBlockEnd: "space",
    marginBlockStart: "space",
    marginInline: "space",
    marginInlineEnd: "space",
    marginInlineStart: "space",

    padding: "space",
    paddingTop: "space",
    paddingRight: "space",
    paddingBottom: "space",
    paddingLeft: "space",

    paddingBlock: "space",
    paddingBlockEnd: "space",
    paddingBlockStart: "space",
    paddingInline: "space",
    paddingInlineEnd: "space",
    paddingInlineStart: "space",

    top: "space",
    right: "space",
    bottom: "space",
    left: "space",

    scrollMargin: "space",
    scrollMarginTop: "space",
    scrollMarginRight: "space",
    scrollMarginBottom: "space",
    scrollMarginLeft: "space",
    scrollMarginX: "space",
    scrollMarginY: "space",

    scrollMarginBlock: "space",
    scrollMarginBlockEnd: "space",
    scrollMarginBlockStart: "space",

    scrollMarginInline: "space",
    scrollMarginInlineEnd: "space",
    scrollMarginInlineStart: "space",
    
    scrollPadding: "space",
    scrollPaddingTop: "space",
    scrollPaddingRight: "space",
    scrollPaddingBottom: "space",
    scrollPaddingLeft: "space",
    scrollPaddingX: "space",
    scrollPaddingY: "space",

    scrollPaddingBlock: "space",
    scrollPaddingBlockEnd: "space",
    scrollPaddingBlockStart: "space",

    scrollPaddingInline: "space",
    scrollPaddingInlineEnd: "space",
    scrollPaddingInlineStart: "space",
} as const;

export const themeMap: typeof propertyThemeMap = {
    ...varThemeMap,
    ...propertyThemeMap
}

export const theme = {
    color: {
        inverted: "white",

        primary1: violet.violet1,
        primary2: violet.violet2,
        primary3: violet.violet3,
        primary4: violet.violet4,
        primary5: violet.violet5,
        primary6: violet.violet6,
        primary7: violet.violet7,
        primary8: violet.violet8,
        primary9: violet.violet9,
        primary10: violet.violet10,
        primary11: violet.violet11,
        primary12: violet.violet12,

        primaryA1: violetA.violetA1,
        primaryA2: violetA.violetA2,
        primaryA3: violetA.violetA3,
        primaryA4: violetA.violetA4,
        primaryA5: violetA.violetA5,
        primaryA6: violetA.violetA6,
        primaryA7: violetA.violetA7,
        primaryA8: violetA.violetA8,
        primaryA9: violetA.violetA9,
        primaryA10: violetA.violetA10,
        primaryA11: violetA.violetA11,
        primaryA12: violetA.violetA12,

        secondary1: pink.pink1,
        secondary2: pink.pink2,
        secondary3: pink.pink3,
        secondary4: pink.pink4,
        secondary5: pink.pink5,
        secondary6: pink.pink6,
        secondary7: pink.pink7,
        secondary8: pink.pink8,
        secondary9: pink.pink9,
        secondary10: pink.pink10,
        secondary11: pink.pink11,
        secondary12: pink.pink12,

        secondaryA1: pinkA.pinkA1,
        secondaryA2: pinkA.pinkA2,
        secondaryA3: pinkA.pinkA3,
        secondaryA4: pinkA.pinkA4,
        secondaryA5: pinkA.pinkA5,
        secondaryA6: pinkA.pinkA6,
        secondaryA7: pinkA.pinkA7,
        secondaryA8: pinkA.pinkA8,
        secondaryA9: pinkA.pinkA9,
        secondaryA10: pinkA.pinkA10,
        secondaryA11: pinkA.pinkA11,
        secondaryA12: pinkA.pinkA12,

        action1: blue.blue1,
        action2: blue.blue2,
        action3: blue.blue3,
        action4: blue.blue4,
        action5: blue.blue5,
        action6: blue.blue6,
        action7: blue.blue7,
        action8: blue.blue8,
        action9: blue.blue9,
        action10: blue.blue10,
        action11: blue.blue11,
        action12: blue.blue12,

        actionA1: blueA.blueA1,
        actionA2: blueA.blueA2,
        actionA3: blueA.blueA3,
        actionA4: blueA.blueA4,
        actionA5: blueA.blueA5,
        actionA6: blueA.blueA6,
        actionA7: blueA.blueA7,
        actionA8: blueA.blueA8,
        actionA9: blueA.blueA9,
        actionA10: blueA.blueA10,
        actionA11: blueA.blueA11,
        actionA12: blueA.blueA12,

        success1: green.green1,
        success2: green.green2,
        success3: green.green3,
        success4: green.green4,
        success5: green.green5,
        success6: green.green6,
        success7: green.green7,
        success8: green.green8,
        success9: green.green9,
        success10: green.green10,
        success11: green.green11,
        success12: green.green12,

        successA1: greenA.greenA1,
        successA2: greenA.greenA2,
        successA3: greenA.greenA3,
        successA4: greenA.greenA4,
        successA5: greenA.greenA5,
        successA6: greenA.greenA6,
        successA7: greenA.greenA7,
        successA8: greenA.greenA8,
        successA9: greenA.greenA9,
        successA10: greenA.greenA10,
        successA11: greenA.greenA11,
        successA12: greenA.greenA12,

        warning1: amber.amber1,
        warning2: amber.amber2,
        warning3: amber.amber3,
        warning4: amber.amber4,
        warning5: amber.amber5,
        warning6: amber.amber6,
        warning7: amber.amber7,
        warning8: amber.amber8,
        warning9: amber.amber9,
        warning10: amber.amber10,
        warning11: amber.amber11,
        warning12: amber.amber12,

        warningA1: amberA.amberA1,
        warningA2: amberA.amberA2,
        warningA3: amberA.amberA3,
        warningA4: amberA.amberA4,
        warningA5: amberA.amberA5,
        warningA6: amberA.amberA6,
        warningA7: amberA.amberA7,
        warningA8: amberA.amberA8,
        warningA9: amberA.amberA9,
        warningA10: amberA.amberA10,
        warningA11: amberA.amberA11,
        warningA12: amberA.amberA12,

        danger1: red.red1,
        danger2: red.red2,
        danger3: red.red3,
        danger4: red.red4,
        danger5: red.red5,
        danger6: red.red6,
        danger7: red.red7,
        danger8: red.red8,
        danger9: red.red9,
        danger10: red.red10,
        danger11: red.red11,
        danger12: red.red12,

        dangerA1: redA.redA1,
        dangerA2: redA.redA2,
        dangerA3: redA.redA3,
        dangerA4: redA.redA4,
        dangerA5: redA.redA5,
        dangerA6: redA.redA6,
        dangerA7: redA.redA7,
        dangerA8: redA.redA8,
        dangerA9: redA.redA9,
        dangerA10: redA.redA10,
        dangerA11: redA.redA11,
        dangerA12: redA.redA12,

        neutral1: slate.slate1,
        neutral2: slate.slate2,
        neutral3: slate.slate3,
        neutral4: slate.slate4,
        neutral5: slate.slate5,
        neutral6: slate.slate6,
        neutral7: slate.slate7,
        neutral8: slate.slate8,
        neutral9: slate.slate9,
        neutral10: slate.slate10,
        neutral11: slate.slate11,
        neutral12: slate.slate12,

        neutralA1: slateA.slateA1,
        neutralA2: slateA.slateA2,
        neutralA3: slateA.slateA3,
        neutralA4: slateA.slateA4,
        neutralA5: slateA.slateA5,
        neutralA6: slateA.slateA6,
        neutralA7: slateA.slateA7,
        neutralA8: slateA.slateA8,
        neutralA9: slateA.slateA9,
        neutralA10: slateA.slateA10,
        neutralA11: slateA.slateA11,
        neutralA12: slateA.slateA12,

        washed1: gray.gray1,
        washed2: gray.gray2,
        washed3: gray.gray3,
        washed4: gray.gray4,
        washed5: gray.gray5,
        washed6: gray.gray6,
        washed7: gray.gray7,
        washed8: gray.gray8,
        washed9: gray.gray9,
        washed10: gray.gray10,
        washed11: gray.gray11,
        washed12: gray.gray12,

        washedA1: grayA.grayA1,
        washedA2: grayA.grayA2,
        washedA3: grayA.grayA3,
        washedA4: grayA.grayA4,
        washedA5: grayA.grayA5,
        washedA6: grayA.grayA6,
        washedA7: grayA.grayA7,
        washedA8: grayA.grayA8,
        washedA9: grayA.grayA9,
        washedA10: grayA.grayA10,
        washedA11: grayA.grayA11,
        washedA12: grayA.grayA12,
    },
    letterSpacing: {
        tighter: "-0.05em",
        tight: "-0.025em",
        normal: "0em",
        wide: "0.025em",
        wider: "0.05em",
        widest: "0.1em",
    },
    size: {
        "0_5": "0.125rem",
        1: "0.25rem",
        "1_5": "0.375rem",
        2: "0.5rem",
        "2_5": "0.625rem",
        3: "0.75rem",
        "3_5": "0.875rem",
        4: "1rem",
        "4_5": "1.125rem",
        5: "1.25rem",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
        9: "2.25rem",
        10: "2.5rem",
        11: "2.75rem",
        12: "3rem",
        14: "3.5rem",
        16: "4rem",
        20: "5rem",
        24: "6rem",
        28: "7rem",
        32: "8rem",
        36: "9rem",
        40: "10rem",
        44: "11rem",
        48: "12rem",
        52: "13rem",
        56: "14rem",
        60: "15rem",
        64: "16rem",
        72: "18rem",
        80: "20rem",
        96: "24rem",
        "1__2": "50%",
        "1__3": "33.333333%",
        "2__3": "66.666667%",
        "1__4": "25%",
        "2__4": "50%",
        "3__4": "75%",
        "1__5": "20%",
        "2__5": "40%",
        "3__5": "60%",
        "4__5": "80%",
        "1__6": "16.666667%",
        "2__6": "33.333333%",
        "3__6": "50%",
        "4__6": "66.666667%",
        "5__6": "83.333333%",
        "1__12": "8.333333%",
        "2__12": "16.666667%",
        "3__12": "25%",
        "4__12": "33.333333%",
        "5__12": "41.666667%",
        "6__12": "50%",
        "7__12": "58.333333%",
        "8__12": "66.666667%",
        "9__12": "75%",
        "10__12": "83.333333%",
        "11__12": "91.666667%",
        full: "100%",
        xs: "20rem",
        sm: "24rem",
        md: "28rem",
        lg: "32rem",
        xl: "36rem",
        "2xl": "42rem",
        "3xl": "48rem",
        "4xl": "56rem",
        "5xl": "64rem",
        "6xl": "72rem",
        "7xl": "80rem",
    },
    space: {
        "0_5": "0.125rem",
        1: "0.25rem",
        "1_5": "0.375rem",
        2: "0.5rem",
        "2_5": "0.625rem",
        3: "0.75rem",
        "3_5": "0.875rem",
        4: "1rem",
        "4_5": "1.125rem",
        5: "1.25rem",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
        9: "2.25rem",
        10: "2.5rem",
        11: "2.75rem",
        12: "3rem",
        14: "3.5rem",
        16: "4rem",
        20: "5rem",
        24: "6rem",
        28: "7rem",
        32: "8rem",
        36: "9rem",
        40: "10rem",
        44: "11rem",
        48: "12rem",
        52: "13rem",
        56: "14rem",
        60: "15rem",
        64: "16rem",
        72: "18rem",
        80: "20rem",
        96: "24rem",
    },
    shadow: {
        sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        md: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        lg: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        xl: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
        "2xl": "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
        "3xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
        inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
    },
    borderRadius: {
        xs: "0.125rem",
        sm: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        round: "9999px"
    },
    borderWidth: {
        1: "1px",
        2: "2px",
        4: "4px",
        8: "8px",
    },
    opacity: {
        5: "0.05",
        10: "0.10",
        15: "0.15",
        20: "0.20",
        25: "0.25",
        30: "0.30",
        35: "0.35",
        40: "0.40",
        45: "0.45",
        50: "0.50",
        55: "0.55",
        60: "0.60",
        65: "0.65",
        70: "0.70",
        75: "0.75",
        80: "0.80",
        85: "0.85",
        90: "0.90",
        95: "0.95",
        100: "1.00",
    },
    zIndex: {
        0: "0",
        10: "10",
        20: "20",
        30: "30",
        40: "40",
        50: "50",
        auto: "auto",
    },
    transition: {
        75: "all 75ms ease-in-out",
        100: "all 100ms ease-in-out",
        150: "all 150ms ease-in-out",
        200: "all 200ms ease-in-out",
    },
    fontFamily: {
        primary: "'Roboto', sans-serif"
    },
    saturate: {
        50: "0.5",
        75: "0.75",
        90: "0.9",
        95: "0.95",
        100: "1",
        105: "1.05",
        110: "1.1",
        125: "1.25",
        150: "1.5",
        200: "2",
    },
    contrast: {
        50: "0.5",
        75: "0.75",
        90: "0.9",
        95: "0.95",
        100: "1",
        105: "1.05",
        110: "1.1",
        125: "1.25",
        150: "1.5",
        200: "2",
    },
    brightness: {
        50: "0.5",
        75: "0.75",
        90: "0.9",
        95: "0.95",
        100: "1",
        105: "1.05",
        110: "1.1",
        125: "1.25",
        150: "1.5",
        200: "2",
    },
    blur: {
        xs: "4px",
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
        "2xl": "40px",
        "3xl": "64px",
    },
    hueRotate: {
        0: "0deg",
        15: "15deg",
        30: "30deg",
        60: "60deg",
        90: "90deg",
        180: "180deg",
    },
    skew: {
        0: "0deg",
        1: "1deg",
        2: "2deg",
        3: "3deg",
        6: "6deg",
        12: "12deg",
    },
    rotate: {
        0: "0deg",
        1: "1deg",
        2: "2deg",
        3: "3deg",
        6: "6deg",
        12: "12deg",
        45: "45deg",
        90: "90deg",
        180: "180deg",
    },
    scale: {
        50: "0.5",
        75: "0.75",
        90: "0.9",
        95: "0.95",
        100: "1",
        105: "1.05",
        110: "1.1",
        125: "1.25",
        150: "1.5",
    },
    translate: {
        0: "0px",
        px: "1px",
        "0_5": "0.125rem",
        1: "0.25rem",
        "1_5": "0.375rem",
        2: "0.5rem",
        "2_5": "0.625rem",
        3: "0.75rem",
        "3_5": "0.875rem",
        4: "1rem",
        "4_5": "1.125rem",
        5: "1.25rem",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
        9: "2.25rem",
        10: "2.5rem",
        11: "2.75rem",
        12: "3rem",
        14: "3.5rem",
        16: "4rem",
        20: "5rem",
        24: "6rem",
        28: "7rem",
        32: "8rem",
        36: "9rem",
        40: "10rem",
        44: "11rem",
        48: "12rem",
        52: "13rem",
        56: "14rem",
        60: "15rem",
        64: "16rem",
        72: "18rem",
        80: "20rem",
        96: "24rem",
        "1__2": "50%",
        "1__3": "33.333333%",
        "2__3": "66.666667%",
        "1__4": "25%",
        "2__4": "50%",
        "3__4": "75%",
        full: "100%",
    }
};

type CapSizeOptions = Parameters<typeof createStyleObject>[0];

type Utils = {
    lineClamp: (value: number | "none") => {},
    capSize: (value: CapSizeOptions) => {},
    transformSkew: (value: (string & {}) | ScaleValue<"skew">) => {},
    transformSkewX: (value: (string & {}) | ScaleValue<"skew">) => {},
    transformSkewY: (value: (string & {}) | ScaleValue<"skew">) => {},
    transformScale: (value: (string & {}) | ScaleValue<"scale">) => {},
    transformScaleX: (value: (string & {}) | ScaleValue<"scale">) => {},
    transformScaleY: (value: (string & {}) | ScaleValue<"scale">) => {},
    transformRotate: (value: (string & {}) | ScaleValue<"rotate">) => {},
    transformTranslateX: (value: (string & {}) | ScaleValue<"translate">) => {},
    transformTranslateY: (value: (string & {}) | ScaleValue<"translate">) => {},
    backdropBlur: (value: (string & {}) | ScaleValue<"blur">) => {},
    backdropBrightness: (value: (string & {}) | ScaleValue<"brightness">) => {},
    backdropContrast: (value: (string & {}) | ScaleValue<"contrast">) => {},
    backdropDropShadow: (value: (string & {}) | ScaleValue<"dropShadow">) => {},
    backdropGrayscale: (value: (string & {}) | ScaleValue<"grayscale">) => {},
    backdropHueRotate: (value: (string & {}) | ScaleValue<"hueRotate">) => {},
    backdropInvert: (value: (string & {}) | ScaleValue<"invert">) => {},
    backdropSaturate: (value: (string & {}) | ScaleValue<"saturate">) => {},
    backdropSepia: (value: (string & {}) | ScaleValue<"Sepia">) => {},
    filterBlur: (value: (string & {}) | ScaleValue<"blur">) => {},
    filterBrightness: (value: (string & {}) | ScaleValue<"brightness">) => {},
    filterContrast: (value: (string & {}) | ScaleValue<"contrast">) => {},
    filterDropShadow: (value: (string & {}) | ScaleValue<"shadow">) => {},
    filterGrayscale: (value: (string & {}) | ScaleValue<"grayscale">) => {},
    filterHueRotate: (value: (string & {}) | ScaleValue<"hueRotate">) => {},
    filterInvert: (value: (string & {}) | ScaleValue<"invert">) => {},
    filterSaturate: (value: (string & {}) | ScaleValue<"saturate">) => {},
    filterSepia: (value: (string & {}) | ScaleValue<"sepia">) => {},
    gradientDirection: (value: string) => {},
    gradientTo: (value: PropertyValue<"color">) => {},
    gradientFrom: (value: PropertyValue<"color">) => {},
    borderX: (value: PropertyValue<"border">) => {},
    borderY: (value: PropertyValue<"border">) => {},
    borderXStyle: (value: PropertyValue<"borderStyle">) => {},
    borderYStyle: (value: PropertyValue<"borderStyle">) => {},
    borderXColor: (value: PropertyValue<"borderColor">) => {},
    borderYColor: (value: PropertyValue<"borderColor">) => {},
    borderXWidth: (value: PropertyValue<"borderWidth">) => {},
    borderYWidth: (value: PropertyValue<"borderWidth">) => {},
    borderTopRadius: (value: PropertyValue<"borderRadius">) => {},
    borderBottomRadius: (value: PropertyValue<"borderRadius">) => {},
    borderLeftRadius: (value: PropertyValue<"borderRadius">) => {},
    borderRightRadius: (value: PropertyValue<"borderRadius">) => {},
    divideXWidth: (value: PropertyValue<"borderWidth">) => {},
    divideXColor: (value: PropertyValue<"borderColor">) => {},
    divideXStyle: (value: PropertyValue<"borderStyle">) => {},
    divideXReverse: (value: boolean) => {},
    divideYWidth: (value: PropertyValue<"borderWidth">) => {},
    divideYColor: (value: PropertyValue<"borderColor">) => {},
    divideYStyle: (value: PropertyValue<"borderStyle">) => {},
    divideYReverse: (value: boolean) => {},
    placeholderColor: (value: PropertyValue<"color">) => {},
    placeholderBackgroundColor: (value: PropertyValue<"color">) => {},
    selectionColor: (value: PropertyValue<"color">) => {},
    selectionBackgroundColor: (value: PropertyValue<"color">) => {},
    size: (value: PropertyValue<"width">) => {},
    maxSize: (value: PropertyValue<"width">) => {},
    minSize: (value: PropertyValue<"width">) => {},
    insetX: (value: PropertyValue<"inset">) => {},
    insetY: (value: PropertyValue<"inset">) => {},
    marginX: (value: PropertyValue<"margin">) => {},
    marginY: (value: PropertyValue<"margin">) => {},
    paddingX: (value: PropertyValue<"padding">) => {},
    paddingY: (value: PropertyValue<"padding">) => {},
    spaceX: (value: PropertyValue<"margin">) => {},
    spaceXReverse: (value: boolean) => {},
    spaceY: (value: PropertyValue<"margin">) => {},
    spaceYReverse: (value: boolean) => {},
    notFirstChildren: (styles: ThemedCSS) => {},
    notLastChildren: (styles: ThemedCSS) => {},
    inBetweenChildren: (styles: ThemedCSS) => {},
    firstChildren: (styles: ThemedCSS) => {},
    lastChildren: (styles: ThemedCSS) => {},
    stateToggled: (styles: ThemedCSS) => {},
    stateUntoggled: (styles: ThemedCSS) => {},
    stateDisabled: (styles: ThemedCSS) => {},
    stateUndisabled: (styles: ThemedCSS) => {},
    alignStart: (styles: ThemedCSS) => {},
    alignCenter: (styles: ThemedCSS) => {},
    alignEnd: (styles: ThemedCSS) => {},
    sideTop: (styles: ThemedCSS) => {},
    sideRight: (styles: ThemedCSS) => {},
    sideBottom: (styles: ThemedCSS) => {},
    sideLeft: (styles: ThemedCSS) => {},
    hover: (styles: ThemedCSS) => {}
    active: (styles: ThemedCSS) => {};
    focus: (styles: ThemedCSS) => {};
    focusWithin:(styles: ThemedCSS) => {};
    focusVisible: (styles: ThemedCSS) => {};
    orientationHorizontal: (styles: ThemedCSS) => {},
    orientationVertical: (styles: ThemedCSS) => {}
}

type ThemedCSS = CSS<Stitches<"", typeof media, typeof theme, typeof themeMap, Utils>["config"]>;

const gradientBase = {
    backgroundImage: linearGradient({
        direction: "var(---gradientDirection, -90deg)",
        stops: [
            "var(---gradientFrom, transparent)",
            "var(---gradientTo, transparent)"
        ]
    })
}

const filterBase = {
    filter: filter({
        blur: "var(---filterBlur, 0px)",
        brightness: "var(---filterBrightness, 1)",
        contrast: "var(---filterContrast, 1)",
        dropShadow: "var(---filterDropShadow, 0px 0px 0px transparent)",
        grayscale: "var(---filterGrayscale, 0)",
        hueRotate: "var(---filterHueRotate, 0deg)",
        invert: "var(---filterInvert, 0)",
        opacity: "var(---filterOpacity, 1)",
        saturate: "var(---filterSaturate, 1)",
        sepia: "var(---filterSepia, 0)",
    }),
}

const backdropFilterBase = {
    backdropFilter: filter({
        blur: "var(---backdropFilterBlur, 0px)",
        brightness: "var(---backdropFilterBrightness, 1)",
        contrast: "var(---backdropFilterContrast, 1)",
        dropShadow: "var(---backdropFilterDropShadow, 0px 0px 0px transparent)",
        grayscale: "var(---backdropFilterGrayscale, 0)",
        hueRotate: "var(---backdropFilterHueRotate, 0deg)",
        invert: "var(---backdropFilterInvert, 0)",
        opacity: "var(---backdropFilterOpacity, 1)",
        saturate: "var(---backdropFilterSaturate, 1)",
        sepia: "var(---backdropFilterSepia, 0)",
    }),
}

const transformBase = {
    transform: transform({
        scaleX: "var(---transformScaleX, 1)",
        scaleY: "var(---transformScaleY, 1)",
        translateX: "var(---transformTranslateX, 0px)",
        translateY: "var(---transformTranslateY, 0px)",
        rotate: "var(---transformRotate, 0deg)",
        skewX: "var(---transformSkewX, 0deg)",
        skewY: "var(---transformSkewY, 0deg)",
    })
}

export const utils: Utils = {
    lineClamp: value => {
    
        if (value === "none") {
    
            return {
                "-webkit-line-clamp": "unset"
            };
        }

        value = Math.abs(value);
    
        return {
            overflow: "hidden",
            display: "-webkit-box",
            "-webkit-box-orient": 'vertical',
            "-webkit-line-clamp": `${value}`,
        };
    },
    capSize: value => {

        const styles = createStyleObject(value)

        return {
            fontSize: styles.fontSize,
            lineHeight: styles.lineHeight,
            "&::after": styles["::after"],
            "&::before": styles["::before"]
        };
    },
    transformSkew: value => ({
        $$transformSkewX: value,
        $$transformSkewY: value,
        ...transformBase
    }),
    transformSkewX: value => ({
        $$transformSkewX: value,
        ...transformBase
    }),
    transformSkewY: value => ({

        $$transformSkewY: value,
        ...transformBase
    }),
    transformScale: value => ({
        $$transformScaleX: value.toString(),
        $$transformScaleY: value.toString(),
        ...transformBase
    }),
    transformScaleX: value => ({
        $$transformScaleX: value.toString(),
        ...transformBase
    }),
    transformScaleY: value => ({ 
        $$transformScaleY: value.toString(),
        ...transformBase
    }),
    transformRotate: value => ({
        $$transformRotate: value,
        ...transformBase
    }),
    transformTranslateX: value => ({
        $$transformTranslateX: value,
        ...transformBase
    }),
    transformTranslateY: value => ({
        $$transformTranslateY: value,
        ...transformBase
    }),
    backdropBlur: value => ({
        $$backdropFilterBlur: value,
        ...backdropFilterBase
    }),
    backdropBrightness: value => ({
        $$backdropFilterBrightness: value,
        ...backdropFilterBase
    }),
    backdropContrast: value => ({
        $$backdropFilterContrast: value,
        ...backdropFilterBase
    }),
    backdropDropShadow: value => ({
        $$backdropFilterDropShadow: value,
        ...backdropFilterBase
    }),
    backdropGrayscale: value => ({
        $$backdropFilterGrayscale: value,
        ...backdropFilterBase
    }),
    backdropHueRotate: value => ({
        $$backdropFilterHueRotate: value,
        ...backdropFilterBase
    }),
    backdropInvert: value => ({
        $$backdropFilterInvert: value,
        ...backdropFilterBase
    }),
    backdropSaturate: value => ({
        $$backdropFilterSaturate: value,
        ...backdropFilterBase
    }),
    backdropSepia: value => ({
        $$backdropFilterSepia: value,
        ...backdropFilterBase
    }),
    filterBlur: value => ({
        $$filterBlur: value,
        ...filterBase
    }),
    filterBrightness: value => ({
        $$filterBrightness: value,
        ...filterBase
    }),
    filterContrast: value => ({
        $$filterContrast: value,
        ...filterBase
    }),
    filterDropShadow: value => ({
        $$filterDropShadow: value,
        ...filterBase
    }),
    filterGrayscale: value => ({
        $$filterGrayscale: value,
        ...filterBase
    }),
    filterHueRotate: value => ({
        $$filterHueRotate: value,
        ...filterBase
    }),
    filterInvert: value => ({
        $$filterInvert: value,
        ...filterBase
    }),
    filterSaturate: value => ({
        $$filterSaturate: value,
        ...filterBase
    }),
    filterSepia: value => ({
        $$filterSepia: value,
        ...filterBase
    }),
    gradientDirection: value => ({
        "$$gradientDirection": value
    }),
    gradientTo: value => ({
        $$gradientFrom: value,
        ...gradientBase
    }),
    gradientFrom: value => ({
        $$gradientTo: value,
        ...gradientBase
    }),
    borderX: value => ({
        borderLeft: value,
        borderRight: value
    }),
    borderY: value => ({
        borderTop: value,
        borderBottom: value
    }),
    borderXStyle: value => ({
        borderLeftStyle: value,
        borderRightStyle: value
    }),
    borderYStyle: value => ({
        borderTopStyle: value,
        borderBottomStyle: value
    }),
    borderXColor: value => ({
        borderLeftColor: value,
        borderRightColor: value
    }),
    borderYColor: value => ({
        borderTopColor: value,
        borderBottomColor: value
    }),
    borderXWidth: value => ({
        borderLeftWidth: value,
        borderRightWidth: value
    }),
    borderYWidth: value => ({
        borderTopWidth: value,
        borderBottomWidth: value
    }),
    borderTopRadius: value => ({
        borderTopRightRadius: value,
        borderTopLeftRadius: value
    }),
    borderBottomRadius: value => ({
        borderBottomRightRadius: value,
        borderBottomLeftRadius: value
    }),
    borderLeftRadius: value => ({
        borderTopLeftRadius: value,
        borderBottomLeftRadius: value
    }),
    borderRightRadius: value => ({
        borderTopRightRadius: value,
        borderBottomRightRadius: value
    }),
    divideXWidth: value => ({
        "& > :not(:first-child):not([hidden])": {
            $$divideXReverse: 0,
            borderLeftWidth: `calc(${value} * calc(1 - $$divideXReverse))`,
            borderRightWidth: `calc(${value} * $$divideXReverse)`
        }
    }),
    divideXColor: value => ({
        "& > :not(:first-child):not([hidden])": {
            borderLeftColor: value,
            borderRightColor: value
        }
    }),
    divideXStyle: value => ({
        "& > :not(:first-child):not([hidden])": {
            borderLeftStyle: value,
            borderRightStyle: value
        }
    }),
    divideXReverse: value => ({
        "& > :not(:first-child):not([hidden])": {
            $$divideXReverse: Number(value),
        }
    }),
    divideYWidth: value => ({
        "& > :not(:first-child):not([hidden])": {
            $$divideYReverse: 0,
            borderTopWidth: `calc(${value} * calc(1 - $$divideYReverse))`,
            borderBottomWidth: `calc(${value} * $$divideYReverse)`
        }
    }),
    divideYColor: value => ({
        "& > :not(:first-child):not([hidden])": {
            borderTopColor: value,
            borderBottomColor: value
        }
    }),
    divideYStyle: value => ({
        "& > :not(:first-child):not([hidden])": {
            borderTopStyle: value,
            borderBottomStyle: value
        }
    }),
    divideYReverse: value => ({
        "& > :not(:first-child):not([hidden])": {
            $$divideYReverse: Number(value)
        }
    }),
    placeholderColor: value => ({
        "&::placeholder": {
            color: value
        }
    }),
    placeholderBackgroundColor: value => ({
        "&::placeholder": {
            backgroundColor: value
        }
    }),
    selectionColor: value => ({
        "&::selection": {
            color: value
        }
    }),
    selectionBackgroundColor: value => ({
        "&::selection": {
            backgroundColor: value
        }
    }),
    size: value => ({
        width: value,
        height: value
    }),
    maxSize: value => ({
        maxWidth: value,
        maxHeight: value
    }),
    minSize: value => ({
        minWidth: value,
        minHeight: value
    }),
    insetX: value => ({
        left: value,
        right: value
    }),        
    insetY: value => ({
        top: value,
        bottom: value
    }),
    marginX: value => ({
        marginLeft: value,
        marginRight: value
    }),
    marginY: value => ({
        marginTop: value,
        marginBottom: value
    }),
    paddingX: value => ({
        paddingLeft: value,
        paddingRight: value
    }),
    paddingY: value => ({
        paddingTop: value,
        paddingBottom: value
    }),
    spaceX: value => ({
        "& > :not(:first-child):not([hidden])": {
            $$spaceXReverse: 0,
            marginLeft: `calc(${value} * calc(1 - $$spaceXReverse))`,
            marginRight: `calc(${value} * $$spaceXReverse)`
        }
    }),
    spaceXReverse: value => ({
        "& > :not(:first-child):not([hidden])": {
            $$spaceXReverse: Number(value),
        }
    }),
    spaceY: value => ({
        "& > :not(:first-child):not([hidden])": {
            $$spaceYReverse: 0,
            marginTop: `calc(${value} * calc(1 - $$spaceYReverse))`,
            marginBottom: `calc(${value} * $$spaceYReverse)`
        }
    }),
    spaceYReverse: value => ({
        "& > :not(:first-child):not([hidden])": {
            $$spaceYReverse: Number(value),
        }
    }),
    notFirstChildren: styles => ({
        "& > :not(:first-child)": styles
    }),
    notLastChildren: styles => ({
        "& > :not(:last-child)": styles
    }),
    inBetweenChildren: styles => ({
            "& > :not(:first-child):not(:last-child)": styles
    }),
    firstChildren: styles => ({
        "& > :first-child": styles
    }),
    lastChildren: styles => ({
        "& > :last-child": styles
    }),
    stateToggled: styles => ({
        "&:checked,&[data-state='checked'],&[data-state='on'],&[data-state='active'],&[data-state='open']": styles
    }),
    stateUntoggled: styles => ({
        "&:not(:checked,[data-state='checked'],[data-state='on'],[data-state='active'],[data-state='open'])": styles
    }),
    stateDisabled: styles => ({
        "&:disabled,&[data-disabled]": styles
    }),
    stateUndisabled: styles => ({
        "&:not(:disabled,[data-disabled])": styles
    }),
    orientationHorizontal: styles => ({
        "&[orientation='horizontal']": styles
    }),
    orientationVertical: styles => ({
        "&[orientation='vertical']": styles
    }),
    alignStart: styles => ({
        "&[data-align='start']": styles
    }),
    alignCenter: styles => ({
        "&[data-align='center']": styles
    }),
    alignEnd: styles => ({
        "&[data-align='end']": styles
    }),
    sideTop: styles => ({
        "&[data-side='top']": styles
    }),
    sideRight: styles => ({
        "&[data-side='right']": styles
    }),
    sideBottom: styles => ({
        "&[data-side='bottom']": styles
    }),
    sideLeft: styles => ({
        "&[data-side='left']": styles
    }),
    hover: styles => ({
        "@media (hover: hover)": {
            "&:hover": styles
        }
    }),
    active: styles => ({
        "&:active": styles
    }),
    focus: styles => ({
        "@media (hover: hover)": {
            "&:focus": styles
        }
    }),
    focusWithin: styles => ({
        "@media (hover: hover)": {
            "&:focus-within": styles
        }
    }),
    focusVisible: styles => ({
        "@media (hover: hover)": {
            "&:focus-visible": styles
        }
    })
}