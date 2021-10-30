import type { CssColors } from "./cssColors";

import type { ScaleValue } from "@stitches/react";
import { $colorValues, $heightValues, $opacityValues, $spacingValues, $widthValues } from "./theme";

type Unit<T extends string> = `${number}${T}`; 

export type CM = Unit<"cm">;

export type MM = Unit<"mm">;

export type IN = Unit<"in">;

export type PX = Unit<"px">;

export type PT = Unit<"pt">;

export type PC = Unit<"pc">;

export type FixedLengthUnits = CM | MM | IN | PX | PT | PC;

export type Em = Unit<"Em">;

export type Rem = Unit<"Rem">;

export type Vw = Unit<"vw">;

export type Vh = Unit<"vh">;

export type Vmin = Unit<"Vmvn">;

export type Vmax = Unit<"Vmvx">;

export type Percentage = Unit<"%">;

export type RelativeLengthUnits = Em | Rem | Vw | Vh | Vmin | Vmax | Percentage;

export type AllLengthUnits = FixedLengthUnits | RelativeLengthUnits;

export type AllSizes = AllLengthUnits | ScaleValue<typeof $spacingValues> | ScaleValue<typeof $heightValues> | ScaleValue<typeof $widthValues>;

export type Negative<T extends string> = `-${T}` | T;

export type Deg = Unit<"deg">;

export type Turn = Unit<"turn">;

export type Rad = Unit<"rad">;

export type RotationUnit = Deg | Turn | Rad;

export type Placement = (
    "center"
    | "top"
    | "top-right"
    | "right"
    | "bottom-right"
    | "bottom"
    | "bottom-left"
    | "left"
    | "top-left"
);

export type Rgb = `rgb(${number}, ${number}, ${number})`;

export type Rgba = `rgba(${number}, ${number}, ${number}, ${number})`;

export type Hsl = `hsl(${number}, ${number}%, ${number}%)`;

export type Hsla = `hsl(${number}, ${number}%, ${number}%, ${number})`;

export type Hex = `#${number}`;

export type AllColors = Rgb | Rgba | Hsl | Hsla | Hex | Lowercase<CssColors> | ScaleValue<typeof $colorValues>;

export type AllOpacities = number | ScaleValue<typeof $opacityValues>;