import { fixedSliceGroups } from "./fixedSections";

import { orderableSliceGroups } from "./orderableSections";

import { createReducersFromSliceGroups } from "../../utilities";

export const allSliceGroups = {
    ...orderableSliceGroups,
    ...fixedSliceGroups
}

export type AllSliceGroupNames = keyof typeof allSliceGroups;

export const reducers = createReducersFromSliceGroups(allSliceGroups);