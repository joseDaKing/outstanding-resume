import { createSlice } from "@reduxjs/toolkit";

import { ListItemType } from "helpers";

import { 
    addItem, 
    changeItems, 
    setSectionTitle,
    updateItem
}
from "state/helpers";



export type LinkItem = ListItemType & {
    label: string;
    url: string;
}

const initialItem: Omit<LinkItem, "id"> = {
    label: "",
    url: "",
}

const initialLinks = {
    sectionTitle: "Websites & Social links",
    items: [] as LinkItem[]
}


export const links = createSlice({
    name: "links",
    initialState: initialLinks,
    reducers: {
        setSectionTitle: setSectionTitle(),
        addItem: addItem(initialItem),
        changeItems: changeItems(),
        updateItem: updateItem()
    }
});