import React from "react";

import { View } from "@react-pdf/renderer";

import { StyleProp, useResumeTemplateContext } from "./shared";

export const ContactDetailsWrapper: React.FC<StyleProp> = ({ style }) => {

    const { ContactDetails, state } = useResumeTemplateContext();

    const {
        sectionName,
        fields: {
            firstName,
            lastName,
            jobTitle,
            ...rest
        }
    } = state["contact-details"];

    const contactDetailsProps = {
        sectionName,
        ...rest
    }

    return (
        <View style={style}>
            <ContactDetails {...contactDetailsProps}/>
        </View>
    );
}