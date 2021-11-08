import { createCRUDReducers } from "../../../../utilities";

import { createSlice } from "@reduxjs/toolkit";

import { SliceGroup } from "../../../../types";

interface IWorkExperienceItem {
    jobTitle: string;
    employer: string;
    city: string;
    startDate: string;
    endDate: string;
    description: string;
}

const initialItem: IWorkExperienceItem = {
    jobTitle: "",
    employer: "",
    city: "",
    startDate: "",
    endDate: "",
    description: "",
}

const initialState = {
    sectionName: "Arbetslivserfarenhet",
    items: {} as Record<string, IWorkExperienceItem>
}

const slice = createSlice({
    name: "work-experience",
    initialState,
    reducers: createCRUDReducers(initialItem)
});

export const workExperience: SliceGroup<typeof initialState, typeof slice, typeof initialItem> = {
    initialState,
    initialItem,
    slice
};