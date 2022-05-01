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



export type InternshipItem = ListItemType & {
    jobTitle: string;
    employer: string;
    city: string;
    description: string;
    date: DatePickerRangeState;
}

const initialItem: Omit<InternshipItem, "id"> = {
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

const initialInterships = {
    sectionTitle: "Interhsips",
    items: [] as InternshipItem[]
}

export const interships = createSlice({
    name: "interships",
    initialState: initialInterships,
    reducers: {
        setSectionTitle: setSectionTitle(),
        addItem: addItem(initialItem),
        changeItems: changeItems(),
        updateItem: updateItem()
    }
});