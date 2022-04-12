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



export type EducationItem = ListItemType & {
    school: string;
    exam: string;
    city: string;
    description: string;
    date: DatePickerRangeState;
}

const initialEducation = {
    sectionTitle: "Utbildning",
    items: [] as EducationItem[]
}

export const education = createSlice({
    name: "education",
    initialState: initialEducation,
    reducers: {
        setSectionTitle: setSectionTitle(),
        addItem: addItem({
            school: "",
            exam: "",
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
        }),
        changeItems: changeItems(),
        updateItem: updateItem()
    }
});