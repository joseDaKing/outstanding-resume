import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const initialProfessionalExperience = {
    sectionName: "Yrkeserfarenhet",
    description: ""
}

export const professionalExperience = createSlice({
    name: "professional-experience",
    initialState: initialProfessionalExperience,
    reducers: {
        change(state, { payload: professionalExperience }: PayloadAction<Partial<typeof initialProfessionalExperience>>) {

            for (const key of Object.keys(professionalExperience)) {

                const professionalExperienceKey = key as keyof typeof initialProfessionalExperience;

                state[professionalExperienceKey] = professionalExperience[professionalExperienceKey] as any;
            }
            
        }
    }
});