import { createCRUDReducers } from "../../../../utilities";

import { createSlice } from "@reduxjs/toolkit";
import { SliceGroup } from "../../../../types";

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

export const education: SliceGroup<typeof initialState, typeof slice, typeof initialItem> = {
    initialState,
    initialItem,
    slice
};