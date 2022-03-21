import React, { forwardRef, useRef } from "react";

import { stitches } from "stitches";

import { VariantProps } from "@stitches/react";

import { textFieldContainer, textFieldTextContainer, textFieldText } from "mixins";

import { CSSProps, IconProps } from "types";

import mergeRefs from "react-merge-refs";



const TextFieldContainer = stitches.styled("label", textFieldContainer);

TextFieldContainer.displayName = "TextFieldContainer";

const TextFieldTextContainer = stitches.styled("span", textFieldTextContainer);

TextFieldTextContainer.displayName = "TextFieldTextContainer";

const TextFieldText = stitches.styled("input", textFieldText);

TextFieldText.displayName = "TextFieldText";

export type TextFieldProps = VariantProps<typeof TextFieldContainer> & CSSProps & IconProps & Omit<
    JSX.IntrinsicElements["input"], 
    "type" 
    | "ref"
    | "checked"
    | "defaultChecked"
    | "size"
    | "onChange"
    | "onClick"
> & {
    type?: (
        "email" 
        | "password" 
        | "text"
        | "url"
        | "search"
        | "tel"
    );
    onValueChange?: (value: string) => void;
    onClick?: (event: React.MouseEvent<HTMLLabelElement>) => void;
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, outerRef) => {
    
    const { 
        size,
        color,
        css,
        style,
        className,
        block,
        StartIcon,
        EndIcon,
        onClick,
        onValueChange,
        ...htmlProps
    } = props;

    const variantProps = {
        size,
        color,
        block
    }

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {

        if (onValueChange) {

            onValueChange(event.currentTarget.value);
        }
    }

    const ref = useRef<HTMLInputElement|null>(null);

    const onClickHandler = (event: React.MouseEvent<HTMLLabelElement>) => {

        if (ref.current) {

            ref.current.focus();
        }

        if (onClick) {
         
            onClick(event);
        }
    }

    return (
        <TextFieldContainer 
        {...variantProps}
        onClick={onClickHandler}
        style={style}
        className={className}
        data-disabled={props.disabled ? "" : undefined}>
            <TextFieldTextContainer>
                {StartIcon && 
                <StartIcon/>}

                <TextFieldText
                {...htmlProps}
                color={color}
                ref={mergeRefs([ref, outerRef])}
                onChange={onChangeHandler}/>

                {EndIcon && 
                <EndIcon/>}
            </TextFieldTextContainer>
        </TextFieldContainer>
    );
});

TextField.displayName = "TextField";

TextField.toString = () => TextFieldTextContainer.selector;