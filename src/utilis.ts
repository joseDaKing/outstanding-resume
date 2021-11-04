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



export type Clean<T> = {
    [K in keyof T]: T[K];
}

export type Extends<T, K> = [T] extends [K] ? true : false; 



export type ObjectValues<T> = T[keyof T];

export type HasKey<T, K extends string> = K extends keyof T ? true : false;

export type GetProp<T, K extends string> = K extends keyof T ? T[K] : never;

export type GetPropStrict<T, K extends keyof T> = T[K];

export type OmitProp<T, K extends string> = Omit<T, K>;

export type OmitPropStrict<T, K extends keyof T> = Omit<T, K>;

export type SetProp<T, K extends string, P> = IfElse<[
    [
        Not<
            Extends<
                GetProp<T, K>, 
                never
            >
        >,
        Clean<
            OmitProp<T, K> & {
                [L in K]: P;
            }
        >
    ]
]>;



export type ArrayValues<T> = T[Extract<keyof T, `${number}`>];

export type ArrayValuesStrict<T extends any[]> = T[number];

export type HasIndex<T, K extends `${number}`> = HasKey<T, K>;

export type GetIndex<T, K extends `${number}`> = GetProp<T, K>;

export type GetIndexStrict<T, K extends Extract<keyof T, `${number}`>> = T[K];

export type OmitIndex<T, K extends `${number}`> = Omit<T, K>;

export type OmitIndexStrict<T, K extends Extract<keyof T, `${number}`>> = Omit<T, K>;



export type And<T extends boolean[]> = (
    T extends [infer Item, ...infer Rest] ?
        Item extends true ?
            Rest[number] extends never ?
                true
            : Rest extends Array<boolean> ?
                And<Rest> 
            : never
        : false
    : never
);

export type Or<T extends boolean[]> = (
    T extends [infer Item, ...infer Rest] ?
        Item extends false ?
            Rest[number] extends never ?
                false
            : Rest extends Array<boolean> ?
                Or<Rest> 
            : never
        : true
    : never
);

export type Not<T extends boolean> = T extends true ? false : true;

export type NAnd<T extends boolean[]> = Not<And<T>>;



type Block = [boolean, any];

export type IfElse<T extends Array<Block>, Else = never> = (
    T extends [infer Item, ...infer Rest] ? 
        GetProp<Item, "0"> extends true ? 
            GetProp<Item, "1"> 
        : Rest extends Array<Block> ? 
            IfElse<Rest, Else>
        : never
    : Else
);