import { ReactElement, Children, forwardRef, isValidElement, cloneElement } from "react";

import { stitches } from "stitches";

import fontMetrics from "@capsizecss/metrics/roboto";

import { colorStyles } from "helpers";

import { VariantProps } from "@stitches/react";

import { CSSProps } from "types";

import { Box } from "components/layout";

import { QuestionMarkCircledIcon } from "@radix-ui/react-icons";

import { Tooltip, TooltipContent, TooltipTrigger } from "../overlays";

import { useId } from "@radix-ui/react-id";

import { block } from "mixins";

import * as PrimitiveLabel from "@radix-ui/react-label";



const StyledIcon = stitches.styled(QuestionMarkCircledIcon, {
    size: 16,
    color: "inherit"
});

const StyledRoot = stitches.styled("div", block, {
    gap: "$2_5",
    display: "flex",
    
    variants: {
        orientation: {
            horizontal: {
                alignItems: "center"
            },
            vertical: {
                alignItems: "start",
                flexDirection: "column"
            }
        },
    },
    defaultVariants: {
        orientation: "horizontal"
    }
});

StyledRoot.displayName = "StyledLabelRoot";

const StyledLabel = stitches.styled(PrimitiveLabel.Root, {
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

StyledLabel.displayName = "StyledLabel";

export type LabelProps = VariantProps<typeof StyledLabel> & VariantProps<typeof StyledRoot> & CSSProps & {
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
        orientation,
        block,
        ...htmlProps
    } = props;

    const variantProps = {
        variant,
        color,
    }
    
    const rootProps = { 
        orientation,
        block
    };

    const id = useId();

    return (
        <StyledRoot
        css={css}
        {...rootProps}>
            <StyledLabel
            {...htmlProps}
            {...variantProps}
            data-disabled={props.disabled ? "" : undefined}
            htmlFor={id}>
                {props.name}
                
                {props.help && 
                <Tooltip>
                    <TooltipTrigger 
                    disabled={props.disabled}
                    asChild>
                        <Box
                        role="none"
                        as="button"
                        css={{
                            focus: {
                                outline: "none"
                            },
                            marginLeft: "$1",
                            display: "inline-block"
                        }}>
                            <StyledIcon/>
                        </Box>
                    </TooltipTrigger>

                    <TooltipContent
                    {...variantProps as any}
                    css={{
                        maxWidth: "$52"
                    }}>
                        {props.help}
                    </TooltipContent>
                </Tooltip>}
            </StyledLabel>

            {Children.map(children, element => {

                if (isValidElement(element)) {

                    return cloneElement(element, {
                        ...variantProps,
                        id, 
                        block,
                        disabled: props.disabled
                    } as any);
                }

                return element;
            })}
        </StyledRoot>
    );
});