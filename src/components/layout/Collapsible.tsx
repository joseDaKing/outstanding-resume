import { ElementRef, forwardRef } from "react";

import * as PrimitiveCollapsible from "@radix-ui/react-collapsible";

import { Button, ButtonProps } from "../form/Button";

import { ChevronDownIcon } from "@radix-ui/react-icons";

import { stitches, ThemedCSS } from "stitches";

import { Box } from "../layout";

import { openCloseAnimation } from "mixins";

import { CSSProps } from "types";



const StyledRoot = stitches.styled(PrimitiveCollapsible.Root, {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "start", 
    width: "100%",
});

StyledRoot.displayName = "StyledCollapsibleRoot";

const StyledContent = stitches.styled(PrimitiveCollapsible.Content, openCloseAnimation, {
    width: "100%",
    padding: "$0_5"
});

StyledContent.displayName = "StyledCollapsibleContent";

const StyledTrigger = stitches.styled(Button, {
    "& svg": {
        transition: "$200",
        transitionProperty: "transform",
    },
    stateToggled: {
        "& svg": {
            transformRotate: "$180"
        }
    }
});

export type CollapsibleProps = Omit<PrimitiveCollapsible.CollapsibleProps, "asChild"> & Pick<ButtonProps, "color" | "block"> & CSSProps & {
    name: string;
    space?: ThemedCSS["paddingTop"];
};

export const Collapsible = forwardRef<ElementRef<typeof PrimitiveCollapsible.Root>, CollapsibleProps>((props, ref) => {

    const { 
        color,
        block,
        name,
        children,
        space = "$2",
        ...htmlProps
    } = props;

    return (
        <StyledRoot 
        {...htmlProps}
        ref={ref}>
            <PrimitiveCollapsible.Trigger 
            asChild>
                <StyledTrigger
                size="sm" 
                variant="text"
                block={block}
                color={color}
                align="start" 
                EndIcon={ChevronDownIcon}>
                    {name}
                </StyledTrigger>
            </PrimitiveCollapsible.Trigger>

            <StyledContent>
                <Box
                css={{
                    paddingTop: space
                }}/>
                {children}
            </StyledContent>
        </StyledRoot>
    );
});

Collapsible.displayName = "Collapsible";

Collapsible.toString = () => StyledRoot.selector;