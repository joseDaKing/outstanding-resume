import { ListItemType, useItems, useOnChange } from "helpers";
import { useRef } from "react";

import { useAccordionController } from "./AccordionController";



export const useItemsController = <T extends ListItemType>(initialItems: T[]) => {

    const [items, setItems, actions] = useItems(initialItems);

    const accordionController = useAccordionController();

    const itemsDependencey = items.map(value => JSON.stringify(value)).join("");

    const prevLengthRef = useRef<number|null>(null);

    useOnChange(() => {

        const isRemovingItem = prevLengthRef.current && (items.length < prevLengthRef.current);

        if (isRemovingItem) return;

        const lastItem = items[items.length - 1];

        if (!lastItem) return;

        accordionController.setActive(lastItem.id);

        prevLengthRef.current = items.length;

    }, [itemsDependencey]); 

    return {
        items,
        setItems,
        actions,
    };
}