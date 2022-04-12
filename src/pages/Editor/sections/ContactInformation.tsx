import { 
    Box,
    Stack, 
    Collapsible,
}
from "components/layout";

import {  
    EditText,
    Label,
    TextField
} 
from "components/form";

import { SubTitle } from "components/typography";

import { ThemedCSS } from "stitches";

import { useAppDispatch, useAppSelector } from "state";

import { contactInformation } from "state/slices";



const initialContactInformation = contactInformation.getInitialState();

export const ContactInformation: React.FC = () => {

    const gap: ThemedCSS["gap"] = "$6";

    const dispatch = useAppDispatch();

    const contactInformationState = useAppSelector(store => store.contactInformation);

    return (
        <Box
        css={{
            backgroundColor: "$inverted",
        }}>
            <SubTitle
            css={{
                marginBottom: "$8"
            }}>
                <EditText
                resetable={initialContactInformation.sectionTitle}
                value={contactInformationState.sectionTitle}
                onValueChange={value => dispatch(contactInformation.actions.setSectionTitle(value))}/>
            </SubTitle>

            <Stack
            orientation="vertical"
            css={{
                gap
            }}>
                <Stack
                fullX
                alignMain="start"
                alignCross="end"
                css={{
                    gap
                }}>
                    <Label
                    block
                    name="Jobbtitel"
                    orientation="vertical"
                    help={`Lägg till en titel som "Senior marknadsförare" eller "Försäljningsansvarig som kort beskriver din övergripande erfarenhet eller den typ av roll du söker."`}>
                        <TextField
                        size="lg"
                        placeholder="t.ex lärare"
                        value={contactInformationState.jobTitle}
                        onValueChange={value => dispatch(contactInformation.actions.setJobTitle(value))}/>
                    </Label>
                </Stack>

                <Stack
                fullX
                alignMain="start"
                alignCross="end"
                css={{
                    gap
                }}>
                    <Label
                    block
                    name="Förnamn"
                    orientation="vertical">
                        <TextField
                        size="lg"
                        value={contactInformationState.firstName}
                        onValueChange={value => dispatch(contactInformation.actions.setFirstName(value))}/>
                    </Label>

                    <Label
                    block
                    name="Efternamn"
                    orientation="vertical">
                        <TextField
                        size="lg"
                        value={contactInformationState.lastName}
                        onValueChange={value => dispatch(contactInformation.actions.setLastName(value))}/>
                    </Label>
                </Stack>

                <Collapsible
                size="lg"
                space="$6"
                name="Vissa extra uppgifter">
                    <Stack 
                    orientation="vertical"
                    css={{
                        gap
                    }}>
                        <Stack
                        fullX
                        alignMain="start"
                        alignCross="end"
                        css={{
                            gap
                        }}>
                            <Label
                            block
                            name="E-post"
                            orientation="vertical">
                                <TextField
                                autoFocus
                                size="lg"
                                value={contactInformationState.email}
                                onValueChange={value => dispatch(contactInformation.actions.setEmail(value))}/>
                            </Label>

                            <Label
                            block
                            name="Telefon"
                            orientation="vertical">
                                <TextField
                                size="lg"
                                value={contactInformationState.mobileNumber}
                                onValueChange={value => dispatch(contactInformation.actions.setMobileNumber(value))}/>
                            </Label>
                        </Stack>

                        <Stack
                        fullX
                        alignMain="start"
                        alignCross="end"
                        css={{
                            gap
                        }}>
                            <Label
                            block
                            name="Land"
                            orientation="vertical">
                                <TextField
                                size="lg"
                                value={contactInformationState.country}
                                onValueChange={value => dispatch(contactInformation.actions.setCountry(value))}/>
                            </Label>

                            <Label
                            block
                            name="Stad"
                            orientation="vertical">
                                <TextField
                                size="lg"
                                value={contactInformationState.city}
                                onValueChange={value => dispatch(contactInformation.actions.setCity(value))}/>
                            </Label>
                        </Stack>

                        <Stack
                        fullX
                        alignMain="start"
                        alignCross="end"
                        css={{
                            gap
                        }}>
                            <Label
                            block
                            name="Adress"
                            orientation="vertical">
                                <TextField
                                size="lg"
                                value={contactInformationState.address}
                                onValueChange={value => dispatch(contactInformation.actions.setAddress(value))}/>
                            </Label>

                            <Label
                            block
                            name="Postnummer"
                            orientation="vertical">
                                <TextField
                                size="lg"
                                value={contactInformationState.zipCode}
                                onValueChange={value => dispatch(contactInformation.actions.setZipCode(value))}/>
                            </Label>
                        </Stack>

                        <Stack
                        fullX
                        alignMain="start"
                        alignCross="end"
                        css={{
                            gap
                        }}>
                            <Label
                            block
                            name="Körkort"
                            orientation="vertical"
                            help="Lägg till denna del om ditt yrke kräver en vis typ av körkort. Lämna anars fältet tomt.">
                                <TextField
                                size="lg"
                                value={contactInformationState.driverLicense}
                                onValueChange={value => dispatch(contactInformation.actions.setDriverLicense(value))}/>
                            </Label>

                            <Label
                            block
                            name="Nationalitet"
                            orientation="vertical"
                            help="Lägg bara till din nationalitet om det är ett relevant krav för tjänsten. I de flesta fall kan du lämna det tomt.">
                                <TextField
                                size="lg"
                                value={contactInformationState.nationality}
                                onValueChange={value => dispatch(contactInformation.actions.setNationality(value))}/>
                            </Label>
                        </Stack>

                        <Stack
                        fullX
                        alignMain="start"
                        alignCross="end"
                        css={{
                            gap
                        }}>
                            <Label
                            block
                            name="Födelseort"
                            orientation="vertical">
                                <TextField
                                size="lg"
                                value={contactInformationState.birthPlace}
                                onValueChange={value => dispatch(contactInformation.actions.setBirthPlace(value))}/>
                            </Label>

                            <Label
                            block
                            name="Födelsedatum"
                            orientation="vertical"
                            help="Lägg bara till det födelsedatum om det är ett relevant krav för tjänsten. I de flesta fall kan du lämna fältet tomt.">
                                <TextField
                                size="lg"
                                value={contactInformationState.birthDate}
                                onValueChange={value => dispatch(contactInformation.actions.setBirthDate(value))}/>
                            </Label>
                        </Stack>
                    </Stack>
                </Collapsible>
            </Stack>
        </Box>
    );
}