import React from "react";

import { EditText } from "../components/form";

import { Title } from "../components/typography";

import { useAppDispatch, useAppSelector } from "../store";

import { MdDragHandle } from "react-icons/md";

import { useReorderItem } from "../components/misc";

import { IconContainer } from "../components/primitives";

import { RequiredSliceGroupNames, requiredSliceGroups } from "../store/slices/orderableSections/required";

type SectionTitleContainer<T extends RequiredSliceGroupNames> = {
    section: T;
}

export function RequiredSectionTitleContainer<T extends RequiredSliceGroupNames>({ section }: SectionTitleContainer<T>) {

    const sectionName = useAppSelector(store => store[section].sectionName);

    const dispatch = useAppDispatch();

    const sliceGroup = requiredSliceGroups[section];

    const setSectionName = sliceGroup.slice.actions.setSectionName;

    const initialSectionName = sliceGroup.initialState.sectionName;

    const { isDragging, dragHandlerProps } = useReorderItem();

    const onChangeHandler = (value: string) => dispatch(setSectionName(value));

    return (
        <Title>
            <EditText
            value={sectionName}
            onChange={onChangeHandler}
            resetable={initialSectionName}
            Left={() => (
                <IconContainer
                {...dragHandlerProps}
                invisible
                css={{
                    cursor: isDragging ? "grabbing" : "grab",
                }}>
                    <MdDragHandle/>
                </IconContainer>
            )}/>
        </Title>
    );
}