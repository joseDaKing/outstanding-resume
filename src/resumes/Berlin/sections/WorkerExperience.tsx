import React from "react";

import { IResumeTemplateProps } from "../../../components/misc";

import { SectionTitle, Seperator, Item } from "../components";

export const WorkExperience: IResumeTemplateProps["WorkExperience"] = ({ 
    sectionName, 
    Items 
}) => {
    return (
        <>
            <Seperator
            axis="y"
            size="md"/>

            <SectionTitle
            gutter="sm">
                {sectionName}
            </SectionTitle>

            <Items>
                {({ 
                    id, 
                    jobTitle,
                    employer,
                    startDate,
                    endDate,
                    ...props
                }) => {

                    const title = `${jobTitle}${jobTitle && employer && ","} ${employer}`.trim();
                        
                    const date = `${startDate} ${startDate && endDate && "-"} ${endDate}`.trim();

                    return (
                        <Item
                        key={id}
                        date={date}
                        title={title}
                        {...props}/>
                    );
                }}
            </Items>
        </>
    );
}