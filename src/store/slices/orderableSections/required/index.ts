import { education } from "./education";

import { link } from "./link";

import { skill } from "./skill";

import { workExperience } from "./workExperience";

export const requiredSliceGroups = {
    [education.slice.name]: education,
    [link.slice.name]: link,
    [skill.slice.name]: skill,
    [workExperience.slice.name]: workExperience,
}

export type RequiredSliceGroupNames = keyof typeof requiredSliceGroups;