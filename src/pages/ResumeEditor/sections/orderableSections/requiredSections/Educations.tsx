import React from "react";

import { TextArea, TextField } from "../../../../../components/form";

import { Box, Stack } from "../../../../../components/layout";

import { useReorderItem } from "../../../../../components/misc";

import { ItemsContainer, RequiredSectionTitleContainer } from "../../../../../containers";

import { education } from "../../../../../store/slices/orderableSections/required/education";

import { Bind } from "../../../../../types";

const EducationItem: React.FC<{ bind: Bind<typeof education["initialItem"]>}> = ({ bind }) => {

    return (
        <Stack
        space="sm"
        axis="y">
            <Stack
            space="sm"
            axis="x">
                <TextField
                {...bind("school")}
                label="Skola"/>

                <TextField
                {...bind("exam")}
                label="Exam"/>
            </Stack>

            <Stack
            space="sm"
            axis="x">
                <Stack
                css={{
                    width: "50%",
                    alignItems: "flex-end"
                }}
                axis="x"
                space="xs">
                    <TextField
                    {...bind("endDate")}
                    placeholder="Start datum"
                    label="Datum"/>
                    
                    <TextField
                    placeholder="Slut datum"
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
    );
}

const educationLabel = ({ school, exam }: typeof education["initialItem"]) => {

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
}

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
            accordionLabel={educationLabel}
            Component={EducationItem}/>

            <br/>
        </Box>
    ); 
}