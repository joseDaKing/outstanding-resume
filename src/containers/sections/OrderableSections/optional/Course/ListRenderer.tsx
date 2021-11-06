import React from "react";

import { Stack } from "../../../../../components/layout";

import { TextField } from "../../../../../components/form";

import { Accordion } from "../../../../../components/misc";

import { ICourseItem, course } from "../../../../../store";

import { IID } from "../../../../../types";

import { useDispatch } from "react-redux";

export const ListRenderer: React.FC<ICourseItem & IID> = ({ id, courseName, institution, startDate, endDate }) => {

    const dispatch = useDispatch();

    const onCourseNameChange = (courseName: string) => dispatch(course.actions.change([id, { 
        courseName 
    }]));
    
    const onInstitutionChange = (institution: string) => dispatch(course.actions.change([id, { 
        institution 
    }]));
    
    const onStartDateChange = (startDate: string) => dispatch(course.actions.change([id, { 
        startDate 
    }]));
    
    const onEndDateChange = (endDate: string) => dispatch(course.actions.change([id, { 
        endDate 
    }]));
    
    return (
        <Accordion.Item 
        id={id}
        title={courseName || "(Ej specificerat)"}>
            <Stack 
            axis="y"
            space="md">
                <Stack 
                axis="x"
                space="md">
                    <TextField
                    value={courseName}
                    label="Kurs"
                    onChange={onCourseNameChange}/>
    
                    <TextField
                    value={institution}
                    label="Språk"
                    onChange={onInstitutionChange}/>
                </Stack>

                <Stack
                css={{
                    width: "50%"
                }}
                axis="x"
                space="md">
                    <TextField
                    value={startDate}
                    onChange={onStartDateChange}
                    label="Datum"
                    placeholder="start"/>

                    <TextField
                    value={endDate}
                    onChange={onEndDateChange}
                    placeholder="slut"/>
                </Stack>
            </Stack>
        </Accordion.Item>
    );
}