import React from "react";

import { RootState } from "../../store";

import { useDebouncedValue } from "rooks";

import { ResumeTemplate } from "../../components/misc";

import * as sections from "./sections"

export const WienResumeTemplate: React.FC<RootState> = ({ children: _, ...state}) => {

    const [debouncedState] = useDebouncedValue(state, 750);

    return (
        <ResumeTemplate
        state={debouncedState as any}
        {...sections}/>
    );
}