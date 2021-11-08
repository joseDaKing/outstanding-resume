import { EditText } from "../components/form";

import { Title } from "../components/typography";

import { useAppSelector } from "../store";

import { MdDragHandle } from "react-icons/md";

import { useReorderItem } from "../components/misc";

import { IconContainer } from "../components/primitives";

import { RequiredSliceGroupNames, requiredSliceGroups } from "../store/slices/orderableSections/required";

type SectionTitleContainer<T extends RequiredSliceGroupNames> = {
    section: T;
}

export function RequiredSectionTitleContainer<T extends RequiredSliceGroupNames>({ section }: SectionTitleContainer<T>) {

    const sectionName = useAppSelector(store => store[section].sectionName);

    const sliceGroup = requiredSliceGroups[section];

    const setSectionName = sliceGroup.slice.actions.setSectionName;

    const initialSectionName = sliceGroup.initialState.sectionName;

    const { isDragging, dragHandlerProps } = useReorderItem();

    return (
        <Title 
        gutter>
            <EditText
            value={sectionName}
            onChange={setSectionName}
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