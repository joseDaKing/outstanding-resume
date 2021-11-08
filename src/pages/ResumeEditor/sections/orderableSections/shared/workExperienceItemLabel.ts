import { workExperience } from "../../../../../store/slices/orderableSections/required/workExperience"

export const workExperienceItemLabel = ({ jobTitle, employer }: typeof workExperience.initialItem): string => {

    if (jobTitle && employer) {

        return `${jobTitle} på ${employer}`;
    }
    else if (jobTitle) {

        return jobTitle;
    }
    else if (employer) {

        return employer;
    }
    else {

        return "(Ej specificerat)";
    }
}