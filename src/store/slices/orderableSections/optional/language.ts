import { createResetableCRUDReducers } from "../../../../utilities";

import { LevelValue } from "../../../../components/form";

import { createSlice } from "@reduxjs/toolkit";

import { SliceGroup } from "../../../../types";

interface ILanguageItem {
    language: string;
    level: LevelValue;
}

const initialItem: ILanguageItem = {
    language: "",
    level: 0
}

const initialState = {
    sectionName: "Språk",
    items: {} as Record<string, ILanguageItem>
}

const slice = createSlice({
    name: "language",
    initialState,
    reducers: createResetableCRUDReducers(initialItem, initialState)
});

export const language: SliceGroup<typeof initialState, typeof slice, typeof initialItem>= {
    initialState,
    initialItem,
    slice
};