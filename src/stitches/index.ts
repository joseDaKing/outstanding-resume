import { createStitches, CSS, CSSProperties } from "@stitches/react";

import { media, theme, themeMap, utils } from "./config";



const { config, ...stitches } = createStitches({
    media,
    theme,
    themeMap,
    utils
});

export type ThemedCSS = CSS<typeof config>;

export { stitches }