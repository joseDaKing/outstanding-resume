import React from "react";

import type { VariantProps } from "@stitches/react";

import { useId } from "../../utilis";

import { FormLabel, FormInput } from "../primitives";

import { Box } from "../../components/layout";

import type { ChangeEvent } from "react";

export interface ITextFieldProps extends VariantProps<typeof Box>, VariantProps<typeof FormInput> {
    value?: string;
    onChange?: (value: string) => void;
    label?: string;
    placeholder?: string;
    disabled?: boolean;
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