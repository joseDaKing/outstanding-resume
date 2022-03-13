import fontMetrics from "@capsizecss/metrics/roboto";

import { ScrollArea } from "components/layout";

import * as PrimitiveTabs from "@radix-ui/react-tabs";

import { ElementRef, forwardRef } from "react";

import { stitches } from "stitches";

import { colorStyles } from "helpers";

import { block } from "mixins";

import { VariantProps } from "@stitches/react";



export const Tabs = stitches.styled(PrimitiveTabs.Root, {
    width: "$full",
    overflow: "hidden",
});

Tabs.displayName = "Tabs";



const StyledTabsList = stitches.styled(PrimitiveTabs.List, block, {
    display: "flex",
    firstChildren: {
        borderTopLeftRadius: "$sm"
    },
    lastChildren: {
        borderTopRightRadius: "$sm"
    }
});

StyledTabsList.displayName = "StyledTabsList";

export type TabListProps = PrimitiveTabs.TabsListProps & VariantProps<typeof StyledTabsList>;

export const TabsList = forwardRef<ElementRef<typeof PrimitiveTabs.List>, TabListProps>((props, ref) => {

    return (
        <ScrollArea
        css={{
            paddingBottom: "$2_5"
        }}>
            <StyledTabsList 
            {...props}
            ref={ref}>
                {props.children}
            </StyledTabsList>
        </ScrollArea>
    );
});


export const TabsTrigger = stitches.styled(PrimitiveTabs.Trigger, {
    fontFamily: "$primary",
    capSize: {
        fontMetrics,
        fontSize: 16
    },
    flexGrow: 1,
    padding: "$4",
    borderBottomStyle: "solid",
    borderBottomWidth: "$1",
    borderBottomColor: "$neutral4",
    color: "$neutral10",
    focus: {
        outlineStyle: "solid",
        outlineWidth: "$2",
        outlineOffset: "-$borderWidth$2",
        outlineColor: "$neutral12"
    },
    stateUndisabled: {
        hover: {
            backgroundColor: "$neutralA2"
        },
        stateToggled: {
            borderBottomWidth: "$3",
            backgroundColor: "$neutralA4",
        }
    },
    stateDisabled: {
        color: "$washed8"
    },
    variants: {
        color: {
            primary: {},
            secondary: {},
            neutral: {},
            action: {},
            success: {},
            warning: {},
            danger: {}
        }
    },
    defaultVariants: {
        color: "primary"
    },
    compoundVariants: colorStyles({
        styles: (getColor, colorName) => ({
            stateUndisabled: {
                stateToggled: {
                    color: colorName === "neutral" ? getColor("12") : getColor("10"),
                    borderBottomColor: colorName === "neutral" ? getColor("12") : getColor("10"),
                }
            }
        })
    })
});

TabsTrigger.displayName = "TabsTrigger";



export const TabsContent = stitches.styled(PrimitiveTabs.Content, {
    padding: "$4",
    paddingTop: "$6",
    marginLeft: "auto",
});

TabsContent.displayName = "TabsContent";

export type {
    TabsProps,
    TabsContentProps
} from "@radix-ui/react-tabs"