import React from "react";

import { Box } from "../../../../../components/layout";

import { useReorderItem } from "../../../../../components/misc";

import { ItemsContainer, OptionalSectionTitleContainer } from "../../../../../containers";

import { WorkExperienceItemComponent, workExperienceItemLabel } from "../shared"

export const ExtraActivity: React.FC = () => {

    const { containerProps } = useReorderItem();

    return (
        <Box
        {...containerProps}>
            <OptionalSectionTitleContainer
            section="extra-activity"/>
            
            <ItemsContainer
            section="extra-activity"
            buttonLabel="Lägg till aktivitet"
            accordionLabel={workExperienceItemLabel}
            Component={props => <WorkExperienceItemComponent {...props}/>}/>
        </Box>
    ); 
}