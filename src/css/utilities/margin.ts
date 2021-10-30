import type { PropertyValue } from "@stitches/react";

export const _marginX = (value: PropertyValue<"margin">) => ({
    marginLeft: value,
    marginRight: value
});

export const _marginY = (value: PropertyValue<"margin">) => ({ 
    marginTop: value,
    marginBottom: value
});