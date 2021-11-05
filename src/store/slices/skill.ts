import { v4 as uuid } from "uuid";

import { reorder } from "../../utilis";

import {  LevelValue } from "../../components/form";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ISkillItem {
    name: string;
    level: LevelValue;
}

const initialSkillItem: ISkillItem = {
    name: "",
    level: 0
}

export const initialSkill = {
    sectionName: "Kompetenser",
    items: {} as Record<string, ISkillItem>
}

export const skill = createSlice({
    name: "skill",
    initialState: initialSkill,
    reducers: {
        setSectionName(state, { payload: sectionName }: PayloadAction<string>) {

            state.sectionName = sectionName;
        },
        add(state) {

            state.items[uuid()] = initialSkillItem;
        },
        remove(state, { payload: id }: PayloadAction<string>) {

            delete state.items[id];
        },
        change(state, { payload: [id, skill ]}: PayloadAction<[id: string, skill: Partial<ISkillItem>]>) {

            state.items[id] = {
                ...state.items[id],
                ...skill
            }
        },
        reorder
    }
});