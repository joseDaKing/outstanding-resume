import React from "react";

import { IResumeTemplateProps } from "../../../components/misc";
import { filterEmptyStr } from "../../../utilities";

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

                    const title = filterEmptyStr([courseName, institution]).join(" på ")

                    const date = filterEmptyStr([startDate, endDate]).join(" - ");

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