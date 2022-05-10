import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { madrid } from "cvTemplates";

import type * as cvTemplates from "cvTemplates"



type ResumeTemplates = keyof typeof cvTemplates;

type ResumeState = {
    name: keyof typeof cvTemplates;
}

const initialResume: ResumeState = {
    name: madrid.name as any
}

export const resume = createSlice({
    name: "resume",
    initialState: initialResume,
    reducers: {
        setResumeTemplate: (state, { payload: resumeTemplateName }: PayloadAction<ResumeTemplates>) => {

            state.name = resumeTemplateName;
        }
    }
});