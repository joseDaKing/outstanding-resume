import React from "react";

import { TextField } from "../../../../../components/form";

import { Box, Stack } from "../../../../../components/layout";

import { useReorderItem } from "../../../../../components/misc";

import { ItemsContainer, OptionalSectionTitleContainer } from "../../../../../containers";

import { course } from "../../../../../store/slices/orderableSections/optional/course";

import { Bind } from "../../../../../types";

const courseLabel = ({ courseName }: typeof course["initialItem"]) => courseName || "(Ej specificerat)"

const CourseItem: React.FC<{ bind: Bind<typeof course["initialItem"]>}> = ({ bind }) => {

    return (
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
            css={{
                alignItems: "flex-end",
                width: "50%"
            }}
            axis="x"
            space="xs">
                <TextField
                {...bind("startDate")}
                label="Datum"
                placeholder="Start datum"/>
    
                <TextField 
                {...bind("endDate")}
                placeholder="Slut datum"/>
            </Stack>
        </Stack>
    );
}

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
            accordionLabel={courseLabel}
            Component={CourseItem}/>

            <br/>
        </Box>
    ); 
}