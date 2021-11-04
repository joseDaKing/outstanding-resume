import React from "react";

import type { VariantProps } from "@stitches/react";

import { useId } from "../../utilis";

import { FormLabel, FormInput } from "../primitives";

import { Box } from "../../components/layout";

import type { ChangeEvent } from "react";

import { FormComponent, ISize } from "../../types";

export interface ITextFieldProps extends ISize, FormComponent<string> {
    placeholder?: string;
}

export const TextField: React.FC<ITextFieldProps> = ({ inline, disabled, label, placeholder, onChange, value, size }) => {

    const id = useId();

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {

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
            size={size}
            value={value}
            onChange={onChangeHandler}
            id={id}
            inline={inline}
            disabled={disabled}
            placeholder={placeholder}/>
        </Box>
    );
}