import React from "react";

import { Text, View } from "@react-pdf/renderer";

import { montserratFont } from "assets/pdfFonts";



export const SectionTitle: React.FC = props => {

    return (
        <View>
            <View
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
            }}>
                <Text
                style={{
                    fontWeight: 500,
                    fontSize: "12pt",
                    fontFamily: montserratFont,
                    backgroundColor: "black",
                    color: "white",
                    paddingVertical: "2pt",
                    paddingHorizontal: "4pt"
                }}>
                    {typeof props.children === "string" ? props.children.toUpperCase() : props.children}
                </Text>
            </View>
            <View
            style={{
                marginBottom: "8pt"
            }}/>
        </View>
    );
}