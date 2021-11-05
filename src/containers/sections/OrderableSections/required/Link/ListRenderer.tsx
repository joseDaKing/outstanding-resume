import React from "react";

import { Stack } from "../../../../../components/layout";

import { TextField } from "../../../../../components/form";

import { Accordion } from "../../../../../components/misc";

import { 
    useAppDispatch,
    link,
    ILinkItem
}
from "../../../../../store";

import { IID } from "../../../../../types";

export const ListRenderer: React.FC<ILinkItem & IID> = ({ id, label, url }) => {

    const dispatch = useAppDispatch();

    const onLabelChange = (label: string) => dispatch(link.actions.change([id, {
        label
    }]));

    const onUrlChange = (url: string) => dispatch(link.actions.change([id, {
        url
    }]));

    return (
        <Accordion.Item 
        id={id}
        title={label || "(Ej specificerat)"}>
            <Stack 
            axis="y"
            space="md">
                <Stack 
                axis="x"
                space="md">
                    <TextField
                    onChange={onLabelChange}
                    value={label}
                    label="Etikett"/>
    
                    <TextField
                    onChange={onUrlChange}
                    value={url}
                    label="Länk"/>
                </Stack>
            </Stack>
        </Accordion.Item>
    );
}