import React from "react";

import { Text } from "@react-pdf/renderer";

import { ResumeTemplateProps } from "../../../components/misc";

export const Header: ResumeTemplateProps["Header"] = ({ 
    firstName, 
    lastName, 
    jobTitle 
}) => {
    return (
        <Text
        style={{
            fontSize: 48
        }}>
            {firstName}
        </Text>
    );
};