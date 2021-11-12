import React from "react";

import { items } from "./items";

import { ItemsSliceGroupNames, useResumeTemplateContext } from "./shared";

function createItemsContainer<T extends ItemsSliceGroupNames>(type: T): React.FC {

    return () => {

        const { state } = useResumeTemplateContext();

        const { sectionName } = state[type];

        const Items = items[type];

        const itemsContainerComponents = useResumeTemplateContext();

        const Component = itemsContainerComponents[type] as any;

        return (
            <Component 
            Items={Items}
            sectionName={sectionName}/>
        );
    }
}

type ItemsContainers = {
    [K in ItemsSliceGroupNames]: React.FC;
}

export const itemsContainers: ItemsContainers = {
    "work-experience": createItemsContainer("work-experience"),
    internship: createItemsContainer("internship"),
    "extra-activity": createItemsContainer("extra-activity"),
    education: createItemsContainer("education"),
    link: createItemsContainer("link"),
    skill: createItemsContainer("skill"),
    course: createItemsContainer("course"),
    language: createItemsContainer("language"),
    reference: createItemsContainer("reference")
};