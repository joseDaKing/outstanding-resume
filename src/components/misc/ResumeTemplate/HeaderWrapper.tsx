import React from "react";

import { View } from "@react-pdf/renderer";

import { useAppSelector } from "../../../store";

import { StyleProp, useResumeTemplateContext } from "./shared";

export const HeaderWrapper: React.FC<StyleProp> = ({ style }) => {

    const headerProps = useAppSelector(store => {

        const { 
            fields: {
                firstName, 
                lastName,
                jobTitle
            } 
        } = store["contact-details"];

        return {
            firstName,
            lastName,
            jobTitle
        }
    });

    const { Header } = useResumeTemplateContext();

    return (
        <View style={style}>
            <Header {...headerProps}/>
        </View>
    );
}