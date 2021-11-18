import React from "react";

import { RootState } from "../../store";

import { ResumeTemplate } from "../../components/misc";

import * as sections from "./sections";

import { theme } from "./theme";

export const Berlin: React.FC<RootState> = state => {

    return (
        <ResumeTemplate
        style={{
            paddingVertical: theme.spacings.lg,
            paddingHorizontal: theme.spacings.xl
        }}
        state={state}
        {...sections}/>
    );
}