import React from "react";

import { Switch } from "../../../../../components/form";

import { Box } from "../../../../../components/layout";

import { useReorderItem } from "../../../../../components/misc";

import { ItemsContainer, RequiredSectionTitleContainer } from "../../../../../containers";

import { useAppDispatch, useAppSelector } from "../../../../../store";

import { skill } from "../../../../../store/slices/orderableSections/required/skill";

import { skillLabel, SkillItem } from "../shared";

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
            accordionLabel={skillLabel}
            Component={props => <SkillItem {...props}/>}/>

            <br/>
        </Box>
    ); 
}