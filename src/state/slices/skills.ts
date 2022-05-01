import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ListItemType } from "helpers";

import { 
    addItem, 
    changeItems, 
    setSectionTitle,
    updateItem
}
from "state/helpers";



export type SkillItem = ListItemType & {
    name: string;
    level: number;
}

const initialItem: Omit<SkillItem, "id"> = {
    name: "",
    level: 0
}

const initialSkills = {
    sectionTitle: "Skills",
    isHidingLevel: false,
    items: [] as SkillItem[]
}

export const skills = createSlice({
    name: "skills",
    initialState: initialSkills,
    reducers: {
        setSectionTitle: setSectionTitle(),
        setIsHidingLevel: (state, { payload: isHidingLevel }: PayloadAction<boolean>) => {
            
            state.isHidingLevel = isHidingLevel;
        },
        addItem: addItem(initialItem),
        changeItems: changeItems(),
        updateItem: updateItem()
    }
});