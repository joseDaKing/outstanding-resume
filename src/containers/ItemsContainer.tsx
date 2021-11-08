import { Stack } from "../components/layout";

import { Accordion, List, ListItemComponentProps } from "../components/misc";

import { useAppDispatch, useAppSelector } from "../store";

import { OrderableSliceGroupNames, orderableSliceGroups } from "../store/slices/orderableSections";

import { IID } from "../types";

import { withId } from "../utilities";

type ItemsSliceGroupNames = Exclude<OrderableSliceGroupNames, typeof orderableSliceGroups.hobbies.slice.name>;

type Item<T extends ItemsSliceGroupNames> = (typeof orderableSliceGroups)[T]["initialItem"];

interface IItemsContainer<T extends ItemsSliceGroupNames> {
    section: T;
    buttonLabel: string;
    accordionLabel: ((props: Item<T>) => string);
    Component: (props: ItemComponent<T>) => JSX.Element;
}

type ItemComponent<T extends ItemsSliceGroupNames> = ListItemComponentProps<Item<T> & IID> & {
    updateField: UpdateField<T>;
};

type UpdateField<T extends ItemsSliceGroupNames> = <K extends keyof Item<T>>(field: K) => (value: Item<T>[K]) => void;

export function ItemsContainer<T extends ItemsSliceGroupNames>({ accordionLabel, buttonLabel, section, Component }: IItemsContainer<T>) {

    const store = useAppSelector(store => store[section]);

    const itemsWithId = withId(store.items as Record<string, Item<T>>);

    const actions = orderableSliceGroups[section].slice.actions;

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
                    {...props as any}
                    updateField={createUpdateField(props.id)}/>
                </Stack>
            </Accordion.Item>
        )}/>
    );
}