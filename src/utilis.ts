import { PayloadAction } from "@reduxjs/toolkit";

import { useMemo } from "react";

import { v4 as uuid } from "uuid";

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

export const withId = <T extends object>(items: Record<string, T>) => Object.entries(items).map(([id, obj]) => ({ id, ...obj }));

export const useId = () => useMemo(() => uuid(), []);