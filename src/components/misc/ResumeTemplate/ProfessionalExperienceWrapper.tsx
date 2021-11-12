import React from "react";

import { View } from "@react-pdf/renderer";

import {  StyleProp, useResumeTemplateContext } from "./shared";

export const ProfessionalExperienceWrapper: React.FC<StyleProp> = ({ style }) => {

    const { Description, state } = useResumeTemplateContext();

    const professionalExperienceProps = state["professional-experience"];

    return (
        <>
            {professionalExperienceProps.description &&
            <View style={style}>
                <Description {...professionalExperienceProps}/>
            </View>}
        </>
    );
};