import { createCRUDReducers } from "../../../../utilis";

import { createSlice } from "@reduxjs/toolkit";

export interface IEducationItem {
    school: string;
    exam: string;
    city: string;
    startDate: string;
    endDate: string;
    description: string;
}

const initialEducationItem: IEducationItem = {
    school: "",
    exam: "",
    city: "",
    startDate: "",
    endDate: "",
    description: "",
}

export const initialEducation = {
    sectionName: "Utbildning",
    items: {} as Record<string, IEducationItem>
}

export const education = createSlice({
    name: "education",
    initialState: initialEducation,
    reducers: createCRUDReducers(initialEducationItem)
});