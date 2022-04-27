import { mergeText } from "helpers";

import React from "react";

import { RootState } from "state";

import { ItemsSection } from "../components";

import { calendarStateToStr } from "../helpers";



export const Courses: React.FC<RootState["courses"]> = state => {

    return (
        <ItemsSection
        items={state.items}
        sectionTitle={state.sectionTitle}
        itemFilterer={({ name }) => !!name}
        itemRenderer={({ 
            name,
            institution,
            date,
        }) => ( {
            title: mergeText(
                ", ",
                name,
                institution
            ),
            subTitle: mergeText(
                " - ",
                calendarStateToStr(date.start),
                calendarStateToStr(date.end)
            )
        })}/>
    );
}