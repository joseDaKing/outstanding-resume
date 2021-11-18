import React from "react";

import { View } from "@react-pdf/renderer";

import { IResumeTemplateProps } from "../../../components/misc";

import { theme } from "../theme";

import { Seperator, Spacing } from "../components";

export const Layout: IResumeTemplateProps["Layout"]  = ({ 
    Header, 
    Orderable, 
    ContactDetails, 
    ProfessionalExperience 
}) => {

    return (
        <View>
            <Header/>
            
            <Seperator 
            axis="y"
            size="sm"
            only="start"/>

            <View
            style={{
                display: "flex",
                flexDirection: "row",
                height: "100%",
                width: "100%"
            }}>
                <View
                style={{
                    width: "31.25%"
                }}>
                    <Spacing
                    size="sm"
                    axis="y"/>

                    <ContactDetails/>

                    <Spacing
                    size="md"
                    axis="y"/>
                   
                    <Orderable
                    sectionStyle={{
                        marginBottom: theme.spacings.md
                    }}
                    sections={[
                        "link", 
                        "skill", 
                        "hobbies",
                        "language"
                    ]}/>
                </View>

                <Seperator
                axis="x"
                size="sm"/>

                <View>
                    <Spacing
                    size="sm"
                    axis="y"/>

                    <ProfessionalExperience/>
                    
                    <View
                    style={{
                        width: "171.25%"
                    }}>
                        <Orderable
                        sections={[
                            "work-experience",
                            "education",
                            "internship",
                            "course",
                            "reference",
                            "extra-activity"
                        ]}/>
                    </View>
                </View>
            </View>
        </View>
    );
}