import { createResetableCRUDReducers } from "../../utilis";

import { IWorkExperienceItem, initialWorkExperienceItem } from "./workExperience";

import { createSlice } from "@reduxjs/toolkit";

export const initialExtraActivity = {
    sectionName: "Extra aktiviteter",
    items: {} as Record<string, IWorkExperienceItem>
}

export const extraActivity = createSlice({
    name: "extra-activity",
    initialState: initialExtraActivity,
    reducers: createResetableCRUDReducers(initialWorkExperienceItem, initialExtraActivity)
});