import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setSectionNameReducer } from "../../../../utilities";
import { setDescripitonReducer } from "../../../../utilities/reducers/setDescriptionReducer";

export const initialHobbies = {
    sectionName: "Yrkeserfarenhet",
    description: ""
}

export const hobbies = createSlice({
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
});