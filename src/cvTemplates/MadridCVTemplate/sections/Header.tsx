import React from "react";

import { RootState } from "state";

import { mergeText } from "helpers";

import { View } from "@react-pdf/renderer";

import { 
    Display, 
    Title, 
    Text,
    Link
}
from "../components";




export const Header: React.FC<RootState["contactInformation"]> = state => {
    
    const space = (
        <View
        style={{
            marginTop: "2pt"
        }}/>
    );

    return (
        <>
            {(
                !!state.firstName
                || !!state.lastName
                || !!state.address
                || !!state.zipCode
                || !!state.city
                || !!state.country
                || !!state.jobTitle
                || !!state.email
                || !!state.mobileNumber
            ) &&
            <View
            wrap={false}
            style={{
                paddingBottom: "34pt",
                marginBottom: "17pt",
                backgroundColor: "#f9ee54",
            }}>
                <View
                style={{
                    display: "flex",
                    flexDirection: "row",
                }}>
                    {(
                        !!state.firstName
                        || !!state.lastName
                    ) && 
                    <View>
                        {!!state.firstName && 
                        <Display>
                            {state.firstName.toUpperCase()}
                        </Display>}
                        
                        {!!state.lastName && 
                        <Display>
                            {state.lastName.toUpperCase()}
                        </Display>}
                    </View>}

                    <View
                    style={{
                        width: "80pt"
                    }}/>

                    {(
                        !!state.address
                        || !!state.zipCode
                        || !!state.city
                        || !!state.country
                        || !!state.jobTitle
                        || !!state.email
                        || !!state.mobileNumber
                    ) &&
                    <View>
                        {!!state.jobTitle &&
                        <Title>
                            {state.jobTitle}
                        </Title>}

                        {(
                            !!state.address
                            || !!state.zipCode
                            || !!state.city
                            || !!state.country
                        ) &&
                        <>
                            {space}
                            <Text>
                                {mergeText(
                                    ", ",
                                    state.address,
                                    state.zipCode,
                                    state.city,
                                    state.country
                                )}
                            </Text>
                        </>}

                        {!!state.email &&
                        <>
                            {space}
                            <Link
                            url={`mailto:${state.email}`}>
                                {state.email}
                            </Link>
                        </>}

                        {!!state.mobileNumber &&
                        <>
                            {space}
                            <Text>
                                {state.mobileNumber}
                            </Text>
                        </>}
                    </View>}
                </View>

                <View
                style={{
                    position: "absolute",
                    backgroundColor: "#f9ee54",
                    height: "48.5pt",
                    left: 0,
                    right: 0,
                    top: 0,
                    marginTop: "-48.5pt"
                }}/>
                <View
                style={{
                    position: "absolute",
                    backgroundColor: "#f9ee54",
                    width: "48.5pt",
                    right: 0,
                    top: 0,
                    bottom: 0,
                    marginRight: "-48.5pt"
                }}/>
                <View
                style={{
                    position: "absolute",
                    backgroundColor: "#f9ee54",                    
                    width: "48.5pt",
                    left: 0,
                    top: 0,
                    bottom: 0,
                    marginLeft: "-48.5pt"
                }}/>
                <View
                style={{
                    position: "absolute",
                    backgroundColor: "#f9ee54",
                    width: "48.5pt",
                    height: "48.5pt",
                    marginLeft: "-48.5pt",
                    marginTop: "-48.5pt"
                }}/>
                <View
                style={{
                    position: "absolute",
                    backgroundColor: "#f9ee54",
                    width: "48.5pt",
                    height: "48.5pt",
                    right: 0,
                    marginRight: "-48.5pt",
                    marginTop: "-48.5pt"
                }}/>
            </View>}
        </>
    );
}