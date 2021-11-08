import React from "react";

import { allSliceGroups } from "../../../../store/slices";

import { OrderableSliceGroupNames } from "../../../../store/slices/orderableSections";

import { Reorder } from "../../../../components/misc";

import { useAppDispatch, useAppSelector } from "../../../../store";

import { OrderableSectionItem } from "./OrderableSectionItem";

const sectionOrderActions = allSliceGroups["section-order"].slice.actions;

export const OrderableSections: React.FC = () => {

    const dispatch = useAppDispatch();

    const sectionOrderItems = useAppSelector(store => store["section-order"].items);

    const sectionOrderItemsWithIds = sectionOrderItems.map(section => ({ id: section }));

    const onChangeHandler = (ids: [fromId: OrderableSliceGroupNames, toId: OrderableSliceGroupNames]) => dispatch(sectionOrderActions.reorder(ids))

    return (
        <Reorder
        value={sectionOrderItemsWithIds}
        onChange={onChangeHandler}
        Component={OrderableSectionItem}/>
    );
}