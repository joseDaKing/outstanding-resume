import React from "react";

import { IResumeTemplateProps } from "../../../components/misc";

import { SectionTitle, Text } from "../components";

export const Description: IResumeTemplateProps["Description"] = ({ 
    sectionName, 
    description 
}) => {
    return (
        <>
            <SectionTitle
            gutter="sm">
                {sectionName}
            </SectionTitle>

            <Text>
                {description}
            </Text>
        </>
    );
}