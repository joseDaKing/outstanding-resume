import React from "react";

import { Box } from "../../../../../components/layout";

import { useReorderItem } from "../../../../../components/misc";

import { ItemsContainer, OptionalSectionTitleContainer } from "../../../../../containers";

import { skillLabel, SkillItem } from "../shared";

export const Language: React.FC = () => {

    const { containerProps } = useReorderItem();

    return (
        <Box
        {...containerProps}>
            <OptionalSectionTitleContainer
            section="language"/>
            
            <ItemsContainer
            section="language"
            buttonLabel="Lägg till språk"
            accordionLabel={skillLabel}
            Component={props => <SkillItem {...props}/>}/>

            <br/>
        </Box>
    ); 
}