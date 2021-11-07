import { PayloadAction } from "@reduxjs/toolkit";
import { Description } from "../../types";

export const setDescripitonReducer = {

    setDescription(state: Description, { payload: description }: PayloadAction<string>) {

        state.description = description
    }
}