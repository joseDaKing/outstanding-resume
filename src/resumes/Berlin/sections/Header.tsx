import React from "react";

import { Text } from "@react-pdf/renderer";

import { IResumeTemplateProps } from "../../../components/misc";

import { HeaderTitle } from "../components";

import { theme } from "../theme";

export const Header: IResumeTemplateProps["Header"] = ({ 
    firstName, 
    lastName, 
    jobTitle 
}) => {

    const isFirstNameValid = !!firstName;

    const isLastNameValid = !!lastName;

    const isJobTitleValid = !!jobTitle;

    const isValid = isFirstNameValid || isLastNameValid || isJobTitleValid;

    return (
        <>
            {isValid && 
            <>
                {isFirstNameValid && 
                <HeaderTitle>
                    {firstName}
                </HeaderTitle>}

                {isLastNameValid && 
                <HeaderTitle>
                    {lastName}
                </HeaderTitle>}

                {isJobTitleValid && 
                <Text 
                style={{
                    color: theme.colors.dark,
                    fontSize: 12,
                    marginTop: theme.spacings.sm
                }}>
                    {jobTitle}
                </Text>}
            </>}
        </>
    );
};