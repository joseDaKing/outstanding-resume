import { createSlice } from "@reduxjs/toolkit";

import { DatePickerRangeState } from "components/form";

import { ListItemType } from "helpers";

import { 
    addItem, 
    changeItems, 
    setSectionTitle,
    updateItem
}
from "state/helpers";



export type CourseItem = ListItemType & {
    name: string;
    institution: string;    
    date: DatePickerRangeState;
}

const initialItem: Omit<CourseItem, "id"> = {
    name: "",
    institution: "", 
    date: {
        start: {
            year: new Date().getFullYear()
        },
        end: {
            year: new Date().getFullYear()
        }
    }
}

const initialCourses = {
    sectionTitle: "Kurser",
    items: [] as CourseItem[]
}

export const courses = createSlice({
    name: "courses",
    initialState: initialCourses,
    reducers: {
        setSectionTitle: setSectionTitle(),
        addItem: addItem(initialItem),
        changeItems: changeItems(),
        updateItem: updateItem()
    }
});