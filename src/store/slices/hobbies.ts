import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const initialHobbies = {
    sectionName: "Yrkeserfarenhet",
    description: ""
}

export const hobbies = createSlice({
    name: "professional-experience",
    initialState: initialHobbies,
    reducers: {
        change(state, { payload: hobbies }: PayloadAction<Partial<typeof initialHobbies>>) {

            for (const key of Object.keys(hobbies)) {

                const hobbiesKey = key as keyof typeof initialHobbies;

                state[hobbiesKey] = hobbies[hobbiesKey] as any;
            }
            
        },
        reset(state) {

            state.sectionName = initialHobbies.sectionName;

            state.description = initialHobbies.description;
        }
    }
});