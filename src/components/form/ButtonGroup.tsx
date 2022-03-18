import { block } from "mixins";

import { cloneElement, forwardRef, isValidElement } from "react";

import { stitches } from "stitches";

import { Button, ButtonVariantProps } from "./Button";

import { Children } from "react";

import { CSSProps } from "types";



const StyledButtonGroup = stitches.styled("div", block, {
    display: "flex",
    [`& > ${Button}`]: {
        position: "relative",
        "&:first-child": {
            borderRightRadius: "0px",
        },
        "&:last-child": {
            borderLeftRadius: "0px",
        },
        "&:not(:first-child):not(:last-child)": {
            borderRadius: "0px"
        },
        zIndex: 0,
        focus: {
            zIndex: 1
        }
    }
});

StyledButtonGroup.displayName = "StyledButtonGroup";

export type ButtonGroupProps = Omit<JSX.IntrinsicElements["div"], "ref"> & ButtonVariantProps & CSSProps;

export const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>((props, ref) => {

    const {
        block,
        size,
        round,
        align,
        color,
        variant,
        ...htmlProps
    } = props;

    const buttonProps = {
        size,
        round,
        align,
        color,
        variant,
        block
    }

    return (
        <StyledButtonGroup 
        {...htmlProps}
        block={block}
        role="group"
        ref={ref}>
            {Children.map(props.children, element => {
                
                if (isValidElement(element)) {
                
                    return cloneElement(element, buttonProps);
                }

                return element;
            })}
        </StyledButtonGroup>
    );
});

ButtonGroup.toString = () => StyledButtonGroup.selector;

ButtonGroup.displayName = "ButtonGroup";