import React from "react";

import { TextField } from "../../../../../components/form";

import { Box, Stack } from "../../../../../components/layout";

import { useReorderItem } from "../../../../../components/misc";

import { ItemsContainer, RequiredSectionTitleContainer } from "../../../../../containers";

export const Link: React.FC = () => {

    const { containerProps } = useReorderItem();

    return (
        <Box
        {...containerProps}>
            <RequiredSectionTitleContainer
            section="link"/>
            
            <ItemsContainer
            section="link"
            buttonLabel="Lägg till länk"
            accordionLabel={({ label }) => label}
            Component={({ bind }) => (
                <Stack
                axis="x"
                space="sm">
                    <TextField
                    {...bind("label")}
                    label="Etikett"/>

                    <TextField
                    {...bind("url")}
                    label="Länk"/>
                </Stack>
            )}/>
        </Box>
    ); 
}