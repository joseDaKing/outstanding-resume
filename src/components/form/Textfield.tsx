import { forwardRef } from "react";

import { stitches } from "stitches";

import { VariantProps } from "@stitches/react";

import { formLargeText, formLargeContainer, round, textSelection } from "mixins";

import { colorStyles } from "helpers";

import { CSSProps } from "types";

import { block } from "mixins";



const StyledRoot = stitches.styled("label", round, block, formLargeContainer, {
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

StyledRoot.displayName = "StyledTextFieldRoot";

const StyledInputContainer = stitches.styled("span", formLargeText, {
    overflow: "hidden"
});

StyledInputContainer.displayName = "StyledTextFieldText";

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

export type TextFieldProps = VariantProps<typeof StyledRoot> & CSSProps & Omit<
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
        ...htmlProps
    } = props;

    const variantProps = {
        size,
        color,
        block
    }

    return (
    
        <StyledRoot 
        {...variantProps}
        style={style}
        className={className}
        data-disabled={props.disabled ? "" : undefined}>
            <StyledInputContainer>
                <StyledInput
                {...htmlProps}
                color={color}
                ref={ref}/>
            </StyledInputContainer>
        </StyledRoot>
    );
});

TextField.displayName = "TextField";

TextField.toString = () => StyledRoot.selector;