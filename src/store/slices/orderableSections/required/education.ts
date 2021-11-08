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

const initialItem: IEducationItem = {
    school: "",
    exam: "",
    city: "",
    startDate: "",
    endDate: "",
    description: "",
}

const initialState = {
    sectionName: "Utbildning",
    items: {} as Record<string, IEducationItem>
}

const slice = createSlice({
    name: "education",
    initialState,
    reducers: createCRUDReducers(initialItem)
});

export const education = {
    initialState,
    initialItem,
    slice
};