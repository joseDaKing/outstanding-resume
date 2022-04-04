import { forwardRef } from "react";

import { stitches } from "stitches";

import { VariantProps } from "@stitches/react";

import { CSSProps, IconProps } from "types";

import { buttonText, buttonContainer } from "mixins";



const StyledText = stitches.styled("span", buttonText);

StyledText.displayName = "StyledButtonText";

export const StyledRoot = stitches.styled("button", buttonContainer);

StyledRoot.displayName = "StyledButtonRoot";

export type ButtonVariantProps = VariantProps<typeof StyledRoot>;

export type ButtonProps = Omit<JSX.IntrinsicElements["button"], "ref" | "color"> & ButtonVariantProps & CSSProps & IconProps;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ StartIcon, EndIcon, ...props }, ref) => {

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

Button.displayName = "Button";

Button.toString = () => StyledRoot.selector;