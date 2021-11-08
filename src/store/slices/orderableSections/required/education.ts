import { createCRUDReducers } from "../../../../utilities";

import { createSlice } from "@reduxjs/toolkit";

interface IEducationItem {
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

const initialEducation = {
    sectionName: "Utbildning",
    items: {} as Record<string, IEducationItem>
}

export const education = {
    initialState: initialEducation,
    initialItem: initialEducationItem,
    slice: createSlice({
        name: "education",
        initialState: initialEducation,
        reducers: createCRUDReducers(initialEducationItem)
    })
};