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

export const slices = {
    [contactDetails.name]: contactDetails,
    [professionalExperience.name]: professionalExperience,
    [course.name]: course,
    [extraActivity.name]: extraActivity,
    [hobbies.name]: hobbies,
    [internship.name]: internship,
    [language.name]: language,
    [reference.name]: reference,
    [education.name]: education,
    [link.name]: link,
    [skill.name]: skill,
    [workExperience.name]: workExperience,
    [sectionOrder.name]: sectionOrder
}

export const reducers = {
    [contactDetails.name]: contactDetails.reducer,
    [professionalExperience.name]: professionalExperience.reducer,
    [course.name]: course.reducer,
    [extraActivity.name]: extraActivity.reducer,
    [hobbies.name]: hobbies.reducer,
    [internship.name]: internship.reducer,
    [language.name]: language.reducer,
    [reference.name]: reference.reducer,
    [education.name]: education.reducer,
    [link.name]: link.reducer,
    [skill.name]: skill.reducer,
    [workExperience.name]: workExperience.reducer,
    [sectionOrder.name]: sectionOrder.reducer
}

export { initialContactDetails } from "./contactDetails";

export { initialProfessionalExperience } from "./professionalExperience";

export { sectionOrder } from "./sectionOrder";

export {
    initialCourse,
    initialExtraActivity,
    initialHobbies,
    initialInternship,
    initialLanguage,
    initialReference,
    initialEducation,
    initialLink,
    initialSkill,
    initialWorkExperience,
} 
from "./orderableSections";

export type {
    ILanguageItem,
    IReferenceItem as IReference,
    IEducationItem,
    ILinkItem,
    ISkillItem,
    IWorkExperienceItem,
}
from "./orderableSections";