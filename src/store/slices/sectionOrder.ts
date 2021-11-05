import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
    education,
    link,
    workExperience,
    skill,
    course,
    internship,
    reference,
    extraActivity,
    hobbies,
    language
} 
from "./orderableSections";

import { removeDuplicates, reorderArray } from "../../utilis";

export type SectionNames = (
    typeof education.name
    | typeof link.name
    | typeof workExperience.name
    | typeof skill.name
    | typeof course.name
    | typeof internship.name
    | typeof reference.name
    | typeof extraActivity.name
    | typeof hobbies.name
    | typeof language.name
)


export const sectionOrder = createSlice({
    name: "section-order",
    initialState: {
        items: [
            workExperience.name,
            education.name,
            link.name,
            skill.name
        ] as Array<SectionNames>
    },
    reducers: {
        reorder(state, { payload: [fromId, toId] }: PayloadAction<[fromId: string, toId: string]>) {

            const fromIndex = state.items.findIndex(id => id === fromId);

            const toIndex = state.items.findIndex(id => id === toId);

            state.items = reorderArray(state.items, fromIndex, toIndex);
        },
        add(state, { payload: sectionOrder }: PayloadAction<SectionNames>) {

            state.items = removeDuplicates([...state.items, sectionOrder]);
        },
        remove(state, {  payload: sectionOrder }: PayloadAction<SectionNames>) {

            const indexToRemove = state.items.indexOf(sectionOrder);

            if (-1 < indexToRemove) {

                state.items.splice(indexToRemove, 1);
            }
        }
    }
});