import type { PropertyValue } from "@stitches/react";

import type { AllSizes } from "../types";

export const _insetX = (value: PropertyValue<"right">) => ({
    left: value,
    right: value,
});

export const _insetY = (value: PropertyValue<"top">) => ({
    top: value,
    bottom: value
});

export const _inset = (inset: AllSizes) => ({
    ..._insetX(inset as any),
    ..._insetY(inset as any)
});