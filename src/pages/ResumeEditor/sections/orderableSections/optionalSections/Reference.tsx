import React from "react";

import { Switch, TextField } from "../../../../../components/form";

import { Box, Stack } from "../../../../../components/layout";

import { useReorderItem } from "../../../../../components/misc";

import { ItemsContainer, OptionalSectionTitleContainer } from "../../../../../containers";

import { useAppDispatch, useAppSelector } from "../../../../../store";

import { reference } from "../../../../../store/slices/orderableSections/optional/reference";

import { Bind } from "../../../../../types";

const referenceLabel = ({ personName, company }: typeof reference["initialItem"]) => {
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
}

const CourseItem: React.FC<{ bind: Bind<typeof reference["initialItem"]> }> = ({ bind }) => {

    return (
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
    );
}

export const Reference: React.FC = () => {

    const { containerProps } = useReorderItem();

    const dispatch = useAppDispatch();

    const shouldHideReference = useAppSelector(store => store.reference.hide);

    const hasItems = useAppSelector(store => Object.values(store.reference.items).length !== 0); 

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
            accordionLabel={referenceLabel}
            Component={CourseItem}/>

            <br/>
        </Box>
    ); 
}