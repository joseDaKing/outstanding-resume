import { createResetableCRUDReducers } from "../../../../utilities";

import { LevelValue } from "../../../../components/form";

import { createSlice } from "@reduxjs/toolkit";

export interface ILanguageItem {
    language: string;
    level: LevelValue;
}

export const initialLanguageItem: ILanguageItem = {
    language: "",
    level: 0
}

export const initialLanguage = {
    sectionName: "Språk",
    items: {} as Record<string, ILanguageItem>
}

export const language = createSlice({
    name: "language",
    initialState: initialLanguage,
    reducers: createResetableCRUDReducers(initialLanguageItem, initialLanguage)
});