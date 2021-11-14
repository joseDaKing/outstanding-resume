import { createCRUDReducers } from "../../../../utilities";

import { LevelValue } from "../../../../components/form";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { SliceGroup } from "../../../../types";

export interface ISkillItem {
    name: string;
    level: LevelValue;
}

const initialItem: ISkillItem = {
    name: "",
    level: 0
}

const initialState = {
    sectionName: "Kompetenser",
    showLevel: false,
    items: {} as Record<string, ISkillItem>
}

const slice = createSlice({
    name: "skill",
    initialState,
    reducers: {
        ...createCRUDReducers(initialItem),
        setShowLevel(state, { payload: showLevel }: PayloadAction<boolean>) {

            state.showLevel = showLevel;
        }
    }
});

export const skill: SliceGroup<typeof initialState, typeof slice, typeof initialItem> = {
    initialState,
    initialItem,
    slice,
};