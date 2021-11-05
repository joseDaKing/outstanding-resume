import React from "react";

import { Box } from "../../../../../components/layout";

import { Text, Title } from "../../../../../components/typography";

import { EditText } from "../../../../../components/form";

import { List, useReorderItem } from "../../../../../components/misc";

import { useAppDispatch, useAppSelector, workExperience, initialWorkExperience } from "../../../../../store";

import { withId } from "../../../../../utilis";

import { MdDragHandle } from "react-icons/md";

import { IconContainer } from "../../../../../components/primitives";

import { ListRenderer } from "./ListRenderer";

export const WorkExperience: React.FC = () => {

    const { items, sectionName } = useAppSelector(state => state.workExperience);

    const dispatch = useAppDispatch();

    const itemsWithIds = withId(items);

    const onAddHandler = () => dispatch(workExperience.actions.add());

    const onRemoveHandler = (id: string) => dispatch(workExperience.actions.remove(id));

    const onChangeHandler = (ids: [fromId: string, toId: string]) => dispatch(workExperience.actions.reorder(ids));

    const onSectionNameChange = (sectionName: string) => dispatch(workExperience.actions.setSectionName(sectionName));

    const { containerProps, dragHandlerProps, isDragging } = useReorderItem();
    
    return (
        <Box 
        {...containerProps}>
            <Title >
                <EditText
                onChange={onSectionNameChange}
                resetable={initialWorkExperience.sectionName}
                value={sectionName}
                left={() => (
                    <IconContainer {...dragHandlerProps} invisible={!isDragging} inline>
                        <MdDragHandle/>
                    </IconContainer>
                )}/>
            </Title>

            <Text>
                Här lägger du till all relevant erfarenhet, inklusive datum, som du har från de senaste 10 åren. Den senaste tjänsten placerar du högst upp.
            </Text>                        

            <List 
            label="Lägg till anställning"
            value={itemsWithIds}
            onAdd={onAddHandler}
            onDelete={(onRemoveHandler)}
            onChange={onChangeHandler}
            render={props => <ListRenderer {...props}/>}/> 
        </Box>  
    )
}