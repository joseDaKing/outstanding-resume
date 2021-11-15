import { Level, TextField } from "../../../../../components/form";

import { Stack } from "../../../../../components/layout";

import { ItemComponent } from "../../../../../containers";

export const SkillItem: ItemComponent<"skill"> = ({ bind }) => {

    return (
        <Stack
        space="sm"
        axis="x">
            <TextField
            {...bind("name")}
            label="Färdight"/>
    
            <Level
            {...bind("level")}
            levels={{
                0: "Nybörjare",
                1: "Nybörjare",
                2: "Skicklig",
                3: "Erfaren",
                4: "Expert",
            }}
            label="Nivå"/>
        </Stack>
    )
}