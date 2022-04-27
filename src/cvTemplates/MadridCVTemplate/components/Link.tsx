import React from "react";

import { Link as PDFLink } from "@react-pdf/renderer";

import { montserratFont } from "assets/pdfFonts";



export type LinkProps = {
    url: string;
}

export const Link: React.FC<LinkProps> = props => {

    return (
        <PDFLink
        style={{
            fontWeight: 300,
            fontSize: "10pt",
            fontFamily: montserratFont,
            textDecorationColor: "black",
            color: "black"
        }}
        src={props.url}>
            {props.children}
        </PDFLink>
    );
}