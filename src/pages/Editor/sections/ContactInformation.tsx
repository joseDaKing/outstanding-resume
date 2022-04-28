import { 
    Box,
    Stack, 
    Collapsible,
}
from "components/layout";

import {  
    EditText,
    Label,
    TextField,
    TextFieldProps
} 
from "components/form";

import { SubTitle } from "components/typography";

import { ThemedCSS } from "stitches";

import { RootState, useAppDispatch, useAppSelector } from "state";

import { contactInformation } from "state/slices";



const initialContactInformation = contactInformation.getInitialState();

const createBinding = (field: keyof RootState["contactInformation"]): React.FC<Omit<TextFieldProps, "value" | "defaultValue" | "onValueChange">> => props => {

    const value = useAppSelector(store => store.contactInformation[field]);

    const dispatch = useAppDispatch();

    const actionName = `set${field[0].toUpperCase()}${field.slice(1)}` as `set${Capitalize<typeof field>}`;

    const action = contactInformation.actions[actionName];

    return (
        <TextField
        {...props}
        value={value}
        onValueChange={value => dispatch(action(value))}/>
    );
}

const JobTitle = createBinding("jobTitle");

const FirstName = createBinding("firstName");

const LastName = createBinding("lastName");

const Email = createBinding("email");

const MobileNumber = createBinding("mobileNumber");

const Country = createBinding("country");

const City = createBinding("city");

const Adress = createBinding("address");

const ZipCode = createBinding("zipCode");

const DriverLicense = createBinding("driverLicense");

const Nationality = createBinding("nationality");

const BirthPlace = createBinding("birthPlace");

const BirthDate = createBinding("birthDate");

const gap: ThemedCSS["gap"] = "$6";

const ContactInformationHeader: React.FC = () => {

    const dispatch = useAppDispatch();

    const sectionTitle = useAppSelector(store => store.contactInformation.sectionTitle);

    return (
        <SubTitle
        css={{
            marginBottom: "$8"
        }}>
            <EditText
            resetable={initialContactInformation.sectionTitle}
            value={sectionTitle}
            onValueChange={value => dispatch(contactInformation.actions.setSectionTitle(value))}/>
        </SubTitle>
    );
}

export const ContactInformation: React.FC = () => {

    return (
        <Box
        css={{
            backgroundColor: "$inverted",
        }}>
            <ContactInformationHeader/>

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
                        <JobTitle
                        size="lg"
                        placeholder="t.ex lärare"/>
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
                        <FirstName
                        size="lg"/>
                    </Label>

                    <Label
                    block
                    name="Efternamn"
                    orientation="vertical">
                        <LastName
                        size="lg"/>
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
                                <Email
                                size="lg"/>
                            </Label>

                            <Label
                            block
                            name="Telefon"
                            orientation="vertical">
                                <MobileNumber
                                size="lg"/>
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
                                <Country
                                size="lg"/>
                            </Label>

                            <Label
                            block
                            name="Stad"
                            orientation="vertical">
                                <City
                                size="lg"/>
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
                                <Adress
                                size="lg"/>
                            </Label>

                            <Label
                            block
                            name="Postnummer"
                            orientation="vertical">
                                <ZipCode
                                size="lg"/>
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
                                <DriverLicense
                                size="lg"/>
                            </Label>

                            <Label
                            block
                            name="Nationalitet"
                            orientation="vertical"
                            help="Lägg bara till din nationalitet om det är ett relevant krav för tjänsten. I de flesta fall kan du lämna det tomt.">
                                <Nationality
                                size="lg"/>
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
                                <BirthPlace
                                size="lg"/>
                            </Label>

                            <Label
                            block
                            name="Födelsedatum"
                            orientation="vertical"
                            help="Lägg bara till det födelsedatum om det är ett relevant krav för tjänsten. I de flesta fall kan du lämna fältet tomt.">
                                <BirthDate
                                size="lg"/>
                            </Label>
                        </Stack>
                    </Stack>
                </Collapsible>
            </Stack>
        </Box>
    );
}