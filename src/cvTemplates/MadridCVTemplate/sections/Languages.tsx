import React from "react";

import { RootState } from "state";

import { LevelSections } from "../components";



const maxLevel = 5;

export const Languages: React.FC<RootState["languages"]> = props => {

    return (
        <LevelSections
        sectionTitle={props.sectionTitle}
        maxLevel={maxLevel}
        filterItems={({ language }) => !!language}
        itemToLevel={({ language, level }) => ({
            level,
            name: language
        })}
        items={props.items}/>
    );
}