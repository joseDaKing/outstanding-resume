import React from "react";

import { Level, Switch, TextField } from "../../../../../components/form";

import { Box, Stack } from "../../../../../components/layout";

import { useReorderItem } from "../../../../../components/misc";

import { ItemsContainer, RequiredSectionTitleContainer } from "../../../../../containers";

import { useAppDispatch, useAppSelector } from "../../../../../store";

import { skill } from "../../../../../store/slices/orderableSections/required/skill";

export const Skill: React.FC = () => {

    const { containerProps } = useReorderItem();

    const shouldShowLevel = useAppSelector(store => store.skill.showLevel);

    const hasItems = useAppSelector(store => Object.values(store.skill.items).length !== 0);

    const dispatch = useAppDispatch();

    const onChangeHandler = (value: boolean) => dispatch(skill.slice.actions.setShowLevel(value));

    return (
        <Box
        {...containerProps}>
            <RequiredSectionTitleContainer
            section="skill"/>
            
            {hasItems && 
            <Switch
            value={shouldShowLevel}
            onChange={onChangeHandler}
            label="Dölj erfarenhetsnivå"/>}

            <ItemsContainer
            section="skill"
            buttonLabel="Lägg till kompetens"
            accordionLabel={({ name }) => name}
            Component={({ bind }) => (
                <Stack
                space="sm"
                axis="x">
                    <TextField
                    {...bind("name")}
                    label="Färdight"/>

                    <Level
                    {...bind("level")}
                    label="Nivå"/>
                </Stack>
            )}/>
        </Box>
    ); 
}