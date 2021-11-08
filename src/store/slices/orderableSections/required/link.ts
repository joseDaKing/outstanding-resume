import { createCRUDReducers } from "../../../../utilities";

import { createSlice } from "@reduxjs/toolkit";

interface ILinkItem {
    label: string;
    url: string
}

const initialLinkItem: ILinkItem = {
    label: "",
    url: ""
}

const initialLink = {
    sectionName: "Hemsidor & Sociala länkar",
    items: {} as Record<string, ILinkItem>
}

export const link = {
    initialState: initialLink,
    initialItem: initialLinkItem,
    slice: createSlice({
        name: "link",
        initialState: initialLink,
        reducers: createCRUDReducers(initialLinkItem)
    })
};