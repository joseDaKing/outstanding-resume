import React from "react";

import { Stack, Box } from "../../components/layout";

import { Title } from "../../components/typography";

import { TextField, EditText } from "../../components/form";

import { Disclosure } from "../../components/misc";

import { 
    useAppSelector, 
    useAppDispatch, 
    contactDetails, 
    initialContactDetails 
}
from "../../store";

export const ContactDetails: React.FC = () => {

    const {
        jobTitle,
        firstName,
        lastName,
        email,
        mobilenumber,
        country,
        city,
        driverLicense,
        nationality,
        birthPlace,
        birthDate,
        sectionName
    } = useAppSelector(state => state.contactDetails);

    const dispatch = useAppDispatch();

    const onContactDetailSectionName = (sectionName: string) => dispatch(contactDetails.actions.change({
        sectionName
    }));

    const onContactDetailJobTitle = (jobTitle: string) => dispatch(contactDetails.actions.change({
        jobTitle
    }));

    const onContactDetailFirstName = (firstName: string) => dispatch(contactDetails.actions.change({
        firstName
    }));

    const onContactDetailLastName = (lastName: string) => dispatch(contactDetails.actions.change({
        lastName
    }));

    const onContactDetailEmail = (email: string) => dispatch(contactDetails.actions.change({
        email
    }));

    const onContactDetailMobilenumber = (mobilenumber: string) => dispatch(contactDetails.actions.change({
        mobilenumber
    }));

    const onContactDetailCountry = (country: string) => dispatch(contactDetails.actions.change({
        country
    }));

    const onContactDetailCity = (city: string) => dispatch(contactDetails.actions.change({
        city
    }));

    const onContactDetailDriverLicense = (driverLicense: string) => dispatch(contactDetails.actions.change({
        driverLicense
    }));

    const onContactDetailNationality = (nationality: string) => dispatch(contactDetails.actions.change({
        nationality
    }));

    const onContactDetailBirthPlace = (birthPlace: string) => dispatch(contactDetails.actions.change({
        birthPlace
    }));

    const onContactDetailBirthDate = (birthDate: string) => dispatch(contactDetails.actions.change({
        birthDate
    }));

    return (
        <Box>
            <Title gutter>
                <EditText
                onChange={onContactDetailSectionName}
                resetable={initialContactDetails.sectionName}
                value={sectionName}/>
            </Title>

            <Stack 
            axis="y" 
            space="md">
                <TextField
                value={jobTitle}
                label="Jobbtitel"
                onChange={onContactDetailJobTitle}
                placeholder="t.ex lärare"/>

                <Stack 
                axis="x" 
                space="md">
                    <TextField
                    value={firstName}
                    onChange={onContactDetailFirstName}
                    label="Förnamn"/>

                    <TextField
                    value={lastName}
                    onChange={onContactDetailLastName}
                    label="Efternamn"/>
                </Stack>

                <Stack 
                axis="x" 
                space="md">
                    <TextField
                    value={email}
                    onChange={onContactDetailEmail}
                    label="E-post"/>

                    <TextField
                    value={mobilenumber}
                    onChange={onContactDetailMobilenumber}
                    label="Telefon"/>
                </Stack>

                <Disclosure label="Vissa extra uppgifter">
                    <Stack
                    axis="y"
                    space="md">
                        <Stack 
                        axis="x"
                        space="md">
                            <TextField
                            value={country}
                            onChange={onContactDetailCountry}
                            label="Land"/>

                            <TextField
                            value={city}
                            onChange={onContactDetailCity}
                            label="Stad"/>
                        </Stack>

                        <Stack 
                        axis="x"
                        space="md">
                            <TextField
                            value={driverLicense}
                            onChange={onContactDetailDriverLicense}
                            label="Körkort"/>

                            <TextField
                            value={nationality}
                            onChange={onContactDetailNationality}
                            label="Nationalitet"/>
                        </Stack>

                        <Stack 
                        axis="x"
                        space="md">
                            <TextField
                            value={birthPlace}
                            onChange={onContactDetailBirthPlace}
                            label="Födelseort"/>

                            <TextField
                            value={birthDate}
                            onChange={onContactDetailBirthDate}
                            label="Födelsedatum"/>
                        </Stack>
                    </Stack>
                </Disclosure>
            </Stack>
        </Box>
    );
}