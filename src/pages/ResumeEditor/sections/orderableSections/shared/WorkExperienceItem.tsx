import React from "react";

import { TextArea, TextField } from "../../../../../components/form";

import { Stack } from "../../../../../components/layout";

import { ItemComponent } from "../../../../../containers";

export const WorkExperienceItem: ItemComponent<"work-experience"> = ({ bind }) => {

    return (
        <Stack
        space="sm"
        axis="y">
            <Stack
            space="sm"
            axis="x">
                <TextField
                {...bind("jobTitle")}
                label="Jobbtitel"/>

                <TextField
                {...bind("employer")}
                label="Arbetsgivare"/>
            </Stack>

            <Stack
            space="sm"
            axis="x">
                <Stack
                space="xs"
                axis="x"
                css={{
                    alignItems: "flex-end"
                }}>
                    <TextField
                    {...bind("startDate")}
                    placeholder="Start datum"
                    label="Datum"/>

                    <TextField
                    placeholder="Slut datum"
                    {...bind("endDate")}/>
                </Stack>

                <TextField
                {...bind("city")}
                label="City"/>
            </Stack>

            <TextArea
            {...bind("description")}
            label="Beskrivning"
            placeholder="t.ex skapande och implementerade lektionsupplägg baserade på barnens intressen och nyfikenhet"/>
        </Stack>
    );
}