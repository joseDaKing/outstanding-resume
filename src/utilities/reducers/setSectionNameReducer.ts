import { PayloadAction } from "@reduxjs/toolkit";

import { Section } from "../../types";

export const setSectionNameReducer = {
    
    setSectionName(state: Section, { payload: sectionName }: PayloadAction<string>) {

        state.sectionName = sectionName;
    }
}