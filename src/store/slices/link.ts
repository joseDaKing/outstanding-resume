import { v4 as uuid } from "uuid";

import { reorder } from "../../utilis";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ILinkItem {
    label: string;
    url: string
}

const initialLinkItem: ILinkItem = {
    label: "",
    url: ""
}

export const initialLink = {
    sectionName: "Hemsidor & Sociala länkar",
    items: {} as Record<string, ILinkItem>
}

export const link = createSlice({
    name: "link",
    initialState: initialLink,
    reducers: {
        setSectionName(state, { payload: sectionName }: PayloadAction<string>) {

            state.sectionName = sectionName;
        },
        add(state) {

            state.items[uuid()] = initialLinkItem;
        },
        remove(state, { payload: id }: PayloadAction<string>) {

            delete state.items[id];
        },
        change(state, { payload: [id, workExperience ]}: PayloadAction<[id: string, workExperience: Partial<ILinkItem>]>) {

            state.items[id] = {
                ...state.items[id],
                ...workExperience
            }
        },
        reorder
    }
});