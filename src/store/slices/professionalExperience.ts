import { createSlice } from "@reduxjs/toolkit";

import { setSectionNameReducer } from "../../utilities";

import { setDescripitonReducer } from "../../utilities/reducers/setDescriptionReducer";

export const initialProfessionalExperience = {
    sectionName: "Yrkeserfarenhet",
    description: ""
}

export const professionalExperience = createSlice({
    name: "professional-experience",
    initialState: initialProfessionalExperience,
    reducers: {
        ...setSectionNameReducer,
        ...setDescripitonReducer
    }
});