import React, { memo } from "react";

import { ItemsSliceGroupNames, useResumeTemplateContext } from "./shared";

import { SectionsItems } from "./SectionItems";

function createSection<T extends ItemsSliceGroupNames>(type: T): React.FC {

    return () => {

        const { state } = useResumeTemplateContext();

        const { sectionName } = state[type];

        const SectionItems = SectionsItems[type];

        const SectionWrappers = useResumeTemplateContext();

        const SectionWrapper = SectionWrappers[type] as any;

        return (
            <SectionWrapper
            Items={SectionItems}
            sectionName={sectionName}/>
        );
    };
}

type SectionsType = {
    [K in ItemsSliceGroupNames]: React.FC;
}

export const Sections: SectionsType = {
    "work-experience": createSection("work-experience"),
    internship: createSection("internship"),
    "extra-activity": createSection("extra-activity"),
    education: createSection("education"),
    link: createSection("link"),
    skill: createSection("skill"),
    course: createSection("course"),
    language: createSection("language"),
    reference: createSection("reference")
};