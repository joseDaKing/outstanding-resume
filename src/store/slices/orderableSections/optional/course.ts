import { createResetableCRUDReducers } from "../../../../utilities";

import { createSlice } from "@reduxjs/toolkit";

import { SliceGroup } from "../../../../types";

interface ICourseItem {
    courseName: string;
    institution: string;
    startDate: string;
    endDate: string;
}

const initialItem: ICourseItem = {
    courseName: "",
    institution: "",
    startDate: "",
    endDate: ""
}

const initialState = {
    sectionName: "Kurser",
    items: {} as Record<string, ICourseItem>
}

const slice = createSlice({
    name: "course",
    initialState,
    reducers: createResetableCRUDReducers(initialItem, initialState)
});

export const course: SliceGroup<typeof initialState, typeof slice, typeof initialItem> = {
    initialItem,
    initialState,
    slice
};