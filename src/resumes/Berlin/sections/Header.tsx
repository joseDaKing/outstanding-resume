import React from "react";

import { View, Text } from "@react-pdf/renderer";

import { IResumeTemplateProps } from "../../../components/misc";

export const Header: IResumeTemplateProps["Header"] = ({ 
    firstName, 
    lastName, 
    jobTitle 
}) => {

    return (
        <View>
            <Text>
                {firstName}
            </Text>

            <Text>
                {lastName}
            </Text>
        </View>
    );
};