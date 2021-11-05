import React from "react";

import { Stack } from "../../../../../components/layout";

import { TextField, Level, LevelValue } from "../../../../../components/form";

import { Accordion } from "../../../../../components/misc";

import { 
    useAppDispatch,  
    skill,
    ISkillItem
}
from "../../../../../store";

import { IID } from "../../../../../types";

export const ListRenderer: React.FC<ISkillItem & IID> = ({ id, name, level }) => {

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