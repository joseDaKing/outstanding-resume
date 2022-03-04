import { forwardRef } from "react";

import { stitches } from "stitches";

import { VariantProps } from "@stitches/react";

import { formLargeText, formLargeContainer, round, textSelection } from "mixins";

import { colorStyles } from "helpers";



const StyledContainer = stitches.styled("label", round, formLargeContainer, {
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
        styles: getColor => ({
            outlineStyle: "solid",
            outlineColor: getColor("8"),
            focusWithin: {
                outlineWidth: "$2",
                outlineColor: getColor("10"),
            },
            color: getColor("10"),
        })
    })
});

const StyledText = stitches.styled("span", formLargeText, {
    overflow: "hidden"
});

const StyledInput = stitches.styled("input", textSelection, {
    fontFamily: "inherit",
    fontSize: "inherit",
    fontWeight: "inherit",
    backgroundColor: "transparent",
    focusVisible: {
        outline: "none"
    },
    stateDisabled: {
        color: "$washed10",
        placeholderColor: "$washed7"
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
        styles: getColor => ({
            color: getColor("10"),
            placeholderColor: getColor("7"),
        })
    })
});

type TextfieldProps = VariantProps<typeof StyledContainer> & Omit<
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

export const Textfield = forwardRef<HTMLInputElement, TextfieldProps>((props, ref) => {
    
    const { 
        size,
        color,
        ...htmlProps
    } = props;

    const variantProps = {
        size,
        color
    }

    return (
        <StyledContainer 
        {...variantProps}
        data-disabled={props.disabled ? "" : undefined}>
            <StyledText>
                <StyledInput
                {...htmlProps}
                color={color}
                ref={ref}/>
            </StyledText>
        </StyledContainer>
    );
});