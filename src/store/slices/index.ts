import { fixedSliceGroups } from "./fixedSections";

import { orderableSliceGroups } from "./orderableSections";

import { createReducersFromSliceGroups } from "../../utilities";

import { sectionOrder } from "./sectionOrder";

export const allSliceGroups = {
    ...orderableSliceGroups,
    ...fixedSliceGroups,
    [sectionOrder.slice.name]: sectionOrder
}

export type AllSliceGroupNames = keyof typeof allSliceGroups;

export const reducers = createReducersFromSliceGroups(allSliceGroups);