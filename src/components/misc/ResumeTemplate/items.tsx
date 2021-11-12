import React from "react";

import { View } from "@react-pdf/renderer";

import { orderableSliceGroups } from "../../../store/slices/orderableSections";

import { withId } from "../../../utilities";

import { ItemsProps, ItemsSliceGroupNames, useResumeTemplateContext } from "./shared";

type InitialItem<T extends ItemsSliceGroupNames> = (typeof orderableSliceGroups)[T]["initialItem"];

function createItems<T extends ItemsSliceGroupNames>(type: T): React.FC<ItemsProps<InitialItem<T>>> {

    return ({ style, children }) => {

        const { state } = useResumeTemplateContext();

        const items = withId(state[type].items as any);

        return (
            <View 
            style={style}>
                {items.map(item => (
                    <>
                        {children(item as any)}
                    </>
                ))}
            </View>
        );
    }
}

type Items = {
    [K in ItemsSliceGroupNames]: React.FC<ItemsProps<(typeof orderableSliceGroups)[K]["initialItem"]>>
}

export const items: Items = {
    "work-experience": createItems("work-experience"),
    internship: createItems("internship"),
    "extra-activity": createItems("extra-activity"),
    education: createItems("education"),
    link: createItems("link"),
    skill: createItems("skill"),
    course: createItems("course"),
    language: createItems("language"),
    reference: createItems("reference"),
}