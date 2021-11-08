import { createCRUDReducers } from "../../../../utilities";

import { LevelValue } from "../../../../components/form";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ISkillItem {
    name: string;
    level: LevelValue;
}

const initialSkillItem: ISkillItem = {
    name: "",
    level: 0
}

const initialSkill = {
    sectionName: "Kompetenser",
    showLevel: false,
    items: {} as Record<string, ISkillItem>
}

export const skill = {
    initialState: initialSkill,
    initialItem: initialSkillItem,
    slice: createSlice({
        name: "skill",
        initialState: initialSkill,
        reducers: {
            ...createCRUDReducers(initialSkillItem),
            setShowLevel(state, { payload: showLevel }: PayloadAction<boolean>) {
    
                state.showLevel = showLevel;
            }
        }
    })
};