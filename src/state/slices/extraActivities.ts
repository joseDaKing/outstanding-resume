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



export type ExtraActivityItem = ListItemType & {
    jobTitle: string;
    employer: string;
    city: string;
    description: string;
    date: DatePickerRangeState;
}

const initialItem: Omit<ExtraActivityItem, "id"> = {
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

const initialExtraActivities = {
    sectionTitle: "Extra Aktiviteter",
    items: [] as ExtraActivityItem[]
}

export const extraActivities = createSlice({
    name: "extraActivities",
    initialState: initialExtraActivities,
    reducers: {
        setSectionTitle: setSectionTitle(),
        addItem: addItem(initialItem),
        changeItems: changeItems(),
        updateItem: updateItem()
    }
});