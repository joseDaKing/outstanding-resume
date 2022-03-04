import { ComponentType, forwardRef } from "react";

import { stitches } from "stitches";

import { VariantProps } from "@stitches/react";

import { CSSProps } from "types";

import { StyledButton } from "./Button";



const StyledIconButton = stitches.styled(StyledButton, {
    display: "block",
    "&::before,&::after": {
        display: "none !important",
    },
    variants: {
        size: {
            sm: {
                padding: "$1_5",
            },
            md: {
                padding: "calc($2 + 0.25px)"
            },
            lg: {
                padding: "$2_5",
            },
        }
    },
    defaultVariants: {
        size: "md"
    },
});

type IconButtonProps = Omit<JSX.IntrinsicElements["button"], "ref"> & VariantProps<typeof StyledButton> & CSSProps & {
    Icon: ComponentType<any>;
};

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(({ Icon, ...props }, ref) => {

    const { 
        size,
        round,
        color,
        variant,
        content,
        ...htmlProps
    } = props;

    const styledProps = {
        size,
        round,
        color,
        variant,
        content,
    };

    return (
        <StyledIconButton 
        {...htmlProps} 
        {...styledProps}
        ref={ref}>
            {Icon && 
            <Icon/>}
        </StyledIconButton>
    );
});

IconButton.toString = () => StyledIconButton.selector;