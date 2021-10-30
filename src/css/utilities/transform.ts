import { getValue } from "../helpers";

import type { AllLengthUnits, Deg, Negative } from "../types";

import type { ScaleValue } from "@stitches/react";

import { $transformRotateValues, $transformScaleValues, $transformTranslateValues } from "../theme";

const transformOrderVariableName = "$$transformOrder";

const scaleXVariableName = "$$scaleX";

const scaleYVariableName = "$$scaleY";

const rotateVariableName = "$$rotate";

const translateXVariableName = "$$translateX";

const translateYVariableName = "$$translateY";

const skewXVariableName = "$$skewX";

const skewYVariableName = "$$skewY";

const defaultTransformVariables = {
    [transformOrderVariableName]: `translateX(${translateXVariableName}) translateY(${translateYVariableName}) rotate(${rotateVariableName}) scaleX(${scaleXVariableName}) scaleY(${scaleYVariableName})`,

    [scaleXVariableName]: "1",

    [scaleYVariableName]: "1",

    [rotateVariableName]: "0deg",

    [translateXVariableName]: "0px",

    [translateYVariableName]: "0px",

    [skewXVariableName]: "0deg",

    [skewYVariableName]: "0deg",
};

export const _transform = (value: boolean) => {

    if (value) {

        return {
            ...defaultTransformVariables,
            transform: `${transformOrderVariableName}`
        }
    }

    return {
        transform: "none"
    };
}

type TransformOrder = Array<"rotate" | "translate" | "skew">;

export const _transformOrder = (types: TransformOrder) => {
    
    const transformOrderValue = types.map(type => {

        if (type === "skew") {
            
            return `skewX(${skewXVariableName}) skewY(${skewYVariableName})`;
        }
        else if (type === "rotate") {

            return `rotate(${rotateVariableName})`
        }

        return `translateX(${translateXVariableName}) translateY(${translateYVariableName})`;
    })
    .join(" ");

    return {
        [transformOrderVariableName]: `${transformOrderValue} scaleX(${scaleXVariableName}) scaleY(${scaleYVariableName})`
    };
}

export const _transformScaleX = (value: number | ScaleValue<typeof $transformScaleValues>) => ({
    [scaleXVariableName]: getValue(value, $transformScaleValues)
});

export const _transformScaleY = (value: number | ScaleValue<typeof $transformScaleValues>) => ({
    [scaleYVariableName]: getValue(value, $transformScaleValues)
});

export const _transformScale = (value: number | ScaleValue<typeof $transformScaleValues>) => ({
    ..._transformScaleX(value),
    ..._transformScaleY(value)
});

export const _transformRotate = (value: Negative<Deg> | ScaleValue<typeof $transformRotateValues>) => ({
    [rotateVariableName]: getValue(value, $transformRotateValues)
});

export const _transformTranslateX = (value: number | Negative<AllLengthUnits> | ScaleValue<typeof $transformTranslateValues>) => ({
    [translateXVariableName]: getValue(value, $transformTranslateValues)
});

export const _transformTranslateY = (value: number | Negative<AllLengthUnits> | ScaleValue<typeof $transformTranslateValues>) => ({
    [translateYVariableName]: getValue(value, $transformTranslateValues)
});

export const _transformSkewX = (value: number | Negative<Deg> | ScaleValue<typeof $transformTranslateValues>) => ({
    [skewXVariableName]: getValue(value, $transformTranslateValues)
});

export const _transformSkewY = (value: Negative<Deg> | ScaleValue<typeof $transformTranslateValues>) => ({
    [skewYVariableName]: getValue(value, $transformTranslateValues)
});