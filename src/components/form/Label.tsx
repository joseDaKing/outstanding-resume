import { ReactElement, Children, forwardRef, isValidElement, cloneElement } from "react";

import { stitches } from "stitches";

import fontMetrics from "@capsizecss/metrics/roboto";

import { colorStyles } from "helpers";

import { textSelection } from "mixins";

import { VariantProps } from "@stitches/react";

import { CSSProps } from "types";

import { Box } from "components/layout";

import { QuestionMarkCircledIcon } from "@radix-ui/react-icons";

import { Tooltip } from "../overlays";

import { Stack } from "../layout";

import { useId } from "@radix-ui/react-id";



const StyledRoot = stitches.styled("label", {
    fontFamily: "$primary",
    fontWeight: 400,
    cursor: "pointer",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    userSelect: "none",
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

StyledRoot.displayName = "StyledRoot";

export type LabelProps = VariantProps<typeof StyledRoot> & VariantProps<typeof Stack> & CSSProps & {
    name: string;
    help?: string;
    disabled?: boolean;
    children: ReactElement<any, any>;
};

export const Label = forwardRef<HTMLLabelElement, LabelProps>((props, ref) => {

    const {
        variant,
        color,
        css,
        children,
        reverse,
        orientation = "horizontal",
        alignMain = orientation === "horizontal" ? "start" : "center",
        alignCross = orientation === "horizontal" ? "center" : "start",
        wrap,
        ...htmlProps
    } = props;

    const variantProps = {
        variant,
        color
    }
    
    const stackProps = {
        reverse,
        orientation,
        alignMain,
        alignCross,
        wrap
    }

    const id = useId();

    return (
        <Stack
        css={{
            gap: "$2_5",
            ...(css ?? {}), 
        }}
        {...stackProps}>
            <StyledRoot
            {...htmlProps}
            {...variantProps}
            data-disabled={props.disabled ? "" : undefined}
            htmlFor={id}>
                {props.name}
                
                {props.help && 
                <Tooltip>
                    <Tooltip.Trigger 
                    asChild>
                        <Box
                        disabled={props.disabled}
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
                        {props.help}
                    </Tooltip.Content>
                </Tooltip>}
            </StyledRoot>

            {Children.map(children, element => {

                if (isValidElement(element)) {

                    return cloneElement(element, { 
                        id, 
                        disabled: props.disabled,
                        ...variantProps 
                    } as any);
                }

                return element;
            })}
        </Stack>
    );
});