import React from "react";

import { Text } from "@react-pdf/renderer";

import { montserratFont } from "assets/pdfFonts";



export const Title: React.FC = props => {

    return (
        <Text
        style={{
            fontWeight: 500,
            fontSize: "12pt",
            fontFamily: montserratFont,
        }}>
            {props.children}
        </Text>
    );
}