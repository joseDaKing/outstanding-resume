import * as optionalSections from "./optionalSections";

import * as requiredSections from "./requiredSections";

import React from "react";

import { IID } from "../../../../types";

import { OrderableSliceGroupNames } from "../../../../store/slices/orderableSections";

const orderableSections = {
    ...optionalSections,
    ...requiredSections
};

type SectionMappingType = {
    [K in OrderableSliceGroupNames]: React.FC
}

const SectionMapping: SectionMappingType = {
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

    const SectionComponent = SectionMapping[id];

    return <SectionComponent/>;
}