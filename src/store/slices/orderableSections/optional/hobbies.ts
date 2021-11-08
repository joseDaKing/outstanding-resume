import { createSlice } from "@reduxjs/toolkit";

import { setSectionNameReducer, setDescripitonReducer } from "../../../../utilities";

const initialHobbies = {
    sectionName: "Yrkeserfarenhet",
    description: ""
}

export const hobbies = {
    initialState: initialHobbies,
    slice: createSlice({
        name: "hobbies",
        initialState: initialHobbies,
        reducers: {
            ...setSectionNameReducer,
            ...setDescripitonReducer,
            reset(state) {
    
                state.sectionName = initialHobbies.sectionName;
    
                state.description = initialHobbies.description;
            }
        }
    })
};