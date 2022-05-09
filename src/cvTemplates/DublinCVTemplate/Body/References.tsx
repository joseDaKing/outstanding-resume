import { View } from "@react-pdf/renderer";
import { mergeText } from "helpers";

import React from "react";

import { RootState } from "state";

import { Items } from "./components";



export const References: React.FC<RootState["references"]> = state => {

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
                    " from ",
                    item.nameOfTheReferenced,
                    item.company
                ),
                text: mergeText(
                    " | ",
                    item.email,
                    item.mobileNumber
                ),
            }))}/>
        </View>
    );
}