import { forwardRef } from "react";

import { stitches } from "stitches";

import { VariantProps } from "@stitches/react";

import { formLargeText, formLargeContainer, round, textSelection } from "mixins";

import { colorStyles } from "helpers";

import { CSSProps } from "types";

import { Label } from "./Label";



const StyledContainer = stitches.styled("div", {
    display: "flex",
    flexDirection: "column",
    gap: "$2"
});

const StyledInputContainer = stitches.styled("label", round, formLargeContainer, {
    display: "block",
    outlineWidth: "$1",
    outlineOffset: "-$borderWidth$1",
    stateDisabled: {
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

const StyledInputText = stitches.styled("span", formLargeText, {
    overflow: "hidden"
});

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

type TextfieldProps = VariantProps<typeof StyledInputContainer> & CSSProps & Omit<
    JSX.IntrinsicElements["input"], 
    "type" 
    | "ref"
    | "checked"
    | "defaultChecked"
    | "size"
> & {
    label?: string;
    type?: (
        "email" 
        | "password" 
        | "text"
        | "url"
        | "search"
        | "tel"
    );
}

export const Textfield = forwardRef<HTMLInputElement, TextfieldProps>((props, ref) => {
    
    const { 
        size,
        color,
        css,
        label,
        ...htmlProps
    } = props;

    const variantProps = {
        size,
        color
    }

    return (
        <StyledContainer css={css}>
            {label &&
            <Label 
            data-disabled={props.disabled ? "" : undefined}
            color={color}
            css={{
                marginLeft: "$2"
            }}>
                {label}
            </Label>}

            <StyledInputContainer 
            {...variantProps}
            data-disabled={props.disabled ? "" : undefined}>
                <StyledInputText>
                    <StyledInput
                    {...htmlProps}
                    color={color}
                    ref={ref}/>
                </StyledInputText>
            </StyledInputContainer>
        </StyledContainer>
    );
});

Textfield.toString = () => StyledInputContainer.selector;