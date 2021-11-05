import React from "react";

import { Reorder } from "../../../components/misc";

import { SectionNames } from "../../../store";

import { IID } from "../../../types";

import {
    WorkExperience,
    Education,
    Link,
    Skill
} 
from "./required";

import {
    Course,
    ExtraActivity,
    Hobbies,
    Internship,
    Reference
}
from "./optional";

import { 
    useAppDispatch, 
    useAppSelector, 
    sectionOrder
}
from "../../../store";

type Sections = {
    [K in SectionNames]: React.FC
}

const SectionComponents: Sections = {
    "work-experience": WorkExperience,
    education: Education,
    link: Link,
    skill: Skill,
    course: Course,
    reference: Reference,
    internship: Internship,
    hobbies: Hobbies,
    "extra-activity": ExtraActivity
}

const SortableSection: React.FC<IID<SectionNames>> = ({ id }) => {

    const Component = SectionComponents[id];

    return <Component/>;
}

export const OrderableSections: React.FC = () => {

    const order = useAppSelector(state => state.sectionOrder.items.map(id => ({ id })));

    const dispatch = useAppDispatch();

    const onChangeHandler = (ids: [fromId: string, toId: string]) => dispatch(sectionOrder.actions.reorder(ids));

    return (
        <Reorder
        value={order}
        onChange={onChangeHandler}
        render={({ id }) => <SortableSection key={id} id={id}/>}/>
    )
}