import { Children, ElementRef, forwardRef } from "react";

import * as PrimitiveCollapsible from "@radix-ui/react-collapsible";

import { Button } from "../form";

import { ChevronDownIcon } from "@radix-ui/react-icons";

import { stitches } from "stitches";

import { Box } from "../layout";

import { openCloseAnimation } from "mixins";



type CollapsibleProps = Omit<PrimitiveCollapsible.CollapsibleProps, "asChild">;

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
    paddingY: "$0_5"
});

StyledContent.displayName = "StyledCollapsibleContent";

export const Collapsible = forwardRef<ElementRef<typeof PrimitiveCollapsible.Root>, CollapsibleProps>(props => {

    return (
        <StyledRoot>
            <PrimitiveCollapsible.Trigger asChild>
                <Button 
                size="sm" 
                variant="text" 
                EndIcon={ChevronDownIcon}
                
                css={{
                   
                    "& svg": {
                        transition: "$200",
                        transitionProperty: "transform",
                    },
                    stateToggled: {
                        "& svg": {
                            transformRotate: "$180"
                        }
                    }
                }}>
                    Vissa extra uppgifter
                </Button>
            </PrimitiveCollapsible.Trigger>

            <StyledContent>
                

                {props.children}
            </StyledContent>
        </StyledRoot>
    );
});