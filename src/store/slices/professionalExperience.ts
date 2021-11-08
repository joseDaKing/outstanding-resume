import { createSlice } from "@reduxjs/toolkit";

import { setSectionNameReducer } from "../../utilities";

import { setDescripitonReducer } from "../../utilities/reducers/setDescriptionReducer";

const initialState = {
    sectionName: "Yrkeserfarenhet",
    description: ""
}

export const professionalExperience = {
    initialState,
    slice: createSlice({
        name: "professional-experience",
        initialState,
        reducers: {
            ...setSectionNameReducer,
            ...setDescripitonReducer
        }
    })
};