import { createCRUDReducers } from "../../../../utilities";

import { LevelValue } from "../../../../components/form";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ISkillItem {
    name: string;
    level: LevelValue;
}

export const initialSkillItem: ISkillItem = {
    name: "",
    level: 0
}

export const initialSkill = {
    sectionName: "Kompetenser",
    showLevel: false,
    items: {} as Record<string, ISkillItem>
}

export const skill = createSlice({
    name: "skill",
    initialState: initialSkill,
    reducers: {
        ...createCRUDReducers(initialSkillItem),
        setShowLevel(state, { payload: showLevel }: PayloadAction<boolean>) {

            state.showLevel = showLevel;
        }
    }
});