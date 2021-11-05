import React from "react";

import { Stack } from "../../../../../components/layout";

import { TextArea, TextField } from "../../../../../components/form";

import { Accordion } from "../../../../../components/misc";

import { IID } from "../../../../../types";

import { 
    IEducationItem,
    useAppDispatch,
    education
} 
from "../../../../../store";

export const ListRenderer: React.FC<IEducationItem & IID> = ({ id, school, exam, city, startDate, endDate, description }) => {

    let title = "(Ej specificerat)";

    if (school && exam) {

        title = `${school}, ${exam}`;
    }
    else if (school) {

        title = school;
    }
    else if (exam) {

        title = exam;
    }

    const dispatch = useAppDispatch();

    const onSchoolChange = (school: string) => dispatch(education.actions.change([id, {
        school
    }]));

    const onExamChange = (exam: string) => dispatch(education.actions.change([id, {
        exam
    }]));

    const onDateStartChange = (startDate: string) => dispatch(education.actions.change([id, {
        startDate
    }]));

    const onDateEndChange = (endDate: string) => dispatch(education.actions.change([id, {
        endDate
    }]));

    const onCityChange = (city: string) => dispatch(education.actions.change([id, {
        city
    }]));

    const onDescriptionChange = (description: string) => dispatch(education.actions.change([id, {
        description
    }]));

    return (
        <Accordion.Item 
        id={id}
        title={title}>
            <Stack 
            axis="y"
            space="md">
                <Stack 
                axis="x"
                space="md">
                    <TextField
                    onChange={onSchoolChange}
                    value={school}
                    label="Skola"/>

                    <TextField
                    onChange={onExamChange}
                    value={exam}
                    label="Examen"/>
                </Stack>

                <Stack 
                axis="x"
                space="md">
                    <Stack
                    axis="x"
                    space="xs"
                    css={{
                        alignItems: "flex-end"
                    }}>
                        <TextField
                        onChange={onDateStartChange}
                        value={startDate}
                        label="Datum"
                        placeholder="start"/>

                        <TextField
                        onChange={onDateEndChange}
                        value={endDate}
                        placeholder="slut"/>
                    </Stack>

                    <TextField
                    onChange={onCityChange}
                    value={city}
                    label="Stad"/>
                </Stack>

                <TextArea
                onChange={onDescriptionChange}
                value={description}
                label="Beskrivning"
                placeholder="t.ex utexaminerad med höga betyg"/>
            </Stack>
        </Accordion.Item>
    );
};