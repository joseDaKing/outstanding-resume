import React from "react";

import { IResumeTemplateProps } from "../../../components/misc";

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
                    city,
                    description
                }) => {

                    const title = `${exam}${exam && school && ","} ${school}`.trim();
                        
                    const date = `${startDate} ${startDate && endDate && "-"} ${endDate}`.trim();

                    return (
                        <Item
                        key={id}
                        city={city}
                        date={date}
                        title={title}
                        description={description}/>
                    );
                }}
            </Items>
        </>
    );
}