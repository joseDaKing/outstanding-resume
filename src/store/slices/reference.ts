import { createResetableCRUDReducers } from "../../utilis";

import { createSlice } from "@reduxjs/toolkit";

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
    items: {} as Record<string, IReference>
}

export const reference = createSlice({
    name: "reference",
    initialState: initialReference,
    reducers: createResetableCRUDReducers(initialReferenceItem, initialReference)
});