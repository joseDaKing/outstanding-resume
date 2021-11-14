import React from "react";

import { View } from "@react-pdf/renderer";

import { StyleProp, useResumeTemplateContext } from "./shared";

export const HeaderWrapper: React.FC<StyleProp> = ({ style }) => {

    const { Header, state } = useResumeTemplateContext();

    const { firstName, lastName, jobTitle } = state["contact-details"].fields;

    return (
       <View style={style}>
            <Header 
            firstName={firstName}
            lastName={lastName}
            jobTitle={jobTitle}/>
        </View>
    );
}