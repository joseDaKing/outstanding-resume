import { useState } from "react";
import { ListItemType, useItemsController } from "./useItemsController";



export const useItems = <T extends ListItemType>(initialState: T[]) => {

    const state = useState(initialState);

    return [
        ...state,
        useItemsController(state)
    ] as const;
}