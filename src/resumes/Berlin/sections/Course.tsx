import React from "react";

import { IResumeTemplateProps } from "../../../components/misc";

import { SectionTitle, Seperator, Item } from "../components";

export const Course: IResumeTemplateProps["Course"] = ({ 
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
                    courseName,
                    institution,
                    startDate,
                    endDate,
                    
                }) => {

                    const title = `${courseName}${courseName && institution && ","} ${institution}`.trim();
                        
                    const date = `${startDate} ${startDate && endDate && "-"} ${endDate}`.trim();

                    return (
                        <Item
                        key={id}
                        date={date}
                        title={title}/>
                    );
                }}
            </Items>
        </>
    );
}