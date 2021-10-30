import { $spacingValues, spacingValues } from "./spacingValues";

export const $widthValues = "widthValues";

export const widthValues = {
    [$widthValues]: {
        ...spacingValues[$spacingValues],
        auto: "auto",
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
        screen: "100vw",
        min: "min-content",
        max: "max-content",
    }
};

export const $maxWidthValues = "maxWidthValues";

export const maxWidthValues = {
    [$maxWidthValues]: {
        0: "0rem",
        none: "none",
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
        full: "100%",
        min: "min-content",
        max: "max-content",
        prose: "65ch",
        "screen-sm": "640px",
        "screen-md": "768px",
        "screen-lg": "1024px",
        "screen-xl": "1280px",
        "screen-2xl": "1536px",
    }
};

export const $minWidthValues = "minWidthValues";

export const minWidthValues = {
    [$minWidthValues]: {
        0: "0px",
        full: "100%",
        min: "min-content",
        max: "max-content",
    }
};