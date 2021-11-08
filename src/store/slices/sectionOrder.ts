import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { OptionalSliceGroupNames } from "./orderableSections/optional";

import { OrderableSliceGroupNames } from "./orderableSections";

import { removeDuplicates, reorderArray } from "../../utilities";

import { SliceGroup } from "../../types";

import { workExperience } from "./orderableSections/required/workExperience";

import { education } from "./orderableSections/required/education";

import { link } from "./orderableSections/required/link";

import { skill } from "./orderableSections/required/skill";

const initialState = {
    items: [
        workExperience.slice.name,
        education.slice.name,
        link.slice.name,
        skill.slice.name,
    ] as Array<OrderableSliceGroupNames>
};

const slice = createSlice({
    name: "section-order",
    initialState,
    reducers: {
        reorder(state, { payload: [fromId, toId] }: PayloadAction<[
            fromId: OrderableSliceGroupNames, 
            toId: OrderableSliceGroupNames
        ]>) {

            const fromIndex = state.items.findIndex(id => id === fromId);

            const toIndex = state.items.findIndex(id => id === toId);

            if (-1 < fromIndex && -1 < toIndex && fromIndex !== toIndex) {

                state.items = reorderArray(state.items, fromIndex, toIndex);
            }
        },
        add(state, { payload: sectionOrder }: PayloadAction<OptionalSliceGroupNames>) {

            state.items = removeDuplicates([...state.items, sectionOrder]);
        },
        remove(state, {  payload: sectionOrder }: PayloadAction<OptionalSliceGroupNames>) {

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