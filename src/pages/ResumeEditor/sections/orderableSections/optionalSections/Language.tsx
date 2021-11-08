import React from "react";

import { Level, TextField } from "../../../../../components/form";

import { Box, Stack } from "../../../../../components/layout";

import { useReorderItem } from "../../../../../components/misc";

import { ItemsContainer, OptionalSectionTitleContainer } from "../../../../../containers";

export const Language: React.FC = () => {

    const { containerProps } = useReorderItem();

    return (
        <Box
        {...containerProps}>
            <OptionalSectionTitleContainer
            section="language"/>
            
            <ItemsContainer
            section="language"
            buttonLabel="Lägg till språk"
            accordionLabel={({ language }) => language || "(Ej specificerat)"}
            Component={({ bind }) => (
                <Stack
                space="sm"
                axis="x">
                    <TextField
                    {...bind("language")}
                    label="Språk"/>

                    <Level
                    {...bind("level")}
                    levels={{
                        0: "Nybörjare",
                        1: "Nybörjare",
                        2: "Skicklig",
                        3: "Erfaren",
                        4: "Expert",
                    }}
                    label="Nivå"/>
                </Stack>
            )}/>

            <br/>
        </Box>
    ); 
}