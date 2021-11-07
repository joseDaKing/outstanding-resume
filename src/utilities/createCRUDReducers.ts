import { PayloadAction } from "@reduxjs/toolkit";

import { v4 as uuid } from "uuid";

import { Section } from "../types";

import { reorderArray } from "./reorder";

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

