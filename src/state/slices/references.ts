import { ListItemType } from "helpers";

import { 
    createSlice, 
    PayloadAction 
}
from "@reduxjs/toolkit";

import { 
    addItem, 
    changeItems, 
    setSectionTitle,
    updateItem
}
from "state/helpers";



export type RefrenceItem = ListItemType & {
    company: string;
    email: string;
    mobileNumber: string;
    nameOfTheReferenced: string;
}

const initialItem: Omit<RefrenceItem, "id"> = {
    company: "",
    email: "",
    mobileNumber: "",
    nameOfTheReferenced: "",
}

const initialReferences = {
    sectionTitle: "References",
    items: [] as RefrenceItem[],
    isHidingReferences: false
}

export const references = createSlice({
    name: "references",
    initialState: initialReferences,
    reducers: {
        setSectionTitle: setSectionTitle(),
        setIsHidingReferences: (state, { payload: isHidingReferences }: PayloadAction<boolean>) => {
            
            state.isHidingReferences = isHidingReferences;
        },
        addItem: addItem(initialItem),
        changeItems: changeItems(),
        updateItem: updateItem()
    }
});