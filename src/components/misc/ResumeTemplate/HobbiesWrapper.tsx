import React from "react";

import { View } from "@react-pdf/renderer";

import { useAppSelector } from "../../../store";

import {  StyleProp, useResumeTemplateContext } from "./shared";

export const HobbiesWrapper: React.FC<StyleProp> = ({ style }) => {

    const hobbiesWrapper = useAppSelector(store => store["hobbies"]);

    const { Description } = useResumeTemplateContext();

    return (
        <View style={style}>
            <Description {...hobbiesWrapper}/>
        </View>
    );
}