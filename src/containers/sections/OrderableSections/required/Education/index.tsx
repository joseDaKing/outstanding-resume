import React from "react";

import { Box } from "../../../../../components/layout";

import { Text, Title } from "../../../../../components/typography";

import { EditText } from "../../../../../components/form";

import { List, useReorderItem } from "../../../../../components/misc";

import { withId } from "../../../../../utilis";

import { IconContainer } from "../../../../../components/primitives";

import { MdDragHandle } from "react-icons/md";

import { 
    useAppDispatch, 
    useAppSelector, 
    initialEducation,
    education
} 
from "../../../../../store";

import { ListRenderer } from "./ListRenderer";

export const Education: React.FC = () => {

    const { items, sectionName } = useAppSelector(state => state.education);

    const dispatch = useAppDispatch();

    const itemsWithIds = withId(items);

    const onAddHandler = () => dispatch(education.actions.add());

    const onRemoveHandler = (id: string) => dispatch(education.actions.remove(id));

    const onChangeHandler = (ids: [fromId: string, toId: string]) => dispatch(education.actions.reorder(ids));

    const onSectionNameChange = (sectionName: string) => dispatch(education.actions.setSectionName(sectionName));

    const { containerProps, dragHandlerProps, isDragging } = useReorderItem();

    return (
        <Box {...containerProps}>
            <Title>
                <EditText
                onChange={onSectionNameChange}
                resetable={initialEducation.sectionName}
                value={sectionName}
                left={() => (
                    <IconContainer {...dragHandlerProps} invisible={!isDragging} inline>
                        <MdDragHandle/>
                    </IconContainer>
                )}/>
            </Title>

            <Text>
                Om så är  relevant, lägg till dina senaste utbildningsresultat och datum här
            </Text>                        

            <List 
            value={itemsWithIds}
            label="Lägg till anställning"
            onAdd={onAddHandler}
            onDelete={onRemoveHandler}
            onChange={onChangeHandler}
            render={props => <ListRenderer {...props}/>}/>
        </Box>
    )
}