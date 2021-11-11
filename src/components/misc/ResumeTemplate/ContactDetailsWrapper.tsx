import React from "react";

import { View } from "@react-pdf/renderer";

import { useAppSelector } from "../../../store";

import { StyleProp, useResumeTemplateContext } from "./shared";

export const ContactDetailsWrapper: React.FC<StyleProp> = ({ style }) => {

    const contactDetailsProps = useAppSelector(store => {
        const {
            sectionName,
            fields: {
                firstName,
                lastName,
                jobTitle,
                ...rest
            }
        } = store["contact-details"];

        return {
            ...rest,
            sectionName
        }
    });

    const { ContactDetails } = useResumeTemplateContext();

    return (
        <View style={style}>
            <ContactDetails {...contactDetailsProps}/>
        </View>
    );
}