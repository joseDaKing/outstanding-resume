import { RootState } from "state";

import { Levels } from "./components";

export const Languages: React.FC<RootState["languages"]> = props => {

    return (
        <Levels
        maxLevel={5}
        sectionTitle={props.sectionTitle}
        items={props.items.map(item => ({
            id: item.id,
            name: item.language,
            level: item.level
        }))}/>
    );
}