import { Stack } from "../components/layout";

import { Accordion, List, ListItemComponentProps } from "../components/misc";

import { useAppDispatch, useAppSelector } from "../store";

import { OrderableSliceGroupNames, orderableSliceGroups } from "../store/slices/orderableSections";

import { Bind, IID } from "../types";

import { withId } from "../utilities";

type ItemsSliceGroupNames = Exclude<OrderableSliceGroupNames, typeof orderableSliceGroups.hobbies.slice.name>;

type Item<T extends ItemsSliceGroupNames> = (typeof orderableSliceGroups)[T]["initialItem"];


export type ItemComponent<T extends ItemsSliceGroupNames> = (props: ItemComponentProps<T>) => React.ReactElement<any, any> | null;;

export type ItemComponentProps<T extends ItemsSliceGroupNames> = {
    bind: Bind<Item<T>>;
};

interface IItemsContainer<T extends ItemsSliceGroupNames> {
    section: T;
    buttonLabel: string;
    accordionLabel: ((props: Item<T>) => string);
    Component: ItemComponent<T>;
}

export function ItemsContainer<T extends ItemsSliceGroupNames>({ accordionLabel, buttonLabel, section, Component }: IItemsContainer<T>) {

    const store = useAppSelector(store => store[section]);

    const itemsWithId = withId(store.items as Record<string, Item<T>>);

    const actions = orderableSliceGroups[section].slice.actions;

    const dispatch = useAppDispatch();

    const onAddHandler = () => dispatch(actions.add());

    const onRemoveHandler = (id: string) => dispatch(actions.remove(id));

    const onReorderHandler = (ids: [fromId: string, toId: string]) => dispatch(actions.reorder(ids)); 

    return (
        <List
        value={itemsWithId}
        onAdd={onAddHandler}
        onRemove={onRemoveHandler}
        onChange={onReorderHandler}
        label={buttonLabel}
        Component={props => {

            const bind: Bind<Item<T>> = key => ({
                value: props[key],
                onChange: value => dispatch(actions.change([props.id, {
                    [key]: value
                }]))
            });

            return (
                <Accordion.Item 
                label={accordionLabel(props)}
                id={props.id}>
                    <Stack 
                    axis="y">
                        <Component
                        {...props as any}
                        bind={bind}/>
                    </Stack>
                </Accordion.Item>
            );
        }}/>
    );
}