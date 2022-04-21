import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { setSectionTitle } from "state/helpers";



const initialHobbies = {
    sectionTitle: "Hobbies",
    description: ""
}

export const hobbies = createSlice({
    name: "hobbies",
    initialState: initialHobbies,
    reducers: {
        setSectionTitle: setSectionTitle(),
        setDescription: (state, { payload }: PayloadAction<string>) => {

            state.description = payload;
        },
    }
});