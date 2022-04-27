import React from "react";

import { montserratFont } from "assets/pdfFonts";

import { Text as PDFText } from "@react-pdf/renderer";



export const Text: React.FC = props => {

    return (
        <PDFText
        style={{
            fontWeight: 300,
            fontSize: "11pt",
            fontFamily: montserratFont,
        }}>
            {props.children}
        </PDFText>
    );
}