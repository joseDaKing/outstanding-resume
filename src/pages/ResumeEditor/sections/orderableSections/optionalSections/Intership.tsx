import React from "react";

import { Box } from "../../../../../components/layout";

import { useReorderItem } from "../../../../../components/misc";

import { ItemsContainer, OptionalSectionTitleContainer } from "../../../../../containers";

import { WorkExperienceItem, workExperienceItemLabel } from "../shared";

export const Intership: React.FC = () => {

    const { containerProps } = useReorderItem();

    return (
        <Box
        {...containerProps}>
            <OptionalSectionTitleContainer
            section="internship"/>
            
            <ItemsContainer
            section="internship"
            buttonLabel="Lägg till praktikplats"
            accordionLabel={workExperienceItemLabel}
            Component={props => <WorkExperienceItem {...props}/>}/>
            
            <br/>
        </Box>
    ); 
}