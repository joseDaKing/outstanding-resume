import { createCRUDReducers } from "../../../../utilis";

import { createSlice } from "@reduxjs/toolkit";

import { ISkillItem, initialSkillItem } from "../required";

export const initialLanguage = {
    sectionName: "Språk",
    items: {} as Record<string, ISkillItem>
}

export const language = createSlice({
    name: "language",
    initialState: initialLanguage,
    reducers: createCRUDReducers(initialSkillItem)
});