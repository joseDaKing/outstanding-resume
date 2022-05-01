import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { setSectionTitle } from "state/helpers";



const initialProfessionalExperience = {
    sectionTitle: "Profile",
    description: ""
}

export const professionalExperience = createSlice({
    name: "professionalExperience",
    initialState: initialProfessionalExperience,
    reducers: {
        setSectionTitle: setSectionTitle(),
        setDescription: (state, { payload }: PayloadAction<string>) => {

            state.description = payload;
        },
    }
});