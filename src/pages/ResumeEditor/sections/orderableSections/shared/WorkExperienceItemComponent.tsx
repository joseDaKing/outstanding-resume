import { TextArea, TextField } from "../../../../../components/form";

import { Stack } from "../../../../../components/layout";

import { ItemComponent } from "../../../../../containers";

export const WorkExperienceItemComponent: ItemComponent<"work-experience"> = ({ bind }) => {

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
                axis="x">
                    <TextField
                    {...bind("startDate")}
                    label="Start- och slutdatum"/>

                    <TextField
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