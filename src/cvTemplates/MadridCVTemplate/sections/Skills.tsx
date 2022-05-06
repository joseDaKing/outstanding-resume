import React from "react";

import { RootState } from "state";

import { LevelSections } from "../components";



const maxLevel = 4;

export const Skills: React.FC<RootState["skills"]> = props => {

    return (
        <LevelSections
        sectionTitle={props.sectionTitle}
        maxLevel={maxLevel + 1}
        filterItems={({ name }) => !!name}
        itemToLevel={({ level, name }) => ({
            level: level + 1,
            name
        })}
        hideLevel={props.isHidingLevel}
        items={props.items}/>
    );
}