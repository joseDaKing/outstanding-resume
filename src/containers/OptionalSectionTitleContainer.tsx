import { EditText } from "../components/form";

import { Title } from "../components/typography";

import { useAppDispatch, useAppSelector } from "../store";

import { MdDelete, MdDragHandle } from "react-icons/md";

import { useReorderItem } from "../components/misc";

import { IconContainer } from "../components/primitives";

import { OptionalSliceGroupNames, optionalSliceGroups } from "../store/slices/orderableSections/optional";

import { allSliceGroups } from "../store/slices";

type SectionTitleContainer<T extends OptionalSliceGroupNames> = {
    section: T;
}

const sectionOrderActions = allSliceGroups["section-order"].slice.actions;

export function OptionalSectionTitleContainer<T extends OptionalSliceGroupNames>({ section }: SectionTitleContainer<T>) {

    const sectionName = useAppSelector(store => store[section].sectionName);

    const sliceGroup = optionalSliceGroups[section];

    const { slice, initialState } = sliceGroup;

    const { setSectionName, reset } = slice.actions;

    const initialSectionName = initialState.sectionName;

    const { isDragging, dragHandlerProps } = useReorderItem();

    const dispatch = useAppDispatch();

    const onDeleteHandler = () => {

        dispatch(reset());

        dispatch(sectionOrderActions.remove(slice.name));
    }

    return (
        <Title 
        gutter>
            <EditText
            value={sectionName}
            onChange={setSectionName}
            resetable={initialSectionName}
            Right={() => (
                <IconContainer
                onClick={onDeleteHandler}
                invisible
                hover
                css={{
                    cursor: "pointer"
                }}>
                    <MdDelete/>
                </IconContainer>
            )}
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