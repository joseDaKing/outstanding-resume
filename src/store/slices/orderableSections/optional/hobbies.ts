import { createSlice } from "@reduxjs/toolkit";

import { setSectionNameReducer, setDescripitonReducer } from "../../../../utilities";

const initialState = {
    sectionName: "Yrkeserfarenhet",
    description: ""
}

const slice = createSlice({
    name: "hobbies",
    initialState,
    reducers: {
        ...setSectionNameReducer,
        ...setDescripitonReducer,
        reset(state) {

            state.sectionName = initialState.sectionName;

            state.description = initialState.description;
        }
    }
});

export const hobbies = {
    initialState,
    slice,
};