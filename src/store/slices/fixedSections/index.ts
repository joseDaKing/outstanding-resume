import { contactDetails } from "./contactDetails";

import { professionalExperience } from "./professionalExperience";

export const fixedSliceGroups = {
    [contactDetails.slice.name]: contactDetails,
    [professionalExperience.slice.name]: professionalExperience
}

export type FixedSliceGroupNames = keyof typeof fixedSliceGroups;