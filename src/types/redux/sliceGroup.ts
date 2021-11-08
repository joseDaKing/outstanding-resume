import { Slice } from "@reduxjs/toolkit";

export type SliceGroupBase = {
    initialState: any;
    initialItem?: Object;
    slice: Slice;
};