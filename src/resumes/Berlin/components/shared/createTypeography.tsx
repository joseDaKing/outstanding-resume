import React from "react";

import ReactPDF, { Text } from "@react-pdf/renderer";

import { theme } from "../../theme";

export interface ITypeographyProps {
    gutter?: keyof typeof theme.spacings;
    children: string;
}

export const createTypeography = (style: ReactPDF.Styles[""]): React.FC<ITypeographyProps> => ({ gutter, children }) => {
    
    let marginBottom: number = 0;

    if (gutter) {

        marginBottom = theme.spacings[gutter];
    }

    return (
        <Text
        style={{
            ...style,
            marginBottom
        }}>
            {children}
        </Text>
    );
}