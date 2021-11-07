import { createCRUDReducers } from "../../../../utilities";

import { createSlice } from "@reduxjs/toolkit";

export interface IWorkExperienceItem {
    jobTitle: string;
    employer: string;
    city: string;
    startDate: string;
    endDate: string;
    description: string;
}

export const initialWorkExperienceItem: IWorkExperienceItem = {
    jobTitle: "",
    employer: "",
    city: "",
    startDate: "",
    endDate: "",
    description: "",
}

export const initialWorkExperience = {
    sectionName: "Arbetslivserfarenhet",
    items: {} as Record<string, IWorkExperienceItem>
}

export const workExperience = createSlice({
    name: "work-experience",
    initialState: initialWorkExperience,
    reducers: createCRUDReducers(initialWorkExperienceItem)
});