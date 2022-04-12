import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { workExperience } from "./workExperience";

import { education } from "./education";

import { skills } from "./skills";

import { links } from "./links";



export const sectionOrder = createSlice({
    name: "sectionOrder",
    initialState: {
        items: [
            workExperience.name,
            education.name,
            links.name,
            skills.name
        ] as string[]
    },
    reducers: {
        changeItems: (state, { payload: items }: PayloadAction<string[]>) => {

            state.items = items;
        },
    }
});