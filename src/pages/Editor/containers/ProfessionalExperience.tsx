import React from "react";

import { Box } from "components/layout";

import {  
    EditText,
    TextArea
} 
from "components/form";

import {
    Text,
    SubTitle
}
from "components/typography";



export const ProfessionalExperience: React.FC = () => {

    return (
        <Box>
            <SubTitle
            css={{
                marginBottom: "$8"
            }}>
                <EditText
                resetable="Yrkeserfarenhet"
                defaultValue="Yrkeserfarenhet"/>
            </SubTitle>

            <Text
            css={{
                marginBottom: "$6"
            }}>
                Skriv 2-3 tydliga meningar om din allmänna erfarenhet
            </Text>

            <TextArea block/>
        </Box>
    );
}