import React from "react";

import { isStrArrayValid } from "../../../utilities";

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

    const isValid = isStrArrayValid(Object.values(rest));

    return (
        <>
            {isValid &&
            <View style={style}>
                <ContactDetails {...contactDetailsProps}/>
            </View>}
        </>
    );
};