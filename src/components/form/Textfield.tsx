import { forwardRef } from "react";

import { stitches } from "stitches";

import { VariantProps } from "@stitches/react";

import { textFieldContainer, textFieldTextContainer, textFieldText } from "mixins";

import { CSSProps, IconProps } from "types";



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
> & {
    type?: (
        "email" 
        | "password" 
        | "text"
        | "url"
        | "search"
        | "tel"
    );
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
    
    const { 
        size,
        color,
        css,
        style,
        className,
        block,
        StartIcon,
        EndIcon,
        ...htmlProps
    } = props;

    const variantProps = {
        size,
        color,
        block
    }

    return (
        <TextFieldContainer 
        {...variantProps}
        style={style}
        className={className}
        data-disabled={props.disabled ? "" : undefined}>
            <TextFieldTextContainer>
                {StartIcon && 
                <StartIcon/>}

                <TextFieldText
                {...htmlProps}
                color={color}
                ref={ref}/>

                {EndIcon && 
                <EndIcon/>}
            </TextFieldTextContainer>
        </TextFieldContainer>
    );
});

TextField.displayName = "TextField";

TextField.toString = () => TextFieldTextContainer.selector;