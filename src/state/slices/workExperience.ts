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



export type WorkExperienceItem = ListItemType & {
    jobTitle: string;
    employer: string;
    city: string;
    description: string;
    date: DatePickerRangeState;
}

const initialItem: Omit<WorkExperienceItem, "id"> = {
    jobTitle: "",
    employer: "",
    city: "",
    description: "",
    date: {
        start: {
            year: new Date().getFullYear()
        },
        end: {
            year: new Date().getFullYear()
        }
    }
}

const initialWorkExperience = {
    sectionTitle: "Work experience",
    items: [] as WorkExperienceItem[]
}

export const workExperience = createSlice({
    name: "workExperience",
    initialState: initialWorkExperience,
    reducers: {
        setSectionTitle: setSectionTitle(),
        addItem: addItem(initialItem),
        changeItems: changeItems(),
        updateItem: updateItem()
    }
});