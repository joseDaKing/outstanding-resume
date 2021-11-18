import { Text, Link } from "@react-pdf/renderer";

import React from "react";

import { theme } from "../theme";

import { ITypeographyProps } from "./shared";

interface ILinkProps extends ITypeographyProps {
    url: string;
}

const MyLink: React.FC<ILinkProps> = ({ children, gutter, url }) => {

    let marginBottom = 0;

    if (gutter) {

        marginBottom = theme.spacings[gutter];
    }

    return (
        <Text
        style={{
            fontSize: 8.5,
            marginBottom,
        }}>
            <Link 
            style={{
                color: theme.colors.dark,
                textDecorationStyle: "solid",
                textDecorationColor: theme.colors.dark,
                textDecoration: "underline"
            }}
            src={url}>
                {children}
            </Link>   
        </Text>
    );
}

export {
    MyLink as Link
}