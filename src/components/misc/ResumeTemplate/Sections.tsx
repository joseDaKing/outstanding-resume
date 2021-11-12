import React, { useContext } from "react";

import { View } from "@react-pdf/renderer";

import { SectionsItems } from "./SectionItems";

import { ItemsSliceGroupNames, ResumeSectionStyleContext, useResumeTemplateContext } from "./shared";

function createSection<T extends ItemsSliceGroupNames>(type: T): React.FC {

    return () => {

        const { state } = useResumeTemplateContext();

        const { sectionName, items } = state[type];

        const SectionItems = SectionsItems[type];

        const SectionWrappers = useResumeTemplateContext();

        const SectionWrapper = SectionWrappers[type] as any;

        const style = useContext(ResumeSectionStyleContext);
        
        return (
            <View 
            style={style}>
                <SectionWrapper
                Items={SectionItems}
                sectionName={sectionName}/>
            </View>
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