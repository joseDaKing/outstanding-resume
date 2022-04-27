import { mergeText } from "helpers";

import React from "react";

import { RootState } from "state";

import { ItemsSection } from "../components";

import { calendarStateToStr } from "../helpers";



export const Education: React.FC<RootState["education"]> = state => {

    return (
        <ItemsSection
        items={state.items}
        sectionTitle={state.sectionTitle}
        itemFilterer={({ exam }) => !!exam}
        itemRenderer={({ 
            exam,
            school,
            city,
            date,
            description
        }) => ({
            title: mergeText(
                ", ",
                exam,
                school,
                city
            ),
            subTitle: mergeText(
                " - ",
                calendarStateToStr(date.start),
                calendarStateToStr(date.end)
            ),
            text: description
        })}/>
    );
}