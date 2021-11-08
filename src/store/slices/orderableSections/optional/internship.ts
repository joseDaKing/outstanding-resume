import { createResetableCRUDReducers } from "../../../../utilities";

import { workExperience } from "../required";

import { createSlice } from "@reduxjs/toolkit";

const initialInternship = {
    sectionName: "Kurser",
    items: {} as Record<string, typeof workExperience.initialItem>
}

export const internship = {
    initialItem: workExperience.initialItem,
    initialState: initialInternship,
    slice: createSlice({
        name: "internship",
        initialState: initialInternship,
        reducers: createResetableCRUDReducers(workExperience.initialItem, initialInternship)
    })
};