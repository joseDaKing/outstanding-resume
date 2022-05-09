import { View } from "@react-pdf/renderer";

import { mergeText } from "helpers";

import React from "react";

import { RootState } from "state";

import { Items } from "./components";



export const Courses: React.FC<RootState["courses"]> = state => {

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
                    item.name,
                    item.institution
                ),
                date: item.date
            }))}/>
        </View>
    );
}