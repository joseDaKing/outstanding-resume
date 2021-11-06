import { initialLanguage, language } from "../../../../../store";

import { createCRUDContainer } from "../../shared";

import { ListRenderer } from "./ListRenderer";

export const Language = createCRUDContainer({
    selector: state => state.language,
    actions: language.actions,
    ListRenderer: ListRenderer,
    initialSectionName: initialLanguage.sectionName
});