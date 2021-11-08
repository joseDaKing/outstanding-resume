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

import { removeDuplicates, reorderArray } from "../../utilities";

import { SliceGroup } from "../../types";

export type RemovableSectionName = (
    | typeof course["slice"]
    | typeof internship["slice"]
    | typeof reference["slice"]
    | typeof extraActivity["slice"]
    | typeof hobbies["slice"]
    | typeof language["slice"]
)["name"];

export type SectionNames = (
    typeof education["slice"]
    | typeof link["slice"]
    | typeof workExperience["slice"]
    | typeof skill["slice"]
)["name"] | RemovableSectionName;

const initialState = {
    items: [
        workExperience["slice"]["name"],
        education["slice"]["name"],
        link["slice"]["name"],
        skill["slice"]["name"]
    ] as Array<SectionNames>
};

const slice = createSlice({
    name: "section-order",
    initialState,
    reducers: {
        reorder(state, { payload: [fromId, toId] }: PayloadAction<[fromId: string, toId: string]>) {

            const fromIndex = state.items.findIndex(id => id === fromId);

            const toIndex = state.items.findIndex(id => id === toId);

            state.items = reorderArray(state.items, fromIndex, toIndex);
        },
        add(state, { payload: sectionOrder }: PayloadAction<SectionNames>) {

            state.items = removeDuplicates([...state.items, sectionOrder]);
        },
        remove(state, {  payload: sectionOrder }: PayloadAction<RemovableSectionName>) {

            const indexToRemove = state.items.indexOf(sectionOrder);

            if (-1 < indexToRemove) {

                state.items.splice(indexToRemove, 1);
            }
        }
    }
});

export const sectionOrder: SliceGroup<typeof initialState, typeof slice> = {
    slice,
    initialState,
};