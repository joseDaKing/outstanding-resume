import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { workExperience } from "./workExperience";

import { education } from "./education";

import { skills } from "./skills";

import { links } from "./links";

import { extraActivities } from "./extraActivities";

import { hobbies } from "./hobbies";

import { references } from "./references";

import { courses } from "./courses";

import { interships } from "./interships";

import { languages } from "./languages";



export type Sections = (
    typeof workExperience.name
    | typeof education.name
    | typeof links.name
    | typeof skills.name
    | typeof extraActivities.name
    | typeof hobbies.name
    | typeof references.name
    | typeof courses.name
    | typeof interships.name
    | typeof languages.name
);

const initialSections = {
    items: [
        workExperience.name,
        education.name,
        links.name,
        skills.name
    ] as Sections[]
};

export const sections = createSlice({
    name: "sections",
    initialState: initialSections,
    reducers: {
        changeItems: (state, { payload: items }: PayloadAction<Sections[]>) => {

            state.items = items;
        },
        addItem: (state, { payload: section }: PayloadAction<Sections>) => {

            if (!state.items.includes(section)) {

                state.items.push(section);
            }
        }
    }
});