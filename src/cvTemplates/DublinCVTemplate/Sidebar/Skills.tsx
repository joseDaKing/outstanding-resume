import { RootState } from "state";

import { Levels } from "./components";

export const Skills: React.FC<RootState["skills"]> = props => {

    return (
        <Levels
        maxLevel={5}
        sectionTitle={props.sectionTitle}
        hideLevel={props.isHidingLevel}
        items={props.items.map(item => ({
            ...item,
            level: item.level + 1
        }))}/>
    );
}