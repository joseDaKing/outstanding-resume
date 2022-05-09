import { View } from "@react-pdf/renderer";

import { mergeText } from "helpers";

import React from "react";

import { RootState } from "state";

import { Items } from "./components";



export const WorkExperience: React.FC<RootState["workExperience"]> = state => {

    return (
        <View
        wrap={false}>
            <View
            style={{
                marginTop: "22pt"
            }}/>

            <Items
            sectionTitle={state.sectionTitle}
            items={state.items.map(item => ({
                id: item.id,
                title: mergeText(
                    ", ",
                    item.jobTitle,
                    item.employer,
                    item.city
                ),
                text: item.description,
                date: item.date
            }))}/>
        </View>
    );
}