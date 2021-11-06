import { workExperience, initialWorkExperience } from "../../../../store";

import { WorkExperienceListRenderer, createCRUDContainer } from "../shared";

export const WorkExperience = createCRUDContainer({
    selector: state => state.workExperience,
    actions: workExperience.actions,
    ListRenderer: WorkExperienceListRenderer,
    initialSectionName: initialWorkExperience.sectionName,
    descriptionText: "Här lägger du till all relevant erfarenhet, inklusive datum, som du har från de senaste 10 åren. Den senaste tjänsten placerar du högst upp."
});