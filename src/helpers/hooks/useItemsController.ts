import { Dispatch, SetStateAction } from "react";



export type ListItemType = { id: string; };

export const useItemsController = <T extends ListItemType>([state, setState]: [
    T[],
    Dispatch<SetStateAction<T[]>>
]) => {

    const add = (item: T): void => {

        return setState(prevState => [
            ...prevState,
            item
        ]);
    }

    const findPosition = (item: T | string | null | undefined): number => {
        
        if (!item) {

            return -1;
        }

        if (typeof item !== "string") {

            item = item.id;
        }

        return state.findIndex(({ id }) => id === item);
    }

    const remove = (item: T | string | null | undefined): void => {
        
        const position = findPosition(item);

        if (position < 0) {

            return;
        }
        
        return setState(prevState => {

            return prevState.filter((_, i) => i !== position);
        });
    }

    const find = (id: T | string | null | undefined): T | null => {

        return state[findPosition(id)] ?? null;
    }

    return {
        add,
        find,
        findPosition,
        remove
    };
}