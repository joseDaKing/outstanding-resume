import { createResetableCRUDReducers } from "../../../../utilities";

import { LevelValue } from "../../../../components/form";

import { createSlice } from "@reduxjs/toolkit";

interface ILanguageItem {
    language: string;
    level: LevelValue;
}

const initialLanguageItem: ILanguageItem = {
    language: "",
    level: 0
}

const initialLanguage = {
    sectionName: "Språk",
    items: {} as Record<string, ILanguageItem>
}

export const language = {
    initialState: initialLanguage,
    initialItem: initialLanguageItem,
    slice: createSlice({
        name: "language",
        initialState: initialLanguage,
        reducers: createResetableCRUDReducers(initialLanguageItem, initialLanguage)
    })
};