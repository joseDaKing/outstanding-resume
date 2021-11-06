import { education, initialEducation } from "../../../../../store";

import { ListRenderer } from "./ListRenderer";

import { createCRUDContainer } from "../../shared";

export const Education = createCRUDContainer({
    selector: state => state.education,
    actions: education.actions,
    ListRenderer: ListRenderer,
    initialSectionName: initialEducation.sectionName,
    descriptionText: "Om så är  relevant, lägg till dina senaste utbildningsresultat och datum här"
});