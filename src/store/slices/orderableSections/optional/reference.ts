import { createResetableCRUDReducers } from "../../../../utilities";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IReferenceItem {
    personName: string;
    mobilenumber: string;
    company: string;
    email: string;
}

const initialReferenceItem: IReferenceItem = {
    personName: "",
    mobilenumber: "",
    company: "",
    email: ""
}

export const initialReference = {
    sectionName: "Referenser",
    hide: false,
    items: {} as Record<string, IReferenceItem>
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