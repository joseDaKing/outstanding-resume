import React, { forwardRef } from "react";

import fontMetrics from "@capsizecss/metrics/roboto";

import { stitches } from "stitches";

import { VariantProps } from "@stitches/react";

import { CSSProps, IconProps } from "types";

import { content, round } from "mixins";

import { colorStyles } from "helpers";



const StyledText = stitches.styled("span", {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "inherit",
    fontFamily: "$primary",
    textTransform: "uppercase",
    "& svg": {
        display: "inline-block"
    }
});

const StyledButton = stitches.styled("button", round, content, {
    display: "block",
    variants: {
        size: {
            sm: {
                capSize: {
                    fontSize: 14,
                    fontMetrics
                },
                paddingX: "$2_5",
                paddingY: "$2",
                [`& ${StyledText}`]: {
                    gap: "$2"
                },
                "& svg": {
                    size: 13,
                },
            },
            md: {
                capSize: {
                    fontSize: 15,
                    fontMetrics
                },
                paddingX: "$3",
                paddingY: "$2_5",
                [`& ${StyledText}`]: {
                    gap: "$2_5"
                },
                "& svg": {
                    size: 14,
                },
            },
            lg: {
                capSize: {
                    fontSize: 16,
                    fontMetrics
                },
                paddingX: "$3_5",
                paddingY: "$3",
                [`& ${StyledText}`]: {
                    gap: "$3"
                },
                "& svg": {
                    size: 15,
                },
            },
        },
        color: {
            primary: {},
            secondary: {},
            neutral: {},
            action: {},
            success: {},
            warning: {},
            danger: {},
        },
        variant: {
            filled: {
                color: "$inverted",
                stateDisabled: {
                    backgroundColor: "$washed10"
                }   
            },
            ghost: {
                stateDisabled: {
                    color: "$washed9",
                    backgroundColor: "$washed4"
                }
            },
            inverted: {
                boxShadow: "$md",
                stateDisabled: {
                    color: "$washed10"
                }
            },
            text: {
                backgroundColor: "transparent",
                stateDisabled: {
                    color: "$washed9",
                    backgroundColor: "$washed4"
                }
            }
        }
    },
    defaultVariants: {
        size: "md",
        color: "primary",
        variant: "filled"
    },
    compoundVariants: [
        ...colorStyles({
            variant: "filled", 
            styles: (getColor, colorName) => ({
                backgroundColor: colorName === "neutral" ? getColor("12") : getColor("10"),
                active: {
                    backgroundColor: colorName === "neutral" ? getColor("12") : getColor("9"),
                    opacity: colorName === "neutral" ? "$90" : 1,
                },
                hover: {
                    backgroundColor: colorName === "neutral" ? getColor("12") : getColor("9"),
                    opacity: colorName === "neutral" ? "$90" : 1,
                },
                focus: {
                    outlineStyle: "solid",
                    outlineWidth: "$2",
                    outlineColor: colorName === "neutral" ? "$primary8" : "$neutral12"
                }
            })
        }),
        ...colorStyles({
            variant: "ghost", 
            styles: getColor => ({
                color: getColor("11"),
                backgroundColor: getColor("4", true),
                active: {
                    backgroundColor: getColor("5", true)
                },
                hover: {
                    backgroundColor: getColor("5", true)
                },
                focus: {
                    outlineStyle: "solid",
                    outlineWidth: "$2",
                    outlineColor: getColor("7"),
                }
            })
        }),
        ...colorStyles({
            variant: "inverted", 
            styles: (getColor, colorName) => ({
                backgroundColor: "$inverted",
                color: colorName === "neutral" ? getColor("12") : getColor("11"),
                boxShadow: "$sm",
                active: {
                    opacity: "$90"
                },
                hover: {
                    opacity: "$90"
                },
                focus: {
                    outlineStyle: "solid",
                    outlineWidth: "$2",
                    outlineColor: "$neutral12",
                    boxShadow: "$md"
                }
            })
        }),
        ...colorStyles({
            variant: "text", 
            styles: getColor => ({
                color: getColor("11"),
                active: {
                    backgroundColor: getColor("5")
                },
                hover: {
                    backgroundColor: getColor("5")
                },
                focus: {
                    outlineStyle: "solid",
                    outlineWidth: "$2",
                    outlineColor: getColor("7")
                }
            })
        })
    ]
});

type ButtonProps = Omit<JSX.IntrinsicElements["button"], "ref"> & VariantProps<typeof StyledButton> & CSSProps & IconProps;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ StartIcon, EndIcon, ...props }, ref) => {

    const { 
        size,
        round,
        color,
        variant,
        content,
        ...htmlProps
    } = props;

    const styledProps = {
        size,
        round,
        color,
        variant,
        content,
    };

    if (props.dir === "ltr") {

        let temp = StartIcon;

        StartIcon = EndIcon;

        EndIcon = temp;
    }

    return (
        <StyledButton 
        {...htmlProps} 
        {...styledProps}
        ref={ref}>
            <StyledText>
                {StartIcon && 
                <StartIcon/>}

                {props.children &&
                <span>
                    {props.children}
                </span>}

                {EndIcon && 
                <EndIcon/>}
            </StyledText>
        </StyledButton>
    );
});

Button.toString = () => StyledButton.selector;