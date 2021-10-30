import * as utils from "./utilities";

import { theme } from "./theme";

import { media } from "./media";

import { themeMap } from "./themeMap";

import { createColors } from "./helpers"; 

export const defaultConfig = {
    theme,
    media,
    utils,
    themeMap
} as const;

export function createConfig(): typeof defaultConfig {

    let config = {
        ...defaultConfig
    };

    if (config.theme.colorValues) {

        //@ts-ignore
        config.theme = {
            ...config.theme,
            ...createColors(config.theme.colorValues)
        };
    }

    return config;
};