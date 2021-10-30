import type { PropertyValue } from "@stitches/react";

import { getValue } from "../helpers";

import { $borderRadiusValues } from "../theme";

export const _borderTopRadius = (value: PropertyValue<"borderRadius">) => ({
    
    borderTopLeftRadius: getValue(value, $borderRadiusValues),
    borderTopRightRadius: getValue(value, $borderRadiusValues),
});

export const _borderBottomRadius = (value: PropertyValue<"borderRadius">) => ({
    borderBottomLeftRadius: getValue(value, $borderRadiusValues),
    borderBottomRightRadius: getValue(value, $borderRadiusValues),
});

export const _borderRightRadius = (value: PropertyValue<"borderRadius">) => ({
    borderTopRightRadius: getValue(value, $borderRadiusValues),
    borderBottomRightRadius: getValue(value, $borderRadiusValues),
});

export const _borderLeftRadius = (value: PropertyValue<"borderRadius">) => ({
    borderTopLeftRadius: getValue(value, $borderRadiusValues),
    borderBottomLeftRadius: getValue(value, $borderRadiusValues),
});