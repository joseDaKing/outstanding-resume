import { createResetableCRUDReducers } from "../../utilis";

import { IWorkExperienceItem, initialWorkExperienceItem } from "./workExperience";

import { createSlice } from "@reduxjs/toolkit";

export const initialInternship = {
    sectionName: "Kurser",
    items: {} as Record<string, IWorkExperienceItem>
}

export const internship = createSlice({
    name: "internship",
    initialState: initialInternship,
    reducers: createResetableCRUDReducers(initialWorkExperienceItem, initialInternship)
});