import { Slice } from "@reduxjs/toolkit";

import { Simplify } from "../misc";

export type SliceGroup<T, K extends Slice, P extends object | never = never> = Simplify<{
    initialState: T;
    slice: K;
} & ([P] extends [never] ? {} : { 
    initialItem: P;
})>;

export type SliceGroupBase = SliceGroup<any, Slice, Object>;