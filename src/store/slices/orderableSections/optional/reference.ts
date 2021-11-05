import { createResetableCRUDReducers } from "../../../../utilis";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IReference {
    personName: string;
    mobilenumber: string;
    company: string;
    email: string;
}

const initialReferenceItem: IReference = {
    personName: "",
    mobilenumber: "",
    company: "",
    email: ""
}

export const initialReference = {
    sectionName: "Referenser",
    hide: false,
    items: {} as Record<string, IReference>
}

export const reference = createSlice({
    name: "reference",
    initialState: initialReference,
    reducers: {
        ...createResetableCRUDReducers(initialReferenceItem, initialReference),
        hideSection(state, { payload: hide}: PayloadAction<boolean>) {

            state.hide = hide;
        }
    }
});