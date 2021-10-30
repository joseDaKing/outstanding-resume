import { spacingValues, $spacingValues } from "./spacing";

export const $transformScaleValues = "transformScaleValues";

export const transformScaleValues = {
    [$transformScaleValues]: {
        0: 0,
        50: 0.5,
        75: 0.75,
        90: 0.9,
        95: 0.95,
        100: 1,
        105: 1.05,
        110: 1.1,
        125: 1.25,
        150: 1.5,
    }
};

export const $transformRotateValues = "transformRotateValues";

export const transformRotateValues = {
    [$transformRotateValues]: {
        0: "0deg",
        1: "1deg",
        2: "2deg",
        3: "3deg",
        6: "6deg",
        12: "12deg",
        45: "45deg",
        90: "90deg",
        180: "180deg",
        "-180": "-180deg",
        "-90": "-90deg",
        "-45": "-45deg",
        "-12": "-12deg",
        "-6": "-6deg",
        "-3": "-3deg",
        "-2": "-2deg",
        "-1": "-1deg",
    }
};

export const $transformTranslateValues = "transformTranslateValues";

export const transformTranslateValues = {
    [$transformTranslateValues]: {
        ...spacingValues[$spacingValues],
        "1__2": "50%",
        "1__3": "33.333333%",
        "2__3": "66.666667%",
        "1__4": "25%",
        "2__4": "50%",
        "3__4": "75%",
        full: "100%",
    }
};

export const $transformSkewValues = "transformSkewValues";

export const transformSkewValues = {
    [$transformSkewValues]: {
        0: "0deg",
        1: "1deg",
        2: "2deg",
        3: "3deg",
        6: "6deg",
        12: "12deg"
    }
};