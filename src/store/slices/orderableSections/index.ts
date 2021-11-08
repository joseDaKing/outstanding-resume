import { requiredSliceGroups } from "./required";

import { optionalSliceGroups } from "./optional";

export const orderableSliceGroups = {
    ...requiredSliceGroups,
    ...optionalSliceGroups
}

export type OrderableSliceGroupNames = keyof typeof orderableSliceGroups;