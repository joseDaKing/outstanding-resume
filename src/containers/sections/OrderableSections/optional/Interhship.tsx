import { initialInternship, internship } from "../../../../store";

import { WorkExperienceListRenderer, createCRUDContainer } from "../shared";

export const Internship = createCRUDContainer({
    selector: state => state.internship,
    actions: internship.actions,
    ListRenderer: WorkExperienceListRenderer,
    initialSectionName: initialInternship.sectionName
});