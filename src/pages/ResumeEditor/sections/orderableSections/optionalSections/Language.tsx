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
                axis="y">
                    <TextField
                    {...bind("language")}
                    label="Språk"/>

                    <Level
                    {...bind("level")}
                    label="Nivå"/>
                </Stack>
            )}/>

            <br/>
        </Box>
    ); 
}