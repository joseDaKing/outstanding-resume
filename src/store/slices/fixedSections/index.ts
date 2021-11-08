import { contactDetails } from "./contactDetails";

import { professionalExperience } from "./professionalExperience";

import { sectionOrder } from "./sectionOrder";

export const fixedSliceGroups = {
    [contactDetails.slice.name]: contactDetails,
    [professionalExperience.slice.name]: professionalExperience,
    [sectionOrder.slice.name]: sectionOrder
}

export type FixedSliceGroupNames = keyof typeof fixedSliceGroups;