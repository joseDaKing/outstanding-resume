import React from "react";

import { Stack, Box } from "../../components/layout";

import { Text, Title } from "../../components/typography";

import { TextField, EditText, Level, LevelValue } from "../../components/form";

import { List, Accordion, useReorderItem } from "../../components/misc";

import { 
    useAppDispatch, 
    useAppSelector, 
    skill,
    initialSkill,
    ISkillItem
}
from "../../store";

import { IID } from "../../types";

import { withId } from "../../utilis";

import { MdDragHandle } from "react-icons/md";

import { IconContainer } from "../../components/primitives";

const ListRenderer: React.FC<ISkillItem & IID> = ({ id, name, level }) => {

    const dispatch = useAppDispatch();

    const onNameChange = (name: string) => dispatch(skill.actions.change([id, {
        name
    }]));

    const onLevelChange = (level: LevelValue) => dispatch(skill.actions.change([id, {
        level
    }]));

    return (
        <Accordion.Item 
        id={id}
        title={name || "(Ej specificerat)"}>
            <Stack 
            axis="y"
            space="md">
                <Stack 
                axis="x"
                space="md">
                    <TextField
                    value={name}
                    label="Etikett"
                    onChange={onNameChange}/>
    
                    <Level
                    label="Nivå"
                    value={level}
                    onChange={onLevelChange}/>
                </Stack>
            </Stack>
        </Accordion.Item>
    );
}

export const Skills: React.FC = () => {

    const { items, sectionName } = useAppSelector(state => state.skill);

    const dispatch = useAppDispatch();

    const itemsWithId = withId(items);

    const onAddHandler = () => dispatch(skill.actions.add());

    const onRemoveHandler = (id: string) => dispatch(skill.actions.remove(id));

    const onChangeHandler = (ids: [fromId: string, toId: string]) => dispatch(skill.actions.reorder(ids));

    const onSectionNameChange = (sectionName: string) => dispatch(skill.actions.setSectionName(sectionName));    

    const { containerProps, dragHandlerProps, isDragging } = useReorderItem();

    return (
        <Box {...containerProps}>
            <Title>
                <EditText
                onChange={onSectionNameChange}
                resetable={initialSkill.sectionName}
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
    );
}