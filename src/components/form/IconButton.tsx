import { ComponentType, forwardRef } from "react";

import { stitches } from "stitches";

import { VariantProps } from "@stitches/react";

import { CSSProps } from "types";

import * as Button from "./Button";



const Root = stitches.styled(Button.Root, {
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

Root.displayName = "IconButtonRoot";

const IconContainer = stitches.styled("span", {
    display: "block",
    width: "fit-content",
    margin: "auto"
});

IconContainer.displayName = "IconContainer";

type IconButtonProps = Omit<JSX.IntrinsicElements["button"], "ref"> & VariantProps<typeof Button.Root> & CSSProps & {
    Icon: ComponentType<any>;
};

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(({ Icon, ...props }, ref) => {

    const { 
        size,
        round,
        color,
        variant,
        ...htmlProps
    } = props;

    const styledProps = {
        size,
        round,
        color,
        variant,
    };

    return (
        <Root 
        {...htmlProps} 
        {...styledProps}
        ref={ref}>
            <IconContainer>
                <Icon/>
            </IconContainer>
        </Root>
    );
});

IconButton.displayName = "IconButton";

IconButton.toString = () => Root.selector;