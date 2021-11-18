import { createSlice } from "@reduxjs/toolkit";
import { SliceGroup } from "../../../types";

import { setSectionNameReducer, setDescripitonReducer } from "../../../utilities";

const initialState = {
    sectionName: "Profil",
    description: ""
}

const slice = createSlice({
    name: "professional-experience",
    initialState,
    reducers: {
        ...setSectionNameReducer,
        ...setDescripitonReducer
    }
});

export const professionalExperience: SliceGroup<typeof initialState, typeof slice> = {
    initialState,
    slice 
};