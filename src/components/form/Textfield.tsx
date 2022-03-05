import { forwardRef } from "react";

import { stitches } from "stitches";

import { VariantProps } from "@stitches/react";

import { formLargeText, formLargeContainer, round, textSelection } from "mixins";

import { colorStyles } from "helpers";

import { CSSProps } from "types";

import { Label, LabelProps } from "./Label";

import { Stack } from "../layout";

import { useId } from "@radix-ui/react-id";



const StyledInputContainer = stitches.styled("label", round, formLargeContainer, {
    display: "block",
    outlineWidth: "$1",
    outlineOffset: "-$borderWidth$1",
    cursor: "text",
    stateDisabled: {
        cursor: "default",
        outlineColor: "$washed8",
        color: "$washed10",
    },
    variants: {
        color: {
            primary: {},
            secondary: {},
            neutral: {},
            action: {},
            success: {},
            warning: {},
            danger: {}
        }
    },
    defaultVariants: {
        color: "primary"
    },
    compoundVariants: colorStyles({
        styles: (getColor, colorName) => ({
            outlineStyle: "solid",
            outlineColor: colorName === "neutral" ? getColor("12") : getColor("11"),
            focusWithin: {
                outlineWidth: "$2",
                outlineColor: colorName === "neutral" ? getColor("11") : getColor("10"),
            },
            color: colorName === "neutral" ? getColor("12") : getColor("11"),
        })
    })
});

StyledInputContainer.displayName = "TextFieldRoot";

const StyledInputText = stitches.styled("span", formLargeText, {
    overflow: "hidden"
});

StyledInputText.displayName = "TextFieldText";

const StyledInput = stitches.styled("input", textSelection, {
    fontFamily: "inherit",
    fontSize: "inherit",
    fontWeight: "inherit",
    backgroundColor: "transparent",
    width: "100%", 
    focusVisible: {
        outline: "none"
    },
    stateDisabled: {
        color: "$washed11",
        placeholderColor: "$washed8 !important"
    },
    variants: {
        color: {
            primary: {},
            secondary: {},
            neutral: {},
            action: {},
            success: {},
            warning: {},
            danger: {}
        }
    },
    defaultVariants: {
        color: "primary"
    },
    compoundVariants: colorStyles({
        styles: (getColor, colorName) => ({
            color: colorName === "neutral" ? getColor("12") : getColor("11"),
            placeholderColor: colorName === "neutral" ? getColor("9") : getColor("8")
        })
    })
});

StyledInput.displayName = "TextFieldInput";

type TextfieldProps = VariantProps<typeof StyledInputContainer> & CSSProps & LabelProps & Omit<
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

export const TextField = forwardRef<HTMLInputElement, TextfieldProps>((props, ref) => {
    
    const { 
        size,
        color,
        css,
        label,
        help,
        ...htmlProps
    } = props;

    const variantProps = {
        size,
        color
    }

    const labelProps = {
        color,
        label,
        help,
        disabled: props.disabled
    }

    const id = useId();

    return (
        <Stack
        css={{
            ...(css ?? {}),
            gap: "$2_5"
        }}
        alignCross="start"
        orientation="vertical">
            <Label 
            htmlFor={id}
            css={{
                marginLeft: "$2"
            }}
            {...labelProps}/>

            <StyledInputContainer 
            {...variantProps}
            data-disabled={props.disabled ? "" : undefined}>
                <StyledInputText>
                    <StyledInput
                    {...htmlProps}
                    id={id}
                    color={color}
                    ref={ref}/>
                </StyledInputText>
            </StyledInputContainer>
        </Stack>
    );
});

TextField.displayName = "TextField";

TextField.toString = () => StyledInputContainer.selector;