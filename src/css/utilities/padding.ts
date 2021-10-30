import type { PropertyValue } from "@stitches/react";

export const _paddingX = (value: PropertyValue<"padding">) => ({ 
    paddingLeft: value,
    paddingRight: value
});

export const _paddingY = (value: PropertyValue<"padding">) => ({ 
    paddingTop: value,
    paddingBottom: value
});