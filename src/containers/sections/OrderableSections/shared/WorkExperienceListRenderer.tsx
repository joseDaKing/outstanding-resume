import React from "react";

import { Stack } from "../../../../components/layout"

import { TextArea, TextField } from "../../../../components/form";

import { Accordion } from "../../../../components/misc";

import { useAppDispatch, internship, IWorkExperienceItem } from "../../../../store";

import { IID } from "../../../../types";

export const WorkExperienceListRenderer: React.FC<IWorkExperienceItem & IID> = ({ id, jobTitle, employer, startDate, endDate, city, description }) => {

    let title = "(Ej specificerat)";

    if (jobTitle && employer) {

        title = `${jobTitle}, ${employer}`;
    }
    else if (jobTitle) {

        title = jobTitle;
    }
    else if (employer) {

        title = employer;
    }

    const dispatch = useAppDispatch();

    const onJobTitleChange = (jobTitle: string) => dispatch(internship.actions.change([id, {
        jobTitle
    }]));
    
    const onEmployerChange = (employer: string) => dispatch(internship.actions.change([id, {
        employer
    }]));

    const onStartDateChange = (startDate: string) => dispatch(internship.actions.change([id, {
        startDate
    }]));

    const onEndDateChange = (endDate: string) => dispatch(internship.actions.change([id, {
        endDate
    }]));

    const onCityChange = (city: string) => dispatch(internship.actions.change([id, {
        city
    }]));

    const onDescriptionChange = (description: string) => dispatch(internship.actions.change([id, {
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
                    onChange={onJobTitleChange}
                    value={jobTitle}
                    label="Jobbtitel"/>

                    <TextField
                    onChange={onEmployerChange}
                    value={employer}
                    label="Arbetsgivare"/>
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
                        onChange={onStartDateChange}
                        value={startDate}
                        label="Datum"
                        placeholder="start"/>

                        <TextField
                        onChange={onEndDateChange}
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
                placeholder="t.ex Skapande och implementerade lektionsupplägg baserade på barnes intressen och nyfikenhet"/>
            </Stack>
        </Accordion.Item>
    );
};