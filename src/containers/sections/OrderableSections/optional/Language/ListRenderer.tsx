import React from "react";

import { Stack } from "../../../../../components/layout";

import { TextField, Level, LevelValue } from "../../../../../components/form";

import { Accordion } from "../../../../../components/misc";

import { 
    useAppDispatch,  
    language as languageSlice,
    ILanguageItem
}
from "../../../../../store";

import { IID } from "../../../../../types";

export const ListRenderer: React.FC<ILanguageItem & IID> = ({ id, language, level }) => {

    const dispatch = useAppDispatch();

    const onNameChange = (language: string) => dispatch(languageSlice.actions.change([id, {
        language
    }]));

    const onLevelChange = (level: LevelValue) => dispatch(languageSlice.actions.change([id, {
        level
    }]));

    return (
        <Accordion.Item 
        id={id}
        title={language || "(Ej specificerat)"}>
            <Stack 
            axis="y"
            space="md">
                <Stack 
                axis="x"
                space="md">
                    <TextField
                    value={language}
                    label="Språk"
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