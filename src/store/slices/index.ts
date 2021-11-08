import { contactDetails } from "./contactDetails";

import { professionalExperience } from "./professionalExperience";

import {
    course,
    extraActivity,
    hobbies,
    internship,
    language,
    reference,
    education,
    link,
    skill,
    workExperience,
} 
from "./orderableSections";

import { sectionOrder } from "./sectionOrder";

import { createReducersFromSliceGroups } from "../../utilities";

export const sliceGroups = {
    [contactDetails.slice.name]: contactDetails,
    [professionalExperience.slice.name]: professionalExperience,
    [course.slice.name]: course,
    [extraActivity.slice.name]: extraActivity,
    [hobbies.slice.name]: hobbies,
    [internship.slice.name]: internship,
    [language.slice.name]: language,
    [reference.slice.name]: reference,
    [education.slice.name]: education,
    [link.slice.name]: link,
    [skill.slice.name]: skill,
    [workExperience.slice.name]: workExperience,
    [sectionOrder.slice.name]: sectionOrder
}

export const reducers = createReducersFromSliceGroups(sliceGroups);