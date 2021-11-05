import { PayloadAction } from "@reduxjs/toolkit";

import { useMemo } from "react";

import { v4 as uuid } from "uuid";

import { Section } from "./types";

export const createCRUDReducers = <T>(initialItem: T) => ({
    setSectionName(state: Section<T>, { payload: sectionName }: PayloadAction<string>) {

        state.sectionName = sectionName;
    },
    add(state: Section<T>) {

        state.items[uuid()] = initialItem;
    },
    remove(state: Section<T>, { payload: id }: PayloadAction<string>) {
    
        delete state.items[id];
    },
    change(state: Section<T>, { payload: [id, workExperience ]}: PayloadAction<[id: string, workExperience: Partial<T>]>) {
    
        state.items[id] = {
            ...state.items[id],
            ...workExperience
        }
    },
    reorder(state: Section<T>, { payload: [fromId, toId]}: PayloadAction<[fromId: string, toId: string]>) {

        const itemsEntries = Object.entries(state.items);

        const fromIndex = itemsEntries.findIndex(([id]) => id === fromId);
    
        const toIndex = itemsEntries.findIndex(([id]) => id === toId);
    
        if (-1 < fromIndex && -1 < toIndex) {
    
            state.items = Object.fromEntries(reorderArray(itemsEntries, fromIndex, toIndex));
        
        }
    }
});

export const createResetableCRUDReducers = <T>(initialItem: T, initialSection: Section<T>) => ({
    ...createCRUDReducers(initialItem),
    reset(state: Section<T>) {

        state.sectionName = initialSection.sectionName;

        state.items = initialSection.items;
    }
});



export function reorder(state: { items: Record<string, any> }, { payload: [fromId, toId]}: PayloadAction<[fromId: string, toId: string]>) {

    const itemsEntries = Object.entries(state.items);

    const fromIndex = itemsEntries.findIndex(([id]) => id === fromId);

    const toIndex = itemsEntries.findIndex(([id]) => id === toId);

    if (-1 < fromIndex && -1 < toIndex) {

        state.items = Object.fromEntries(reorderArray(itemsEntries, fromIndex, toIndex));
    }
};

export function reorderArray<T>(array: T[], from: number, to: number): T[] {
    
    const newArray = [...array];
    
    newArray.splice(
        to < 0 ? newArray.length + to : to,
        0,
        newArray.splice(from, 1)[0]
    );

    return newArray;
}


export const removeDuplicates = <T>(items: T[]): T[] => {

    return [...(new Set(...items as any[]))] as T[];
}

export const withId = <T extends object>(items: Record<string, T>) => Object.entries(items).map(([id, obj]) => ({ id, ...obj }));

export const useId = () => useMemo(() => uuid(), []);