import type { PropertyValue } from "@stitches/react";

const $$spaceReverseX = "$$spaceReverseX";

export const _spaceX = (value: PropertyValue<"margin">) => ({
    "& > * + *": {
        [$$spaceReverseX]: "0",
        marginRight: `calc(${value} * var(${$$spaceReverseX}))`,
        marginLeft: `calc(${value} * calc(1 - ${$$spaceReverseX}))`
    }
});

export const _spaceReverseX = (value: boolean) => ({
    "& > * + *": {
        [$$spaceReverseX]: value ? "1" : "0"
    }
});

const $$spaceReverseY = "$$spaceReverseY";

export const _spaceY = (value: PropertyValue<"margin">) => ({
    "& > * + *": {
        [$$spaceReverseY]: "0",
        marginBottom: `calc(${value} * var(${$$spaceReverseY}))`,
        marginTop: `calc(${value} * calc(1 - ${$$spaceReverseY}))`
    }
});

export const _spaceReverseY = (value: boolean) => ({
    "& > * + *": {
        [$$spaceReverseY]: value ? "1" : "0"
    }
});