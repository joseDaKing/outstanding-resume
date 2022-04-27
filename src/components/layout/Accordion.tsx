import React, { ElementRef, forwardRef } from "react";

import * as PrimitiveAccordion from "@radix-ui/react-accordion";

import { stitches } from "stitches";

import { CSSProps } from "types";

import { collapsibleAnimation } from "mixins";

import { Box } from "./Box";

import fontMetrics from "@capsizecss/metrics/roboto";

import { Stack } from "./Stack";

import { ChevronDownIcon } from "@radix-ui/react-icons";
import { lineClamp } from "helpers";



const StyledIcon = stitches.styled(ChevronDownIcon, {
    marginLeft: "auto",
    transition: "$200",
    transitionProperty: "transform",
    size: "$6",
    color: "$neutral12"
});

StyledIcon.displayName = "StyledAccordionIcon";

const StyledTitle = stitches.styled("div", {
    fontFamily: "$primary",
    fontWeight: 600,
    capSize: {
        fontSize: 18,
        fontMetrics
    }
});

StyledTitle.displayName = "StyledAccordionTitle";

const StyledSubtitle = stitches.styled("div", {
    fontFamily: "$primary",
    marginTop: "$2",
    fontWeight: 500,
    capSize: {
        fontSize: 16,
        fontMetrics
    }
});

StyledSubtitle.displayName = "StyledAccordionSubtitle";

const StyledTrigger = stitches.styled(PrimitiveAccordion.Trigger, {
    textAlign: "start",
    padding: "$4",
    display: "block",
    width: "$full",
    borderRadius: "$sm",
    focus: {
        outlineStyle: "solid",
        outlineWidth: "$2",
        outlineColor: "$neutral12"
    }
});

const StyledContent = stitches.styled(PrimitiveAccordion.Content, collapsibleAnimation);

StyledContent.displayName = "StyledAccordionContent";

const StyledItem = stitches.styled(PrimitiveAccordion.Item, {
    backgroundColor: "$neutral2",
    borderRadius: "$sm",
    transition: "$200",
    transitionProperty: "transform",
    stateToggled: {
        [`& ${StyledIcon}`]: {
            transformRotate: "$180",
        }
    },
    [`& ${StyledTitle}`]: {
        color: "$neutral12"
    },
    [`& ${StyledSubtitle}`]: {
        color: "$neutral11"
    }
});

StyledItem.displayName = "StyledAccordionItem";



export type AccordionItemProps = Omit<PrimitiveAccordion.AccordionItemProps, "asChild"> & CSSProps & {
    title: string;
    subtitle?: string;
}

export const AccordionItem = forwardRef<ElementRef<typeof PrimitiveAccordion.Item>, AccordionItemProps>((props, ref) => {

    const {
        title,
        subtitle,
        ...htmlProps
    } = props;

    return (
        <StyledItem
        {...htmlProps}
        ref={ref}>
            <PrimitiveAccordion.Header>
                <StyledTrigger>
                    <Stack
                    alignMain="start">
                        <Box>
                            <StyledTitle>
                                {lineClamp(title, 30)}
                            </StyledTitle>

                            {subtitle &&
                            <StyledSubtitle>
                                {lineClamp(subtitle, 30)}
                            </StyledSubtitle>}
                        </Box>

                        <StyledIcon/>
                    </Stack>
                </StyledTrigger>
            </PrimitiveAccordion.Header>
            <StyledContent>
                <Box 
                css={{
                    width: "100%",
                    padding: "$4",
                }}>
                    {props.children}
                </Box>
            </StyledContent>
        </StyledItem>
    );
});

AccordionItem.toString = () => StyledItem.selector;

AccordionItem.displayName = "AccordionItem";



export type AccordionProps = React.RefAttributes<HTMLDivElement> & CSSProps & (
    Omit<PrimitiveAccordion.AccordionSingleProps," asChild">
    | Omit<PrimitiveAccordion.AccordionMultipleProps, "asChild">
);

export { Accordion } from "@radix-ui/react-accordion"