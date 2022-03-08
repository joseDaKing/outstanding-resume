import { forwardRef } from "react";

import { stitches } from "stitches";

import { VariantProps } from "@stitches/react";

import { formLargeText, formLargeContainer, round, textSelection } from "mixins";

import { colorStyles } from "helpers";

import { CSSProps } from "types";



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

StyledInputContainer.displayName = "StyledTextFieldRoot";

const StyledInputText = stitches.styled("span", formLargeText, {
    overflow: "hidden"
});

StyledInputText.displayName = "StyledTextFieldText";

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

StyledInput.displayName = "StyledTextFieldInput";

type TextfieldProps = VariantProps<typeof StyledInputContainer> & CSSProps & Omit<
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
        style,
        className,
        ...htmlProps
    } = props;

    const variantProps = {
        size,
        color
    }

    return (
    
        <StyledInputContainer 
        {...variantProps}
        style={style}
        className={className}
        data-disabled={props.disabled ? "" : undefined}>
            <StyledInputText>
                <StyledInput
                {...htmlProps}
                color={color}
                ref={ref}/>
            </StyledInputText>
        </StyledInputContainer>
    );
});

TextField.displayName = "TextField";

TextField.toString = () => StyledInputContainer.selector;