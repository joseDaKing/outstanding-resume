import React from "react";

import { View } from "@react-pdf/renderer";

import { IResumeTemplateProps } from "../../../components/misc";

export const Layout: IResumeTemplateProps["Layout"]  = ({ 
    Header, 
    Orderable, 
    ContactDetails, 
    ProfessionalExperience 
}) => {

    return (
        <View 
        style={{
            width: "100vw",
            height: "100vh"
        }}>
            <Header/>
        </View>
    );
}