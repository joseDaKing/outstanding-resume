import { $spacingValues, spacingValues } from "./spacingValues";

export const $paddingValues = "paddingValues";

export const paddingValues = {
    [$paddingValues]: {
        ...spacingValues[$spacingValues]
    }
};