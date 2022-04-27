import { mergeText } from "helpers";

import React from "react";

import { RootState } from "state";

import { ItemsSection } from "../components";



export const References: React.FC<RootState["references"]> = state => {

    return (
        <>
            {!state.isHidingReferences &&
            <ItemsSection
            items={state.items}
            sectionTitle={state.sectionTitle}
            itemFilterer={({ nameOfTheReferenced }) => !!nameOfTheReferenced}
            itemRenderer={({ 
                nameOfTheReferenced,
                company,
                email,
                mobileNumber
            }) => ({
                title: mergeText(
                    ", ",
                    nameOfTheReferenced,
                    company
                ),
                text: mergeText(
                    " | ",
                    email,
                    mobileNumber
                )
            })}/>}
        </>
    );
}