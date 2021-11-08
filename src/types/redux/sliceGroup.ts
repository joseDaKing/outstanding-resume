import { Slice } from "@reduxjs/toolkit";

import { Simplify } from "../misc";

export type SliceGroup<T, K extends Slice, P extends object | never = never> = Simplify<{
    initialState: T;
    slice: K;
} & ([P] extends [never] ? {} : { 
    initalItem: P;
})>;

export type SliceGroupBase = {
    initialState: any;
    slice: Slice;
    initialItem?: Object;
};