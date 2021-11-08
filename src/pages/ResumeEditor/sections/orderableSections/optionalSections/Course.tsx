import React from "react";

import { TextField } from "../../../../../components/form";

import { Box, Stack } from "../../../../../components/layout";

import { useReorderItem } from "../../../../../components/misc";

import { ItemsContainer, OptionalSectionTitleContainer } from "../../../../../containers";

export const Course: React.FC = () => {

    const { containerProps } = useReorderItem();

    return (
        <Box
        {...containerProps}>
            <OptionalSectionTitleContainer
            section="course"/>

            <ItemsContainer
            section="course"
            buttonLabel="Lägg till kurs"
            accordionLabel={({ courseName }) => courseName || "(Ej specificerat)"}
            Component={({ bind }) => (
                <Stack 
                space="sm"
                axis="y">
                    <Stack
                    space="sm"
                    axis="x">
                        <TextField
                        {...bind("courseName")}
                        label="Kurs"/>

                        <TextField
                        {...bind("institution")}
                        label="Institution"/>
                    </Stack>

                    <Stack
                    space="xs">
                        <TextField
                        {...bind("startDate")}
                        label="Start- och slutdatum"/>

                        <TextField 
                        {...bind("endDate")}/>
                    </Stack>
                </Stack>
            )}/>
        </Box>
    ); 
}