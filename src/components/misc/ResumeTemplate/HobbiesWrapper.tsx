import React from "react";

import { View } from "@react-pdf/renderer";

import {  StyleProp, useResumeTemplateContext } from "./shared";

export const HobbiesWrapper: React.FC<StyleProp> = ({ style }) => {

    const { Description, state: { hobbies } } = useResumeTemplateContext();

    return (
        <View style={style}>
            <Description {...hobbies}/>
        </View>
    );
}