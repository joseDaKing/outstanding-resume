import { Slice } from "@reduxjs/toolkit";

import { Simplify } from "../misc";

export type SliceGroup<T, K extends Slice, P extends object | undefined = undefined> = Simplify<{
    initialState: T;
    slice: K;
} & ([P] extends [undefined] ? {} : { 
    initialItem: P;
})>;

export type SliceGroupBase = {
    initialState: any;
    slice: Slice;
    initialItem?: Object;
};