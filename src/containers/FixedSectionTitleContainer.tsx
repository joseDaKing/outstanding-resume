import React from "react";

import { EditText } from "../components/form";

import { Title } from "../components/typography";

import { useAppDispatch, useAppSelector } from "../store";

import { FixedSliceGroupNames, fixedSliceGroups } from "../store/slices/fixedSections";

type SectionTitleContainer<T extends FixedSliceGroupNames> = {
    section: T;
}

export function FixedSectionTitleContainer<T extends FixedSliceGroupNames>({ section }: SectionTitleContainer<T>) {

    const sectionName = useAppSelector(store => store[section].sectionName);

    const dispatch = useAppDispatch();

    const { slice, initialState } = fixedSliceGroups[section];

    const setSectionName = slice.actions.setSectionName;

    const initialSectionName = initialState.sectionName;

    const onChangeHandler = (value: string) => dispatch(setSectionName(value));

    return (
        <Title gutter>
            <EditText
            value={sectionName}
            onChange={onChangeHandler}
            resetable={initialSectionName}/>
        </Title>
    );
}