import * as PrimitiveToggle from "@radix-ui/react-toggle";

import { VariantProps } from "@stitches/react";
import { useValue, UseValueProps } from "helpers";

import { iconButtonContainer, iconButtonIconContainer } from "mixins";

import { forwardRef, ElementRef } from "react";

import { stitches } from "stitches";

import { CSSProps, IconProps } from "types";



const StyledRoot = stitches.styled(PrimitiveToggle.Root, iconButtonContainer);

StyledRoot.displayName = "StyledIconButtonRoot";

const StyledIconContainer = stitches.styled("span", iconButtonIconContainer);

StyledIconContainer.displayName = "StyledIconContainer";

export type IconToggleProps = (
    VariantProps<typeof StyledRoot> 
    & UseValueProps<boolean>
    & Omit<
        PrimitiveToggle.ToggleProps, 
        "asChild" 
        | "value" 
        | "defaultValue"
        | "onChange"
    > 
    & CSSProps 
    & IconProps 
    & {
        Icon: React.ComponentType<any>;
    }
);

export const IconToggle = forwardRef<ElementRef<typeof PrimitiveToggle.Root>, IconToggleProps>(({ Icon, ...props}, ref) => {

    const { 
        value,
        defaultValue,
        onValueChange,
        size,
        round,
        color,
        variant,
        align = "center",
        ...htmlProps
    } = props;

    const styledProps = {
        size,
        round,
        color,
        variant,
        align
    };

    const [ state,  setState ] = useValue({
        initialValue: false,
        value,
        defaultValue,
        onValueChange,
    });

    return (
        <StyledRoot 
        {...htmlProps} 
        {...styledProps}
        pressed={state}
        onPressedChange={setState}
        ref={ref}>
            <StyledIconContainer>
                <Icon/>
            </StyledIconContainer>
        </StyledRoot>
    );
});

IconToggle.displayName = "IconToggle";

IconToggle.toString = () => StyledRoot.selector;