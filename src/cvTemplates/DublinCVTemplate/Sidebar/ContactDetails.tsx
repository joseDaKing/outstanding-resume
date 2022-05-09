import { RootState } from "state";

import { View } from "@react-pdf/renderer";

import { 
    Text,
    Label,
    SectionTitle
}
from "./components";

import { mergeText } from "helpers";



export const ContactDetails: React.FC<RootState["contactInformation"]> = state => {

    const space = (
        <View
        style={{
            marginTop: "2pt"
        }}/>
    );

    const space2 = (
        <View
        style={{
            marginTop: "8pt"
        }}/>
    );

    return (
        <>
            {(
                !!state.address
                || !!state.zipCode
                || !!state.city
                || !!state.country
                || !!state.mobileNumber
                || !!state.email
            ) &&
            <View
            wrap={false}>
                <View
                style={{
                    marginTop: "18pt"
                }}/>

                <SectionTitle>
                    {state.sectionTitle}
                </SectionTitle>

                {!!state.address &&
                <>
                    {space}
                    <Text>
                        {state.address}
                    </Text>
                </>}

                {(
                    !!state.zipCode
                    || !!state.city
                ) &&
                <>
                    {space}
                    <Text>
                        {mergeText(
                            ", ", 
                            state.zipCode, 
                            state.city
                        )}
                    </Text>
                </>}

                {!!state.country &&
                <>
                    {space}
                    <Text>
                        {state.country}
                    </Text>
                </>}

                {!!state.mobileNumber &&
                <>
                    {space}
                    <Text>
                        {state.mobileNumber}
                    </Text>
                </>}

                {!!state.email &&
                <>
                    {space}
                    <Text>
                        {state.email}
                    </Text>
                </>}

                {!!state.nationality &&
                <>
                    {space2}
                    <Label>
                        NATIONALITY
                    </Label>

                    {space}
                    <Text>
                        {state.nationality}
                    </Text>
                </>}

                {!!state.driverLicense &&
                <>
                    {space2}
                    <Label>
                        DRIVER LICENSE
                    </Label>

                    {space}
                    <Text>
                        {state.driverLicense}
                    </Text>
                </>}

                {(
                    !!state.birthDate
                    || !!state.birthPlace
                ) &&
                <>
                    {space2}
                    <Label>
                        {mergeText(
                            " / ",
                            "BIRTHDATE",
                            "BIRTHPLACE"
                        )}
                    </Label>

                    {!!state.birthDate &&
                    <>
                        {space}
                        <Text>
                            {state.birthDate}
                        </Text>
                    </>}

                    {!!state.birthPlace &&
                    <>
                        {space}
                        <Text>
                            {state.birthPlace}
                        </Text>
                    </>}
                </>}
            </View>}
        </>
    );
}