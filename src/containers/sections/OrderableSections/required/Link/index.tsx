import React from "react";

import { Box } from "../../../../../components/layout";

import { Text, Title } from "../../../../../components/typography";

import { EditText } from "../../../../../components/form";

import { List, useReorderItem } from "../../../../../components/misc";

import { 
    useAppDispatch, 
    useAppSelector, 
    link,
    initialLink
}
from "../../../../../store";

import { withId } from "../../../../../utilis";

import { MdDragHandle } from "react-icons/md";

import { IconContainer } from "../../../../../components/primitives";

import { ListRenderer } from "./ListRenderer";

export const Link: React.FC = () => {

    const { items, sectionName } = useAppSelector(state => state.link);

    const dispatch = useAppDispatch();

    const itemsWithId = withId(items);

    const onAddHandler = () => dispatch(link.actions.add());

    const onRemoveHandler = (id: string) => dispatch(link.actions.remove(id));

    const onChangeHandler = (ids: [fromId: string, toId: string]) => dispatch(link.actions.reorder(ids));

    const onSectionNameChange = (sectionName: string) => dispatch(link.actions.setSectionName(sectionName));    

    const { containerProps, dragHandlerProps, isDragging } = useReorderItem();

    return (
        <Box {...containerProps}>
            <Title>
                <EditText
                onChange={onSectionNameChange}
                resetable={initialLink.sectionName}
                value={sectionName}
                left={() => (
                    <IconContainer {...dragHandlerProps} invisible={!isDragging} inline>
                        <MdDragHandle/>
                    </IconContainer>
                )}/> 
            </Title>

            <Text>
                Du kan lägga till länkar till webbplatser som du vill att personalchefer ska se! Du kanske vill lägga till en länk till din portfölj, LinkedIn-profil eller personliga hemsida.
            </Text>                        

            <List 
            value={itemsWithId}
            label="Lägg till anställning"
            onAdd={onAddHandler}
            onDelete={onRemoveHandler}
            onChange={onChangeHandler}
            render={props => <ListRenderer {...props}/>}/>
        </Box>
    )
}