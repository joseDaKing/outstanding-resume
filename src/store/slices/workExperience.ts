import { v4 as uuid } from "uuid";

import { reorder } from "../../utilis";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IWorkExperienceItem {
    jobTitle: string;
    employer: string;
    city: string;
    startDate: string;
    endDate: string;
    description: string;
}

const initialWorkExperienceItem: IWorkExperienceItem = {
    jobTitle: "",
    employer: "",
    city: "",
    startDate: "",
    endDate: "",
    description: "",
}

export const initialWorkExperience = {
    sectionName: "Arbetslivserfarenhet",
    items: {} as Record<string, IWorkExperienceItem>
}

export const workExperience = createSlice({
    name: "work-experience",
    initialState: initialWorkExperience,
    reducers: {
        setSectionName(state, { payload: sectionName }: PayloadAction<string>) {
            
            state.sectionName = sectionName;
        },
        add(state) {

            state.items[uuid()] = initialWorkExperienceItem; 
        },
        remove(state, { payload: id }: PayloadAction<string>) {

            delete state.items[id];
        },
        change(state, { payload: [id, workExperience ]}: PayloadAction<[id: string, workExperience: Partial<IWorkExperienceItem>]>) {

            state.items[id] = {
                ...state.items[id],
                ...workExperience
            }
        },
        reorder
    }
});