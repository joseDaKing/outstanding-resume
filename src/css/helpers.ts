import { ScaleValue } from "@stitches/react";

import { inputToRGB } from "@ctrl/tinycolor";

import { $colorRGBValues } from "./theme";



export function toPx<T extends number | string | ScaleValue<any>>(value: T): Exclude<T, number> {

    if (typeof value === "number") {

        return `${value}px` as any;
    }

    return value as any;
}



export function getValue(value: any, prefix: string) {

    if (isThemeVariable(value)) {

        return `$${prefix}${value}`;
    }

    return value;
}

export function getColorValue(value: string, alphaVariableName: string) {
    
    if (isThemeVariable(value)) {

        return `rgba($${$colorRGBValues}${value}, ${alphaVariableName})`;
    }

    const { r, g, b } = inputToRGB(value);

    return `rgba(${r},${g},${b},${alphaVariableName})`;
}



const isThemeVariableRegex = /^\$(.+)/;

function isThemeVariable(value: any): value is string {

    if (typeof value === "number") {

        value = `${value}`;
    }

    return typeof value === "string" && isThemeVariableRegex.test(value);
};



type BaseColorSet = Record<string, string>;

type ColorSet<T extends BaseColorSet> = {
    [K in keyof T]: string
};

type ColorValues<T extends BaseColorSet> = {
    colorValues: ColorSet<T>;
    colorRGBValues: ColorSet<T>;
};

export function createColors<T extends BaseColorSet>(initialColors: T): ColorValues<T> {

    const colorRGBValues = {} as ColorSet<T>;

    const colorValues = {} as ColorSet<T>;

    for (const key in initialColors) {

        const color: string = initialColors[key];

        const { r, g, b, ok } = inputToRGB(color);

        if (ok) {

            colorRGBValues[key] = `${r},${g},${b}`;
        }
        else {

            colorRGBValues[key] = "";
        }

        colorValues[key] = `rgb($${$colorRGBValues}$${key})`;
    }

    return {
        colorValues,
        [$colorRGBValues]: colorRGBValues
    };
}