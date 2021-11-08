import { createCRUDReducers } from "../../../../utilities";

import { createSlice } from "@reduxjs/toolkit";

import { SliceGroup } from "../../../../types";

interface ILinkItem {
    label: string;
    url: string
}

const initialItem: ILinkItem = {
    label: "",
    url: ""
}

const initialState = {
    sectionName: "Hemsidor & Sociala länkar",
    items: {} as Record<string, ILinkItem>
}

const slice = createSlice({
    name: "link",
    initialState,
    reducers: createCRUDReducers(initialItem)
});

export const link: SliceGroup<typeof initialState, typeof slice, typeof initialItem> = {
    initialState,
    initialItem,
    slice
};