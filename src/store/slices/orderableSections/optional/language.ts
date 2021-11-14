import { createResetableCRUDReducers } from "../../../../utilities";

import { createSlice } from "@reduxjs/toolkit";

import { SliceGroup } from "../../../../types";

import { ISkillItem } from "../required/skill";

const initialItem: ISkillItem = {
    name: "",
    level: 0
}

const initialState = {
    sectionName: "Språk",
    items: {} as Record<string, ISkillItem>
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