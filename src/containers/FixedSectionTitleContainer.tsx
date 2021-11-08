import { EditText } from "../components/form";

import { Title } from "../components/typography";

import { useAppSelector } from "../store";

import { FixedSliceGroupNames, fixedSliceGroups } from "../store/slices/fixedSections";

type SectionTitleContainer<T extends FixedSliceGroupNames> = {
    section: T;
}

export function FixedSectionTitleContainer<T extends FixedSliceGroupNames>({ section }: SectionTitleContainer<T>) {

    const sectionName = useAppSelector(store => store[section].sectionName);

    const sliceGroup = fixedSliceGroups[section];

    const setSectionName = sliceGroup.slice.actions.setSectionName;

    const initialSectionName = sliceGroup.initialState.sectionName;

    return (
        <Title gutter>
            <EditText
            value={sectionName}
            onChange={setSectionName}
            resetable={initialSectionName}/>
        </Title>
    );
}