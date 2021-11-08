import { createResetableCRUDReducers } from "../../../../utilities";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { SliceGroup } from "../../../../types";

interface IReferenceItem {
    personName: string;
    mobilenumber: string;
    company: string;
    email: string;
}

const initialItem: IReferenceItem = {
    personName: "",
    mobilenumber: "",
    company: "",
    email: ""
}

const initialState = {
    sectionName: "Referenser",
    hide: false,
    items: {} as Record<string, IReferenceItem>
}

const slice = createSlice({
    name: "reference",
    initialState,
    reducers: {
        ...createResetableCRUDReducers(initialItem, initialState),
        hideSection(state, { payload: hide}: PayloadAction<boolean>) {

            state.hide = hide;
        }
    }
});

export const reference: SliceGroup<typeof initialState, typeof slice, typeof initialItem> = {
    initialState,
    initialItem,
    slice
};