import { course } from "./course";

import { extraActivity } from "./extraActivity";

import { hobbies } from "./hobbies";

import { internship } from "./internship";

import { reference } from "./reference";

import { language } from "./language";

export const optionalSliceGroups = {
    [course.slice.name]: course,
    [extraActivity.slice.name]: extraActivity,
    [hobbies.slice.name]: hobbies,
    [internship.slice.name]: internship,
    [language.slice.name]: language,
    [reference.slice.name]: reference
}

export type OptionalSliceGroupNames = keyof typeof optionalSliceGroups;