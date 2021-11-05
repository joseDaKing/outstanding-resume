import { createCRUDReducers } from "../../../../utilis";

import { createSlice } from "@reduxjs/toolkit";

export interface ILinkItem {
    label: string;
    url: string
}

const initialLinkItem: ILinkItem = {
    label: "",
    url: ""
}

export const initialLink = {
    sectionName: "Hemsidor & Sociala länkar",
    items: {} as Record<string, ILinkItem>
}

export const link = createSlice({
    name: "link",
    initialState: initialLink,
    reducers: createCRUDReducers(initialLinkItem)
});