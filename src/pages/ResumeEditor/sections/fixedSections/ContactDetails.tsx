import React from "react";

import { TextField } from "../../../../components/form";

import { Box, Stack } from "../../../../components/layout";
import { Disclosure } from "../../../../components/misc";

import { FixedSectionTitleContainer } from "../../../../containers";

import { useAppDispatch, useAppSelector } from "../../../../store";

import { contactDetails } from "../../../../store/slices/fixedSections/contactDetails";

import { Bind } from "../../../../types";

export const ContactDetails: React.FC = () => {

    const bind = useBind();
    
    return (
        <Box>
            <FixedSectionTitleContainer
            section="contact-details"/>

            <Stack
            space="sm"
            axis="y">
                <TextField
                {...bind("jobTitle")}
                label="Jobbtitel"/>

                <Stack
                space="sm"
                axis="x">
                    <TextField
                    {...bind("firstName")}
                    label="Förnamn"/>

                    <TextField
                    {...bind("lastName")}
                    label="Efternamn"/>
                </Stack>

                <Stack
                space="sm"
                axis="x">
                    <TextField
                    {...bind("email")}
                    label="E-post"/>

                    <TextField
                    {...bind("mobilenumber")}
                    label="Telefon"/>
                </Stack>

                <Disclosure
                label="Visa extra uppgifter">
                    <Stack
                    space="sm"
                    axis="y">
                        <Stack
                        space="sm"
                        axis="x">
                            <TextField
                            {...bind("country")}
                            label="Land"/>

                            <TextField
                            {...bind("city")}
                            label="City"/>
                        </Stack>

                        <Stack
                        space="sm"
                        axis="x">
                            <TextField
                            {...bind("address")}
                            label="Adress"/>

                            <TextField
                            {...bind("zipCode")}
                            label="Postnummer"/>
                        </Stack>

                        <Stack
                        space="sm"
                        axis="x">
                            <TextField
                            {...bind("driverLicense")}
                            label="Körkort"/>

                            <TextField
                            {...bind("nationality")}
                            label="Nationalitet"/>
                        </Stack>

                        <Stack
                        space="sm"
                        axis="x">
                            <TextField
                            {...bind("birthPlace")}
                            label="Födelseort"/>

                            <TextField
                            {...bind("birthDate")}
                            label="Födelsedatum"/>
                        </Stack>
                    </Stack>
                </Disclosure>
            </Stack>
        </Box>
    );
}

const contactDetailsActions = contactDetails.slice.actions;

function useBind(): Bind<(typeof contactDetails.initialState.fields)> {

    const dispatch = useAppDispatch();

    const fields = useAppSelector(store => store["contact-details"].fields);

    function bindField<K extends keyof typeof fields>(field: K) {

        return {
            value: fields[field],
            onChange: (value: (typeof fields)[K]) => dispatch(contactDetailsActions.change({
                [field]: value
            }))
        };
        
    }

    return bindField;
}