import React from "react";

import { Box } from "../../../../../components/layout";

import { Text, Title } from "../../../../../components/typography";

import { EditText } from "../../../../../components/form";

import { List, useReorderItem } from "../../../../../components/misc";

import { 
    useAppDispatch, 
    useAppSelector, 
    language,
    initialLanguage,
    sectionOrder
}
from "../../../../../store";

import { withId } from "../../../../../utilis";

import { MdDragHandle, MdDelete } from "react-icons/md";

import { IconContainer } from "../../../../../components/primitives";

import { ListRenderer } from "./ListRenderer";

export const Language: React.FC = () => {

    const { items, sectionName } = useAppSelector(state => state.language);

    const dispatch = useAppDispatch();

    const itemsWithId = withId(items);

    const onAddHandler = () => dispatch(language.actions.add());

    const onRemoveHandler = (id: string) => dispatch(language.actions.remove(id));

    const onChangeHandler = (ids: [fromId: string, toId: string]) => dispatch(language.actions.reorder(ids));

    const onSectionNameChangeHandler = (sectionName: string) => dispatch(language.actions.setSectionName(sectionName));    

    const onDeleteHandler = () => {
        
        dispatch(sectionOrder.actions.remove("language"));
        
        dispatch(language.actions.reset());
    }

    const { containerProps, dragHandlerProps, isDragging } = useReorderItem();

    return (
        <Box {...containerProps}>
            <Title>
                <EditText
                onChange={onSectionNameChangeHandler}
                resetable={initialLanguage.sectionName}
                value={sectionName}
                left={() => (
                    <>
                        <IconContainer {...dragHandlerProps} invisible={!isDragging} inline>
                            <MdDragHandle/>
                        </IconContainer>

                        <IconContainer onClick={onDeleteHandler}>
                            <MdDelete/>
                        </IconContainer>
                    </>
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
    );
}