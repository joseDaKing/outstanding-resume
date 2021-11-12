import React from "react";

import { RootState } from "../../store";

import { useDebouncedValue } from "rooks";

import { Text } from "@react-pdf/renderer";

import { ResumeTemplate } from "../../components/misc/ResumeTemplate"

export const WienResumeTemplate: React.FC<RootState> = ({ children: _, ...state}) => {

    const [debouncedState] = useDebouncedValue(state, 750);

    return (
        <ResumeTemplate
        state={debouncedState as any}
        Layout={({ 
            Header, 
            Orderable, 
            ContactDetails, 
            ProfessionalExperience 
        }) => {

            return (
                <Header/>
            );
        }}
        Header={({ 
            firstName, 
            lastName, 
            jobTitle 
        }) => {
            return (
                <>
                    <Text style={{
                        fontSize: 128
                    }}>
                        {firstName}
                    </Text>
                </>
            );
        }}
        ContactDetails={({
            
        }) => {
            return (
                <>
                </>
            );
        }}
        Description={({ 
            sectionName, 
            description 
        }) => {
            return (
                <>
                </>
            );
        }}
        WorkExperience={({ 
            sectionName, 
            Items 
        }) => {
            return (
                <>
                </>
            );
        }}
        Education={({ 
            sectionName, 
            Items 
        }) => {
            return (
                <>
                </>
            );
        }}
        Link={({ 
            sectionName, 
            Items 
        }) => {
            return (
                <>
                </>
            );
        }}
        Skill={({ 
            sectionName, 
            Items 
        }) => {
            return (
                <>
                </>
            );
        }}
        Course={({ 
            sectionName, 
            Items 
        }) => {
            return (
                <>
                </>
            );
        }}
        Language={({ 
            sectionName, 
            Items 
        }) => {
            return (
                <>
                </>
            );
        }}
        Reference={({ 
            sectionName, 
            Items 
        }) => {
            return (
                <>
                </>
            );
        }}
        />
    );
}