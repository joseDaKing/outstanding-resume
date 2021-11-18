import { View } from "@react-pdf/renderer";
import React from "react";

import { IResumeTemplateProps } from "../../../components/misc";

import { SectionTitle, Seperator, SubTitle, Date, Text, Link } from "../components";

export const Reference: IResumeTemplateProps["Reference"] = ({ 
    sectionName, 
    Items 
}) => {
    return (
        <>
            <Seperator
            axis="y"
            size="md"/>

            <SectionTitle
            gutter="sm">
                {sectionName}
            </SectionTitle>

            <Items>
                {({ 
                    id,
                    personName, 
                    company, 
                    mobilenumber, 
                    email
                }) => (
                    <View 
                    key={id}>
                        <SubTitle
                        gutter="xss">
                            {personName}
                        </SubTitle>

                        <Date
                        gutter="xs">
                            {company}
                        </Date>

                        <Link 
                        gutter="xss"
                        url={`mailto:${email}`}>
                            {email}
                        </Link>

                        <Text>
                            {mobilenumber}
                        </Text>
                    </View>
                )}
            </Items>
        </>
    );
}