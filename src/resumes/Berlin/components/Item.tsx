import React from "react";

import { SubTitle } from "./SubTitle";

import { Text } from "./Text";

import { Date } from "./Date";

import { View } from "@react-pdf/renderer";


interface IITemProps {
    title: string;
    date: string;
    city?: string;
    description?: string;
}

export const Item: React.FC<IITemProps> = ({
    title,
    date,
    city,
    description
}) => {

    const isTitleValid = !!title;

    const isCityValid = !!city;

    const isDateValid = !!date;

    const isDescriptionValid = !!description;

    const isValid = (
        isTitleValid 
        || isCityValid 
        || isDateValid 
        || isDescriptionValid
    );

    return (
        <>
            {isValid &&
            <>
                {(isTitleValid || isCityValid) && 
                <View
                style={{
                    flexDirection: "row",
                    alignItems: "flex-start",
                    display: "flex"
                }}>
                    {isTitleValid &&
                    <SubTitle
                    gutter="xss">
                        {title}
                    </SubTitle>}

                    <View
                    style={{ 
                        margin: "auto" 
                    }}/>

                    {isCityValid &&
                    <Text>
                        {city}
                    </Text>}
                </View>}

                {isDateValid &&
                <Date
                gutter={typeof isDescriptionValid === "undefined" ? "sm" : "xs"}>
                    {date}
                </Date>}

                {isDescriptionValid &&
                <Text
                gutter="sm">
                    {description}
                </Text>}
            </>}
        </>
    );
}