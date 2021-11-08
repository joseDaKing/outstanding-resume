import { SliceGroupBase } from "../types";

type SliceReducers<T extends Record<string, SliceGroupBase>> = { 
    [K in keyof T]: T[K]["slice"]["reducer"];
}

export const createReducersFromSliceGroups = <T extends Record<string, SliceGroupBase>>(sliceGroups: T): SliceReducers<T> => {

    return Object.fromEntries(Object.entries(sliceGroups).map(([ key, sliceGroup ]) => [key, sliceGroup.slice.reducer])) as SliceReducers<T>;
}