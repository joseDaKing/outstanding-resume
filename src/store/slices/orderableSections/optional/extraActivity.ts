import { createResetableCRUDReducers } from "../../../../utilities";

import { workExperience } from "../required";

import { createSlice } from "@reduxjs/toolkit";

import { SliceGroup } from "../../../../types";

const initialState = {
    sectionName: "Extra aktiviteter",
    items: {} as Record<string, typeof workExperience.initialItem>
}

const slice = createSlice({
    name: "extra-activity",
    initialState,
    reducers: createResetableCRUDReducers(workExperience.initialItem, initialState)
});

export const extraActivity: SliceGroup<typeof initialState, typeof slice, typeof workExperience.initialItem> = {
    initialItem: workExperience.initialItem,
    initialState,
    slice
};