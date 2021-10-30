import { $spacingValues, spacingValues } from "./spacingValues";

export const $heightValues = "heightValues";

export const heightValues = {
    [$heightValues]: {
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
        full: "100%",
        screen: "100vh",
    }
};

export const $maxHeightValues = "maxHeightValues";

export const maxHeightValues = {
    [$maxHeightValues]: {
        0: "0px",
        px: "1px",
        0.5: "0.125rem",
        1: "0.25rem",
        1.5: "0.375rem",
        2: "0.5rem",
        2.5: "0.625rem",
        3: "0.75rem",
        3.5: "0.875rem",
        4: "1rem",
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
        full: "100%",
        screen: "100vh",
    }
};

export const $minHeightValues = "minHeightValues";

export const minHeightValues = {
    [$minHeightValues]: {
        0: "0px",
        full: "100%",
        min: "min-content",
        max: "max-content",
    }
};