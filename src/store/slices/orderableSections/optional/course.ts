import { createResetableCRUDReducers } from "../../../../utilis";

import { createSlice } from "@reduxjs/toolkit";

export interface ICourseItem {
    courseName: string;
    institution: string;
    startDate: string;
    endDate: string;
}

const initialCourseItem: ICourseItem = {
    courseName: "",
    institution: "",
    startDate: "",
    endDate: ""
}

export const initialCourse = {
    sectionName: "Kurser",
    items: {} as Record<string, ICourseItem>
}

export const course = createSlice({
    name: "course",
    initialState: initialCourse,
    reducers: createResetableCRUDReducers(initialCourseItem, initialCourse)
});