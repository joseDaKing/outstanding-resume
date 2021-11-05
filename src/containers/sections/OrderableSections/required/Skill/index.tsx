import React from "react";

import { Box } from "../../../../../components/layout";

import { Text, Title } from "../../../../../components/typography";

import { EditText, Switch } from "../../../../../components/form";

import { List, useReorderItem } from "../../../../../components/misc";

import { 
    useAppDispatch, 
    useAppSelector, 
    skill,
    initialSkill
}
from "../../../../../store";

import { withId } from "../../../../../utilis";

import { MdDragHandle } from "react-icons/md";

import { IconContainer } from "../../../../../components/primitives";

import { ListRenderer } from "./ListRenderer";

export const Skill: React.FC = () => {

    const { items, sectionName, showLevel } = useAppSelector(state => state.skill);

    const dispatch = useAppDispatch();

    const itemsWithId = withId(items);

    const onAddHandler = () => dispatch(skill.actions.add());

    const onRemoveHandler = (id: string) => dispatch(skill.actions.remove(id));

    const onChangeHandler = (ids: [fromId: string, toId: string]) => dispatch(skill.actions.reorder(ids));

    const onSectionNameChangeHandler = (sectionName: string) => dispatch(skill.actions.setSectionName(sectionName));    

    const onSwitchChangeHandler = (shouldShowLevel: boolean) => dispatch(skill.actions.setShowLevel(shouldShowLevel));

    const { containerProps, dragHandlerProps, isDragging } = useReorderItem();

    return (
        <Box {...containerProps}>
            <Title>
                <EditText
                onChange={onSectionNameChangeHandler}
                resetable={initialSkill.sectionName}
                value={sectionName}
                left={() => (
                    <IconContainer {...dragHandlerProps} invisible={!isDragging} inline>
                        <MdDragHandle/>
                    </IconContainer>
                )}/> 
            </Title>

            <Text gutter>
                Du kan lägga till länkar till webbplatser som du vill att personalchefer ska se! Du kanske vill lägga till en länk till din portfölj, LinkedIn-profil eller personliga hemsida.
            </Text>

            {itemsWithId.length ?
                <Switch
                value={showLevel}
                onChange={onSwitchChangeHandler}
                label="Dölj erfarenhetsnivå"/>
            : null}

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