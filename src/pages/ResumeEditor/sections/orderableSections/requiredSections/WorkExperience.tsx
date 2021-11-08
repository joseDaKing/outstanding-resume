import React from "react";

import { Box } from "../../../../../components/layout";

import { useReorderItem } from "../../../../../components/misc";

import { ItemsContainer, RequiredSectionTitleContainer } from "../../../../../containers";

import { WorkExperienceItemComponent, workExperienceItemLabel } from "../shared";

export const WorkExperience: React.FC = () => {

    const { containerProps } = useReorderItem();

    return (
        <Box
        {...containerProps}>
            <RequiredSectionTitleContainer
            section="work-experience"/>
            
            <ItemsContainer
            section="work-experience"
            buttonLabel="Lägg till anställning"
            accordionLabel={workExperienceItemLabel}
            Component={props => <WorkExperienceItemComponent {...props}/>}/>
        </Box>
    ); 
}