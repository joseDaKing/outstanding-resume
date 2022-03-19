import * as PrimitiveToggle from "@radix-ui/react-toggle";

import { VariantProps } from "@stitches/react";

import { buttonText, buttonContainer } from "mixins";

import { forwardRef, ElementRef } from "react";

import { stitches } from "stitches";

import { CSSProps, IconProps } from "types";



const StyledRoot = stitches.styled(PrimitiveToggle.Root, buttonContainer);

StyledRoot.displayName = "StyledToggleRoot";

const StyledText = stitches.styled("span", buttonText);

StyledText.displayName = "StyledToggleText";

export type ToggleProps = VariantProps<typeof StyledRoot> & Omit<PrimitiveToggle.ToggleProps, "asChild"> & CSSProps & IconProps;

export const Toggle = forwardRef<ElementRef<typeof PrimitiveToggle.Root>, ToggleProps>(({ StartIcon, EndIcon, ...props}, ref) => {

    const { 
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
        align,
        variant,
    };

    if (props.dir === "ltr") {

        let temp = StartIcon;

        StartIcon = EndIcon;

        EndIcon = temp;
    }

    return (
        <StyledRoot 
        {...htmlProps} 
        {...styledProps}
        ref={ref}>
            <StyledText>
                {StartIcon && 
                <StartIcon/>}

                {props.children &&
                <span>
                    {props.children}
                </span>}

                {EndIcon && 
                <EndIcon/>}
            </StyledText>
        </StyledRoot>
    );
});

Toggle.displayName = "Toggle";

Toggle.toString = () => StyledRoot.selector;