import { createResetableCRUDReducers } from "../../../../utilities";

import { workExperience } from "../required";

import { createSlice } from "@reduxjs/toolkit";

import { SliceGroup } from "../../../../types";

const initialState = {
    sectionName: "Kurser",
    items: {} as Record<string, typeof workExperience.initialItem>
}

const slice = createSlice({
    name: "internship",
    initialState,
    reducers: createResetableCRUDReducers(workExperience.initialItem, initialState)
});

export const internship: SliceGroup<typeof initialState, typeof slice, typeof workExperience.initialItem> = {
    initialItem: workExperience.initialItem,
    initialState,
    slice,
};