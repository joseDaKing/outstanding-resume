import React from "react";

import { Stack } from "../components/layout";

import { Accordion, List, ListItemComponentProps } from "../components/misc";

import { RootState, useAppDispatch, useAppSelector } from "../store";

import { slices } from "../store/slices";

import { Section } from "../types";

import { withId } from "../utilities";

type Item<T extends keyof RootState> = (
    RootState[T] extends Section ?
        RootState[T]["items"][""]
    : never
);

interface IItemsContainer<T extends keyof RootState> {
    section: T;
    buttonLabel: string;
    accordionLabel: ((props: Item<T>) => string);
    Component: React.FC<ItemComponent<T>>;
}

type ItemComponent<T extends keyof RootState> = ListItemComponentProps<Item<T>> & {
    updateField: UpdateField<T>;
};

type UpdateField<T extends keyof RootState> = <K extends keyof Item<T>>(field: K) => (value: Item<T>[K]) => void;

type FilterSections<T extends keyof RootState> = Exclude<
    T,
    "hobbies"
    | "contact-details"
    | "professional-experience"
>;

export function ItemsContainer<T extends FilterSections<keyof RootState>>({ accordionLabel, buttonLabel, section, Component }: IItemsContainer<T>) {

    const store = useAppSelector(store => store[section]);

    const itemsWithId = withId(store.items as any) as Array<Item<T>>;

    const actions = slices[section].actions;

    const dispatch = useAppDispatch();

    const onAddHandler = () => dispatch(actions.add());

    const onRemoveHandler = (id: string) => dispatch(actions.remove(id));

    const onReorderHandler = (ids: [fromId: string, toId: string]) => dispatch(actions.reorder(ids)); 

    const createUpdateField = (id: string): UpdateField<T> => key => value => dispatch(actions.change([id, {
        [key]: value
    }]));

    return (
        <List
        value={itemsWithId}
        onAdd={onAddHandler}
        onRemove={onRemoveHandler}
        onChange={onReorderHandler}
        label={buttonLabel}
        Component={props => (
            <Accordion.Item 
            label={accordionLabel(props)}
            id={props.id}>
                <Stack 
                axis="y">
                    <Component
                    {...props}
                    updateField={createUpdateField(props.id)}/>
                </Stack>
            </Accordion.Item>
        )}/>
    );
}