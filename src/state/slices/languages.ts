import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ListItemType } from "helpers";

import { 
    addItem, 
    changeItems, 
    setSectionTitle,
    updateItem
}
from "state/helpers";



export type LanguageItem = ListItemType & {
    language: string;
    level: number;
}

const initialItem: Omit<LanguageItem, "id"> = {
    language: "",
    level: 0
}

const initialLanguages = {
    sectionTitle: "Språk",
    items: [] as LanguageItem[]
}

export const languages = createSlice({
    name: "languages",
    initialState: initialLanguages,
    reducers: {
        setSectionTitle: setSectionTitle(),
        addItem: addItem(initialItem),
        changeItems: changeItems(),
        updateItem: updateItem(),
        reset: state => {

            state.sectionTitle = initialLanguages.sectionTitle;

            state.items = initialLanguages.items;
        }
    }
});