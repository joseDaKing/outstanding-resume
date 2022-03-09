import { ComponentType, forwardRef } from "react";

import { stitches } from "stitches";

import { VariantProps } from "@stitches/react";

import { CSSProps } from "types";

import * as Button from "./Button";

import { block } from "mixins";



const StyledRoot = stitches.styled(Button.StyledRoot, block, {
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
        size: "md",
    },
});

StyledRoot.displayName = "StyledIconButtonRoot";

const StyledIconContainer = stitches.styled("span", {
    display: "block",
    width: "fit-content",
    margin: "auto"
});

StyledIconContainer.displayName = "StyledIconContainer";

type IconButtonProps = Omit<JSX.IntrinsicElements["button"], "ref"> & VariantProps<typeof Button.StyledRoot> & CSSProps & {
    Icon: ComponentType<any>;
};

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(({ Icon, ...props }, ref) => {

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
        variant,
        align
    };

    return (
        <StyledRoot 
        {...htmlProps} 
        {...styledProps}
        ref={ref}>
            <StyledIconContainer>
                <Icon/>
            </StyledIconContainer>
        </StyledRoot>
    );
});

IconButton.displayName = "IconButton";

IconButton.toString = () => StyledRoot.selector;