import { createResetableCRUDReducers } from "../../../../utilities";

import { workExperience } from "../required";

import { createSlice } from "@reduxjs/toolkit";

const initialExtraActivity = {
    sectionName: "Extra aktiviteter",
    items: {} as Record<string, typeof workExperience.initialItem>
}

export const extraActivity = {
    initialState: initialExtraActivity,
    initialItem: workExperience.initialItem,
    slice: createSlice({
        name: "extra-activity",
        initialState: initialExtraActivity,
        reducers: createResetableCRUDReducers(workExperience.initialItem, initialExtraActivity)
    })
};