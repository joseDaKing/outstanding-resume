import { forwardRef } from "react";

import { stitches } from "stitches";

import fontMetrics from "@capsizecss/metrics/roboto";

import { colorStyles } from "helpers";

import { textSelection } from "mixins";

import { VariantProps } from "@stitches/react";

import { CSSProps } from "types";

import { Box } from "components/layout";

import { QuestionMarkCircledIcon } from "@radix-ui/react-icons";

import { Tooltip } from "../overlays";



const Root = stitches.styled("label", textSelection, {
    fontFamily: "$primary",
    fontWeight: 400,
    cursor: "pointer",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    capSize: {
        fontSize: 14,
        fontMetrics
    },
    stateDisabled: {
        userSelect: "none",
        cursor: "default"
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
        },
        variant: {
            inverted: {
                color: "$inverted"
            },
            filled: {
                stateDisabled: {
                    color: "$washed8",
                }
            }
        }
    },
    defaultVariants: {
        color: "primary",
        variant: "filled"
    },
    compoundVariants: colorStyles({
        variant: "filled",
        styles: (getColor, colorName) => ({
            color: colorName === "neutral" ? getColor("10") : getColor("9")
        })
    })
});

Root.displayName = "LabelRoot";

export type LabelProps = VariantProps<typeof Root> & CSSProps & {
    label?: string;
    htmlFor?: string;
    help?: string;
    disabled?: boolean;
};

export const Label = forwardRef<HTMLLabelElement, LabelProps>((props, ref) => {

    const { label, help, disabled, variant, color, ...htmlProps } = props;

    const variantProps = {
        variant,
        color
    }

    return (
        <>
            {label &&
            <Root
            ref={ref}
            data-disabled={disabled ? "" : undefined}
            {...variantProps}
            {...htmlProps}>
                <span>
                    {label}
                </span>
                
                {help && 
                <Tooltip>
                    <Tooltip.Trigger asChild>
                        <Box
                        as="button"
                        css={{
                            focus: {
                                outline: "none"
                            },
                            marginLeft: "$1",
                            display: "inline-block"
                        }}>
                            <QuestionMarkCircledIcon/>
                        </Box>
                    </Tooltip.Trigger>

                    <Tooltip.Content
                    {...variantProps as any}
                    css={{
                        maxWidth: "$52"
                    }}>
                        {help}
                    </Tooltip.Content>
                </Tooltip>}
            </Root>}
        </>
    );
});

Label.displayName = "Label";

Label.toString = () => Root.selector;