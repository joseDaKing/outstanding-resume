import React from "react";

import { montserratFont } from "assets/pdfFonts";

import { Text } from "@react-pdf/renderer";



export const Display: React.FC = props => {
    return (
        <Text
        style={{
            fontWeight: 500,
            fontSize: "28pt",
            fontFamily: montserratFont,
        }}>
            {props.children}
        </Text>
    );
}