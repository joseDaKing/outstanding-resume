import * as optionalSections from "./optionalSections";

import * as requiredSections from "./requiredSections";

import React from "react";

import { IID } from "../../../../types";

import { OrderableSliceGroupNames } from "../../../../store/slices/orderableSections";
import { useReorderItem } from "../../../../components/misc";

const orderableSections = {
    ...optionalSections,
    ...requiredSections
};

type SectionMapping = {
    [K in OrderableSliceGroupNames]: React.FC
}

const sectionMapping: SectionMapping = {
    education: orderableSections.Education,
    link: orderableSections.Link,
    skill: orderableSections.Skill,
    "work-experience": orderableSections.WorkExperience,
    course: orderableSections.Course,
    "extra-activity": orderableSections.ExtraActivity,
    hobbies: orderableSections.Hobbies,
    internship: orderableSections.Intership,
    language: orderableSections.Language,
    reference: orderableSections.Reference,
}

export const OrderableSectionItem: React.FC<IID<OrderableSliceGroupNames>> = ({ id }) => {

    const SectionComponent = sectionMapping[id];

    console.log(!!SectionComponent)

    const { containerProps, dragHandlerProps } = useReorderItem();

    return (
        <div
        {...dragHandlerProps}
        {...containerProps}>

        </div>
    );
}