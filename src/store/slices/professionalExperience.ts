import { createSlice } from "@reduxjs/toolkit";

import { setSectionNameReducer } from "../../utilities";

import { setDescripitonReducer } from "../../utilities/reducers/setDescriptionReducer";

const initialProfessionalExperience = {
    sectionName: "Yrkeserfarenhet",
    description: ""
}

export const professionalExperience = {
    initialState: initialProfessionalExperience,
    slice: createSlice({
        name: "professional-experience",
        initialState: initialProfessionalExperience,
        reducers: {
            ...setSectionNameReducer,
            ...setDescripitonReducer
        }
    })
};