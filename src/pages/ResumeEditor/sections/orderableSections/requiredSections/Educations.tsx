import React from "react";

import { TextArea, TextField } from "../../../../../components/form";

import { Box, Stack } from "../../../../../components/layout";

import { useReorderItem } from "../../../../../components/misc";

import { ItemsContainer, RequiredSectionTitleContainer } from "../../../../../containers";

export const Education: React.FC = () => {

    const { containerProps } = useReorderItem();

    return (
        <Box
        {...containerProps}>
            <RequiredSectionTitleContainer
            section="education"/>
            
            <ItemsContainer
            section="education"
            buttonLabel="Lägg till utbildning"
            accordionLabel={({ school, exam }) => {

                if (school && exam) {

                    return `${school} på ${exam}`;
                }
                else if (school) {
                    
                    return school;
                }
                else if (exam) {

                    return exam;
                }
                else {

                    return "(Ej specificerat)";
                }
            }}
            Component={({ bind }) => (
                <Stack
                space="sm"
                axis="y">
                    <Stack
                    space="sm"
                    axis="y">
                        <TextField
                        {...bind("school")}
                        label="Skola"/>

                        <TextField
                        {...bind("exam")}
                        label="Exam"/>
                    </Stack>

                    <Stack
                    space="sm"
                    axis="y">
                        <Stack
                        axis="x"
                        space="xs">
                            <TextField
                            {...bind("endDate")}
                            label="Start- och slutdatum"/>
                            
                            <TextField
                            {...bind("startDate")}/>
                        </Stack>

                        <TextField
                        {...bind("city")}
                        label="City"/>
                    </Stack>

                    <TextArea
                    {...bind("description")}
                    label="Beskrvining"/>
                </Stack>
            )}/>
        </Box>
    ); 
}