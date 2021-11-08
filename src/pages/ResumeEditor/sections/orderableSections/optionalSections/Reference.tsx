import React from "react";

import { Switch, TextField } from "../../../../../components/form";

import { Box, Stack } from "../../../../../components/layout";

import { useReorderItem } from "../../../../../components/misc";

import { ItemsContainer, OptionalSectionTitleContainer } from "../../../../../containers";

import { useAppDispatch, useAppSelector } from "../../../../../store";

import { reference } from "../../../../../store/slices/orderableSections/optional/reference";

export const Reference: React.FC = () => {

    const { containerProps } = useReorderItem();

    const dispatch = useAppDispatch();

    const {
        hide: shouldHideReference,
        items
    } = useAppSelector(store => store.reference);

    const hasItems = Object.values(items).length !== 0;

    const onChagneHandler = (value: boolean) => dispatch(reference.slice.actions.hideSection(value));

    return (
        <Box
        {...containerProps}>
            <OptionalSectionTitleContainer
            section="reference"/>
            
            {hasItems &&
            <Switch
            value={shouldHideReference}
            onChange={onChagneHandler}
            label="Jag vill dölja referenser och bara lämna in ut dem på begäran"/>}

            <ItemsContainer
            section="reference"
            buttonLabel="Lägg till referens"
            accordionLabel={({ personName, company }) => {
                if (personName && company) {

                    return `${personName} på ${company}`;
                }
                else if (personName) {

                    return personName;
                }
                else if (company) {

                    return company;
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
                    axis="x">
                        <TextField
                        {...bind("personName")}
                        label="Referentens fullständiga namn"/>

                        <TextField
                        {...bind("company")}
                        label="Företag"/>
                    </Stack>

                    <Stack
                    space="sm"
                    axis="x">
                        <TextField
                        {...bind("mobilenumber")}
                        label="Telefon"/>

                        <TextField
                        {...bind("email")}
                        label="E-posst"/>
                    </Stack>
                </Stack>
            )}/>
        </Box>
    ); 
}