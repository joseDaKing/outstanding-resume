import { createConfig } from "./css";

import { createStitches } from "@stitches/react";

import type { CSS as StitchesCSS } from "@stitches/react";

export const {
    styled,
    css,
    globalCss,
    keyframes,
    theme,
    createTheme,
    getCssText,
    config,
} = createStitches(createConfig());

export type CSS = StitchesCSS<typeof config>;