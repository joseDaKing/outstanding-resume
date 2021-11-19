import React from "react";

import { IResumeTemplateProps } from "../../../components/misc";
import { filterEmptyStr } from "../../../utilities";

import { SectionTitle, Seperator, Item } from "../components";

export const Education: IResumeTemplateProps["Education"] = ({ 
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
                    school,
                    exam,
                    startDate,
                    endDate,
                    ...props
                }) => {

                    const title = filterEmptyStr([exam, school]).join(", ");

                    const date = filterEmptyStr([startDate, endDate]).join(" - ");

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