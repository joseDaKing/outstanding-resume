import React from "react";

import { View, Text } from "@react-pdf/renderer";

import { theme } from "../theme";

import { ITypeographyProps } from "./shared";

export const SectionTitle: React.FC<ITypeographyProps> = ({ children, gutter }) => {

    let space = 0;

    if (gutter) {

        space = theme.spacings[gutter];
    }

    return (
        <View
        style={{
            marginBottom: space
        }}>
            <Text 
            style={{
                color: theme.colors.dark,
                letterSpacing: 1.5
            }}>
                {children}
            </Text>

            <View
            style={{
                width: 24,
                marginTop: theme.spacings.xs,
                paddingTop: 2,
                backgroundColor: theme.colors.dark
            }}/>
        </View>
    );
}