import React from "react";

import { useId } from "../../utilis";

import { FormLabel, FormInput } from "../primitives";

import { Box } from "../../components/layout";

import type { ITextFieldProps } from "./TextField";

import type { ChangeEvent } from "react";

export const TextArea: React.FC<ITextFieldProps> = ({ inline, disabled, label, placeholder, onChange, value }) => {

    const id = useId();

    const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {

        if (onChange) {

            onChange(event.target.value);
        }
    }

    return (
        <Box 
        inline={inline}>
            {label &&
            <>
                <FormLabel
                htmlFor={id}
                disabled={disabled}>
                    {label}
                </FormLabel>
                <br/>
            </>}

            <FormInput
            value={value}
            onChange={onChangeHandler}
            as="textarea"
            id={id}
            css={{ height: "$56" }}
            inline={inline}
            disabled={disabled}
            placeholder={placeholder}/>
        </Box>
    );
}