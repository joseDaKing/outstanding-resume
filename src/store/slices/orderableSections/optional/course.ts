import { createResetableCRUDReducers } from "../../../../utilities";

import { createSlice } from "@reduxjs/toolkit";

interface ICourseItem {
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

const initialCourse = {
    sectionName: "Kurser",
    items: {} as Record<string, ICourseItem>
}

export const course = {
    initialItem: initialCourseItem,
    initialState: initialCourse,
    slice: createSlice({
        name: "course",
        initialState: initialCourse,
        reducers: createResetableCRUDReducers(initialCourseItem, initialCourse)
    })
};