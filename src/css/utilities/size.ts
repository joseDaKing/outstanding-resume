import type { AllSizes } from "../types";

export const _size = (size: AllSizes) => ({
    width: size,
    height: size
});

export const _maxSize = (size: AllSizes) => ({
    maxWidth: size,
    maxHeight: size
});

export const _minSize = (size: AllSizes) => ({
    minWidth: size,
    minHeight: size
});