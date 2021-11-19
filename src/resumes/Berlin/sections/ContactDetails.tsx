import React from "react";

import { IResumeTemplateProps } from "../../../components/misc";
import { filterEmptyStr } from "../../../utilities";

import { SectionTitle, Text, SubTitle } from "../components";

export const ContactDetails: IResumeTemplateProps["ContactDetails"] = ({
    sectionName,
    email,
    mobilenumber,
    country,
    city,
    address,
    zipCode,
    driverLicense,
    nationality,
    birthDate,
    birthPlace,
}) => {

    const isEmailValid = !!email;

    const isMobilenumberValid = !!mobilenumber;

    const isCountryValid = !!country;

    const isCityValid = !!city;

    const isAddressValid = !!address;

    const isZipCodeValid = !!zipCode;

    const isDriverLicenseValid = !!driverLicense;

    const isNationalityValid = !!nationality;

    const isBirthDateValid = !!birthDate;

    const isBirthPlaceValid = !!birthPlace;

    const isAddressSectionValid = (
        isAddressValid 
        || isZipCodeValid
        || isCityValid
        || isCountryValid
    );

    const isBirtSectionValid = (
        isBirthDateValid 
        || isBirthPlaceValid
    );

    const isValid = (
        isEmailValid
        || isBirtSectionValid
        || isAddressSectionValid
        || isMobilenumberValid
        || isDriverLicenseValid
        || isNationalityValid
    );

    return (
        <>
            {isValid && 
            <>
                <SectionTitle 
                gutter="sm">
                    {sectionName}
                </SectionTitle>

                {isAddressSectionValid && 
                <>
                    <SubTitle 
                    gutter="xs">
                        ADRESS
                    </SubTitle>

                    {isAddressValid && 
                    <Text
                    gutter="xss">
                        {address}
                    </Text>}

                    {(zipCode || city) &&
                    <Text
                    gutter="xss">
                        {filterEmptyStr([zipCode, city]).join(", ")}
                    </Text>}

                    {isCountryValid &&
                    <Text
                    gutter="sm">
                        {country}
                    </Text>}
                </>}

                {isMobilenumberValid &&
                <>
                    <SubTitle
                    gutter="xs">
                        TELEFON
                    </SubTitle>
                    
                    <Text
                    gutter="sm">
                        {mobilenumber}
                    </Text>
                </>}

                {isBirtSectionValid &&
                <>
                    <SubTitle
                    gutter="xs">
                        DATUM / FÖDELSEORT
                    </SubTitle>

                    {isBirthDateValid &&
                    <Text
                    gutter="xss">
                        {birthDate}
                    </Text>}

                    {isBirthPlaceValid &&
                    <Text
                    gutter="sm">
                        {birthPlace}
                    </Text>}
                </>}

                {isDriverLicenseValid &&
                <>
                    <SubTitle
                    gutter="xs">
                        KÖRKORT
                    </SubTitle>
                    
                    <Text
                    gutter="sm">
                        {driverLicense}
                    </Text>
                </>}

                {isNationalityValid &&
                <>
                    <SubTitle
                    gutter="xs">
                        NATIONALITET
                    </SubTitle>
                    
                    <Text>
                        {nationality}
                    </Text>
                </>}
            </>}
        </>
    );
}