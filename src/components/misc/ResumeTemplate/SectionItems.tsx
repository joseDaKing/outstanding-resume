import React from "react";

import { View } from "@react-pdf/renderer";

import { orderableSliceGroups } from "../../../store/slices/orderableSections";

import { withId } from "../../../utilities";

import { ItemsProps, ItemsSliceGroupNames, useResumeTemplateContext } from "./shared";

type SectionItemType<T extends ItemsSliceGroupNames> = (typeof orderableSliceGroups)[T]["initialItem"];

function createSectionItems<T extends ItemsSliceGroupNames>(type: T): React.FC<ItemsProps<SectionItemType<T>>> {

    return ({ style, children }) => {

        const { state } = useResumeTemplateContext();

        const items = withId(state[type].items as any);

        return (
            <>
                {items.length &&
                <View 
                style={style}>
                    {items.map(item => (
                        <>
                            {children(item as any)}
                        </>
                    ))}
                </View>}
            </>
        );
    }
}

type SectionsItemsType = {
    [K in ItemsSliceGroupNames]: React.FC<ItemsProps<(typeof orderableSliceGroups)[K]["initialItem"]>>
}

export const SectionsItems: SectionsItemsType = {
    "work-experience": createSectionItems("work-experience"),
    internship: createSectionItems("internship"),
    "extra-activity": createSectionItems("extra-activity"),
    education: createSectionItems("education"),
    link: createSectionItems("link"),
    skill: createSectionItems("skill"),
    course: createSectionItems("course"),
    language: createSectionItems("language"),
    reference: createSectionItems("reference"),
}