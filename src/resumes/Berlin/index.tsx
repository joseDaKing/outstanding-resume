import React from "react";

import { RootState } from "../../store";

import { ResumeTemplate } from "../../components/misc";

import * as sections from "./sections";

export const Berlin: React.FC<RootState> = ({ children: _, ...state}) => {

    return (
        <ResumeTemplate
        state={state}
        {...sections}/>
    );
}