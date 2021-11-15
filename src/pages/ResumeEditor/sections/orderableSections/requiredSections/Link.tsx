import React from "react";

import { TextField } from "../../../../../components/form";

import { Box, Stack } from "../../../../../components/layout";

import { useReorderItem } from "../../../../../components/misc";

import { ItemsContainer, RequiredSectionTitleContainer } from "../../../../../containers";

import { link } from "../../../../../store/slices/orderableSections/required/link";

import { Bind } from "../../../../../types";

const linkLabel = ({ label }: typeof link["initialItem"]) => label || "(Ej specificerat)";

const LinkItem: React.FC<{ bind: Bind<typeof link["initialItem"]>}> = ({ bind }) => {

    return (
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
    );
}

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
            accordionLabel={linkLabel}
            Component={LinkItem}/>

            <br/>
        </Box>
    ); 
}