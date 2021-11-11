import React from "react";

import { View } from "@react-pdf/renderer";

import { useAppSelector } from "../../../store";

import {  StyleProp, useResumeTemplateContext } from "./shared";

export const ProfessionalExperienceWrapper: React.FC<StyleProp> = ({ style }) => {

    const professionalExperienceProps = useAppSelector(store => store["professional-experience"]);

    const { Description } = useResumeTemplateContext();

    return (
        <View style={style}>
            <Description {...professionalExperienceProps}/>
        </View>
    );
}