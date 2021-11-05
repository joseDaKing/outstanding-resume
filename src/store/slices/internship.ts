import { createResetableCRUDReducers } from "../../utilis";

import { IWorkExperienceItem, initialWorkExperienceItem } from "./workExperience";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const initialInternship = {
    sectionName: "Kurser",
    hide: false,
    items: {} as Record<string, IWorkExperienceItem>
}

export const internship = createSlice({
    name: "internship",
    initialState: initialInternship,
    reducers: {
        ...createResetableCRUDReducers(initialWorkExperienceItem, initialInternship),
        hideSection(state, { payload: hide}: PayloadAction<boolean>) {

            state.hide = hide;
        }
    }
});