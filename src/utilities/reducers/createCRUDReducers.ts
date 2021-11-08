import { PayloadAction } from "@reduxjs/toolkit";

import { v4 as uuid } from "uuid";

import { Items } from "../../types";

import { reorderArray } from "../reorder";

import { setSectionNameReducer } from "./setSectionNameReducer";

export const createCRUDReducers = <T>(initialItem: T) => ({
    ...setSectionNameReducer,
    add(state: Items<T>) {

        state.items[uuid()] = initialItem;
    },
    remove(state: Items<T>, { payload: id }: PayloadAction<string>) {
    
        delete state.items[id];
    },
    change(state: Items<T>, { payload: [id, workExperience ]}: PayloadAction<[id: string, workExperience: Partial<T>]>) {
    
        state.items[id] = {
            ...state.items[id],
            ...workExperience
        }
    },
    reorder(state: Items<T>, { payload: [fromId, toId]}: PayloadAction<[fromId: string, toId: string]>) {

        const itemsEntries = Object.entries(state.items);

        const fromIndex = itemsEntries.findIndex(([id]) => id === fromId);
    
        const toIndex = itemsEntries.findIndex(([id]) => id === toId);
    
        if (-1 < fromIndex && -1 < toIndex && toIndex !== fromIndex) {
    
            state.items = Object.fromEntries(reorderArray(itemsEntries, fromIndex, toIndex));
        
        }
    }
});

export const createResetableCRUDReducers = <T>(initialItem: T, initialSection: Items<T>) => ({
    ...createCRUDReducers(initialItem),
    reset(state: Items<T>) {

        state.sectionName = initialSection.sectionName;

        state.items = initialSection.items;
    }
});

