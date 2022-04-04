import { ComponentType, forwardRef } from "react";

import { stitches } from "stitches";

import { VariantProps } from "@stitches/react";

import { CSSProps } from "types";

import * as Button from "./Button";

import { iconButtonContainer, iconButtonIconContainer } from "mixins";



const StyledRoot = stitches.styled("button", iconButtonContainer);

StyledRoot.displayName = "StyledIconButtonRoot";

const StyledIconContainer = stitches.styled("span", iconButtonIconContainer);

StyledIconContainer.displayName = "StyledIconContainer";

export type IconButtonProps = Omit<JSX.IntrinsicElements["button"], "ref" | "color"> & VariantProps<typeof Button.StyledRoot> & CSSProps & {
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