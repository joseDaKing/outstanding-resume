import { createCRUDReducers } from "../../../../utilities";

import { createSlice } from "@reduxjs/toolkit";

interface IWorkExperienceItem {
    jobTitle: string;
    employer: string;
    city: string;
    startDate: string;
    endDate: string;
    description: string;
}

const initialWorkExperienceItem: IWorkExperienceItem = {
    jobTitle: "",
    employer: "",
    city: "",
    startDate: "",
    endDate: "",
    description: "",
}

const initialWorkExperience = {
    sectionName: "Arbetslivserfarenhet",
    items: {} as Record<string, IWorkExperienceItem>
}

export const workExperience = {
    initialState: initialWorkExperience,
    initialItem: initialWorkExperienceItem,
    slice: createSlice({
        name: "work-experience",
        initialState: initialWorkExperience,
        reducers: createCRUDReducers(initialWorkExperienceItem)
    })
};