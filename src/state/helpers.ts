import { PayloadAction } from "@reduxjs/toolkit";

import { ListItemType } from "helpers";

import { v4 as uuid } from "uuid";



type SectionTitleState = {
    sectionTitle: string;
}

export const setSectionTitle = () => (state: SectionTitleState, { payload }: PayloadAction<string>) => {

    state.sectionTitle = payload;
}

type ItemsState<T> = {
    items: T[];
}

export const addItem = <T extends ListItemType>(initialItem: Omit<T, "id">) => (state: ItemsState<T>) => {

    state.items.push({
        id: uuid(),
        ...initialItem
    } as T);
}

export const changeItems = <T extends ListItemType>() => (state: ItemsState<T>, { payload: items }: PayloadAction<T[]>) => {

    state.items = items;
}

export const updateItem = <T extends ListItemType>() => (state: ItemsState<T>, { payload: [ id, update ] }: PayloadAction<[string, Partial<Omit<T, "id">>]>) => {
    
    const index = state.items.findIndex(item => item.id === id);

    if (-1 < index) {

        state.items[index] = {
            ...state.items[index],
            ...update
        }
    }
}