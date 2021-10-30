import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { workExperience } from "./workExperience";

import { education } from "./education";

import { link } from "./link";

import { reorderArray } from "../../utilis";

export const sectionOrder = createSlice({
    name: "section-order",
    initialState: {
        items: [
            workExperience.name,
            education.name,
            link.name
        ] as Array<string>
    },
    reducers: {
        reorder(state, { payload: [fromId, toId] }: PayloadAction<[fromId: string, toId: string]>) {

            const fromIndex = state.items.findIndex(id => id === fromId);

            const toIndex = state.items.findIndex(id => id === toId);

            state.items = reorderArray(state.items, fromIndex, toIndex);
        }
    }
});