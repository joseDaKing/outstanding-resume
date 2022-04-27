import { mergeText } from "helpers";

import React from "react";

import { RootState } from "state";

import { ItemsSection } from "../components";

import { calendarStateToStr } from "../helpers";



export const WorkExperience: React.FC<RootState["workExperience"]> = state => {

    return (
        <ItemsSection
        items={state.items}
        sectionTitle={state.sectionTitle}
        itemFilterer={({ jobTitle }) => !!jobTitle}
        itemRenderer={({ 
            jobTitle,
            employer,
            city,
            date,
            description
        }) => ({
            title: mergeText(
                ", ",
                jobTitle,
                employer,
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