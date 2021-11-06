import { initialExtraActivity, extraActivity } from "../../../../store";

import { WorkExperienceListRenderer, createCRUDContainer } from "../shared";

export const ExtraActivity = createCRUDContainer({
    selector: state => state.extraActivity,
    actions: extraActivity.actions,
    ListRenderer: WorkExperienceListRenderer,
    initialSectionName: initialExtraActivity.sectionName
});