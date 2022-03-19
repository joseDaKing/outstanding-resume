import { buttonGroup } from "mixins";

import { cloneElement, ElementRef, forwardRef, isValidElement } from "react";

import { stitches } from "stitches";

import { ButtonVariantProps } from "./Button";

import { Children } from "react";

import { CSSProps } from "types";

import * as PrimitiveToggleGroup from "@radix-ui/react-toggle-group";





const StyledToggleGroup = stitches.styled(PrimitiveToggleGroup.Root, buttonGroup);

StyledToggleGroup.displayName = "StyledButtonGroup";

export type ToggleGroupProps = (
    (
        Omit<PrimitiveToggleGroup.ToggleGroupSingleProps, "asChild">
        | Omit<PrimitiveToggleGroup.ToggleGroupMultipleProps, "asChild">
    )
    & ButtonVariantProps 
    & CSSProps
);

export const ToggleGroup = forwardRef<ElementRef<typeof PrimitiveToggleGroup.Root>, ToggleGroupProps>((props, ref) => {

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
        <StyledToggleGroup 
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
        </StyledToggleGroup>
    );
});

ToggleGroup.toString = () => StyledToggleGroup.selector;

ToggleGroup.displayName = "ButtonGroup";



export { ToggleGroupItem } from "@radix-ui/react-toggle-group";

export type { ToggleGroupItemProps } from "@radix-ui/react-toggle-group";