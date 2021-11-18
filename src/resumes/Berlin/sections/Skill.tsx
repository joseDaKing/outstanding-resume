import React from "react";

import { IResumeTemplateProps } from "../../../components/misc";

import { SectionTitle, SkillItem } from "../components";

export const Skill: IResumeTemplateProps["Skill"] = ({ 
    sectionName, 
    Items 
}) => {
    return (
        <>
            <SectionTitle
            gutter="sm">
                {sectionName}
            </SectionTitle>

            <Items>
                {({ id, ...props }) => (
                    <SkillItem 
                    key={id}
                    {...props}/>
                )}
            </Items>
        </>
    );
}