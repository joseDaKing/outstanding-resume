import { reorder } from "../../utilis";

import { v4 as uuid } from "uuid";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IEducationItem {
    school: string;
    exam: string;
    city: string;
    startDate: string;
    endDate: string;
    description: string;
}

const initialEducationItem: IEducationItem = {
    school: "",
    exam: "",
    city: "",
    startDate: "",
    endDate: "",
    description: "",
}

export const initialEducation = {
    sectionName: "Utbildning",
    items: {} as Record<string, IEducationItem>
}

export const education = createSlice({
    name: "education",
    initialState: initialEducation,
    reducers: {
        setSectionName(state, { payload: sectionName }: PayloadAction<string>) {

            state.sectionName = sectionName;
        },
        add(state) {

            state.items[uuid()] = initialEducationItem;
        },
        remove(state, { payload: id }: PayloadAction<string>) {

            delete state.items[id];
        },
        change(state, { payload: [id, workExperience ]}: PayloadAction<[id: string, workExperience: Partial<IEducationItem>]>) {

            state.items[id] = {
                ...state.items[id],
                ...workExperience
            }
        },
        reorder
    }
});