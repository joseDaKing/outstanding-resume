import React from "react";

import { Box } from "../../../../components/layout";

import { Text, Title } from "../../../../components/typography";

import { EditText } from "../../../../components/form";

import { List, useReorderItem } from "../../../../components/misc";

import { withId } from "../../../../utilis";

import { MdDragHandle, MdDelete } from "react-icons/md";

import { IconContainer } from "../../../../components/primitives";

import { 
    RemovableSectionName,
    RootState, 
    sectionOrder,
    useAppDispatch, 
    useAppSelector
}
from "../../../../store";

import { IID, Section } from "../../../../types";

import { PayloadAction } from "@reduxjs/toolkit";

type Selector<T> = (state: RootState) => Section<T>;

interface ICRUDActions {
    add: () => PayloadAction;
    remove: (id: string) => PayloadAction<string>;
    reorder: (ids: [fromId: string, toId: string]) => PayloadAction<[fromId: string, toId: string]>;
    setSectionName: (sectionName: string) => PayloadAction<string>;
    reset?: () => PayloadAction;
}

interface IOptions<T> {
    isRemovable?: RemovableSectionName;
    actions: ICRUDActions;
    initialSectionName: string;
    selector: Selector<T>;
    ListRenderer: React.FC<T & IID>
    descriptionText?: string;
}

export function createCRUDContainer<T extends object>({ 
    actions, 
    selector, 
    ListRenderer,
    descriptionText,
    initialSectionName,
    isRemovable
}: IOptions<T>): React.FC {

    return () => {
        
        const { items, sectionName } = useAppSelector(selector);

        const itemsWithIds = withId(items);

        const { containerProps, dragHandlerProps, isDragging } = useReorderItem();
        
        const dispatch = useAppDispatch();

        const onAddHandler = () => {
            
            dispatch(actions.add());
        };

        const onRemoveHandler = (id: string) => {

            dispatch(actions.remove(id));
        };

        const onChangeHandler = (ids: [fromId: string, toId: string]) => {
        
            dispatch(actions.reorder(ids));
        };

        const onSectionNameChange = (sectionName: string) => {
            
            dispatch(actions.setSectionName(sectionName));
        };

        const onDeleteHandler = () => {

            if (actions.reset && isRemovable) {

                dispatch(sectionOrder.actions.remove(isRemovable));

                dispatch(actions.reset());
            }
        }

        return (
            <Box 
            {...containerProps}>
                <Title >
                    <EditText
                    onChange={onSectionNameChange}
                    resetable={initialSectionName}
                    value={sectionName}
                    left={() => (
                        <>
                            <IconContainer
                            inline
                            {...dragHandlerProps}
                            invisible={!isDragging}>
                                <MdDragHandle/>
                            </IconContainer>

                            <IconContainer
                            onClick={onDeleteHandler}>
                                <MdDelete/>
                            </IconContainer>
                        </>
                    )}/>
                </Title>
                
                {descriptionText &&
                <Text>
                    {descriptionText}
                </Text>}

                <List 
                label="Lägg till anställning"
                value={itemsWithIds}
                onAdd={onAddHandler}
                onDelete={onRemoveHandler}
                onChange={onChangeHandler}
                render={props => <ListRenderer {...props}/>}/> 
            </Box>  
        )
    }
}