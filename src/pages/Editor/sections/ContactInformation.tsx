import { 
    Box,
    Stack, 
    Collapsible,
}
from "components/layout";

import {  
    EditText,
    ImageUpload,
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

const Address = createBinding("address");

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

const PortraitImageUploader: React.FC = () => {

    const dispatch = useAppDispatch();

    const image = useAppSelector(store => store.contactInformation.imageUrl);

    return (
        <ImageUpload
        value={image}
        onValueChange={image => dispatch(contactInformation.actions.setImageUrl(image))}/>
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
                    name="Job title"
                    orientation="vertical"
                    help={`Add a title like "Senior Marketer" or "Sales Manager that briefly describes your overall experience or the type of role you are looking for."`}>
                        <JobTitle
                        size="lg"
                        placeholder="eg teachers"/>
                    </Label>

                    <Box
                    css={{
                        width: "100%",
                        flexShrink: 1
                    }}>
                        <PortraitImageUploader/>
                    </Box>
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
                    name="First name"
                    orientation="vertical">
                        <FirstName
                        size="lg"/>
                    </Label>

                    <Label
                    block
                    name="Surname"
                    orientation="vertical">
                        <LastName
                        size="lg"/>
                    </Label>
                </Stack>

                <Collapsible
                size="lg"
                space="$6"
                name="View extra details">
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
                            name="Email"
                            orientation="vertical">
                                <Email
                                autoFocus
                                size="lg"/>
                            </Label>

                            <Label
                            block
                            name="Mobilenumber"
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
                            name="Country"
                            orientation="vertical">
                                <Country
                                size="lg"/>
                            </Label>

                            <Label
                            block
                            name="City"
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
                            name="Address"
                            orientation="vertical">
                                <Address
                                size="lg"/>
                            </Label>

                            <Label
                            block
                            name="ZIP code"
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
                            name="Driver license"
                            orientation="vertical"
                            help="Add this part if your profession requires a certain type of driver's license. Otherwise leave the field blank.">
                                <DriverLicense
                                size="lg"/>
                            </Label>

                            <Label
                            block
                            name="Nationality"
                            orientation="vertical"
                            help="Only add your nationality if it is a relevant requirement for the service. In most cases, you can leave it blank.">
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
                            name="Birthplace"
                            orientation="vertical">
                                <BirthPlace
                                size="lg"/>
                            </Label>

                            <Label
                            block
                            name="Birth date"
                            orientation="vertical"
                            help="Only add the date of birth if it is a relevant requirement for the service. In most cases, you can leave the field blank.">
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