import React, { ElementRef, forwardRef } from "react";

import * as PrimitiveAccordion from "@radix-ui/react-accordion";

import { stitches } from "stitches";

import { CSSProps } from "types";

import { openCloseAnimation } from "mixins";

import { Box } from "./Box";

import fontMetrics from "@capsizecss/metrics/roboto";

import { Stack } from "./Stack";

import { ChevronDownIcon } from "@radix-ui/react-icons";



const StyledIcon = stitches.styled(ChevronDownIcon, {
    marginLeft: "auto",
    transition: "$200",
    transitionProperty: "transform",
    size: "$6",
    color: "$neutral12"
});

const StyledTitle = stitches.styled("div", {
    fontFamily: "$primary",
    fontWeight: 600,
    capSize: {
        fontSize: 16,
        fontMetrics
    }
});

StyledTitle.displayName = "StyledAccordionTitle";

const StyledSubtitle = stitches.styled("div", {
    fontFamily: "$primary",
    marginTop: "$2",
    fontWeight: 500,
    capSize: {
        fontSize: 14,
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

const StyledContent = stitches.styled(PrimitiveAccordion.Content, openCloseAnimation);

StyledContent.displayName = "StyledAccordionContent";

const StyledItem = stitches.styled(PrimitiveAccordion.Item, {
    backgroundColor: "$neutralA2",
    borderRadius: "$sm",
    transition: "$200",
    transitionProperty: "transform",
    "&:not(:first-child)": {
        marginTop: "$4"
    },
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

const StyledRoot = stitches.styled(PrimitiveAccordion.Root, {});

StyledRoot.displayName = "StyledAccordionRoot";

export type AccordionItemProps = Omit<PrimitiveAccordion.AccordionItemProps, "asChild"> & CSSProps & {
    title: string;
    subtitle?: string;
}

export const AccordionItem = forwardRef<ElementRef<typeof PrimitiveAccordion.Item>, AccordionItemProps>((props, ref) => {

    const {
        title,
        subtitle,
        css,
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
                                {title}
                            </StyledTitle>

                            {subtitle &&
                            <StyledSubtitle>
                                {subtitle}
                            </StyledSubtitle>}
                        </Box>

                        <StyledIcon/>
                    </Stack>
                </StyledTrigger>
            </PrimitiveAccordion.Header>
            <StyledContent>
                <Box 
                css={{
                    ...(css ?? {}),
                    width: "100%",
                    
                    padding: "$4",
                }}>
                    {props.children}
                </Box>
            </StyledContent>
        </StyledItem>
    );
});

AccordionItem.toString = () => StyledRoot.selector;

AccordionItem.displayName = "AccordionItem";



export type AccordionProps = React.RefAttributes<HTMLDivElement> & CSSProps & (
    Omit<PrimitiveAccordion.AccordionSingleProps," asChild">
    | Omit<PrimitiveAccordion.AccordionMultipleProps, "asChild">
);

export const Accordion = forwardRef<ElementRef<typeof PrimitiveAccordion.Root>, AccordionProps>((props, ref) => {

    return (
        <StyledRoot
        {...props}
        ref={ref}>
            {props.children}
        </StyledRoot>
    );
});

Accordion.displayName = "Accordion";

Accordion.toString = () => StyledRoot.selector;