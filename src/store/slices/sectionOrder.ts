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

export type RemovableSectionName = (
    | typeof course["slice"]["name"]
    | typeof internship["slice"]["name"]
    | typeof reference["slice"]["name"]
    | typeof extraActivity["slice"]["name"]
    | typeof hobbies["slice"]["name"]
    | typeof language["slice"]["name"]
);

export type SectionNames = (
    typeof education["slice"]["name"]
    | typeof link["slice"]["name"]
    | typeof workExperience["slice"]["name"]
    | typeof skill["slice"]["name"]
    | RemovableSectionName
);

const initialSectionOrder = {
    items: [
        workExperience["slice"]["name"],
        education["slice"]["name"],
        link["slice"]["name"],
        skill["slice"]["name"]
    ] as Array<SectionNames>
};

export const sectionOrder = {
    initialState: initialSectionOrder,
    slice: createSlice({
        name: "section-order",
        initialState: initialSectionOrder,
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
    })
};