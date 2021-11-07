
import { EditText } from "../components/form";

import { Title } from "../components/typography";

import { RootState, useAppSelector } from "../store";

import { slices } from "../store/slices";

type SectionNameContainerProps<T extends keyof RootState> = {
    section: T;
}

export function SectionNameContainer<T extends Exclude<keyof RootState, "section-order">>({ section }: SectionNameContainerProps<T>) {

    const sectionName = useAppSelector(state => state[section].sectionName);
    
    const actions = slices[section].actions;

    const onChangeHandler = (sectionName: string) => actions.setSectionName(sectionName);

    return (
        <Title>
            <EditText
            onChange={onChangeHandler}
            value={sectionName}/>
        </Title>
    );
}