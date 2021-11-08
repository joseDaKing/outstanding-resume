import React from "react";

import { TextArea } from "../../../../../components/form";

import { Box } from "../../../../../components/layout";

import { useReorderItem } from "../../../../../components/misc";

import { OptionalSectionTitleContainer } from "../../../../../containers";

import { useAppDispatch, useAppSelector } from "../../../../../store";

import { hobbies } from "../../../../../store/slices/orderableSections/optional/hobbies";

export const Hobbies: React.FC = () => {

    const { containerProps } = useReorderItem();

    const dispatch = useAppDispatch();

    const description = useAppSelector(store => store.hobbies.description);

    const onChangeHandler = (value: string) => dispatch(hobbies.slice.actions.setDescription(value));

    return (
        <Box
        {...containerProps}>
            <OptionalSectionTitleContainer
            section="hobbies"/>
            
            <TextArea
            value={description}
            onChange={onChangeHandler}
            label="Vad tycker du om?"
            placeholder="t.ex skidåkning, fallskärmshoppning, målning"/>
        </Box>
    ); 
}