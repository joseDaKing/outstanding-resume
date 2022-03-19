import { buttonGroup } from "mixins";

import { cloneElement, forwardRef, isValidElement } from "react";

import { stitches } from "stitches";

import { ButtonVariantProps } from "./Button";

import { Children } from "react";

import { CSSProps } from "types";



const StyledButtonGroup = stitches.styled("div", buttonGroup);

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