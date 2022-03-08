import { forwardRef } from "react";

import { stitches } from "stitches";

import { VariantProps } from "@stitches/react";

import { CSSProps, IconProps } from "types";

import { round, formLargeContainer, formLargeText } from "mixins";

import { colorStyles } from "helpers";



export const Text = stitches.styled("span", formLargeText, {});

Text.displayName = "ButtonText";

export const Root = stitches.styled("button", formLargeContainer, round, {
    display: "block",
    userSelect: "none",
    variants: {
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
                },
                stateUndisabled: {
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

Root.displayName = "ButtonRoot";

type ButtonProps = Omit<JSX.IntrinsicElements["button"], "ref"> & VariantProps<typeof Root> & CSSProps & IconProps;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ StartIcon, EndIcon, ...props }, ref) => {

    const { 
        size,
        round,
        color,
        variant,
        ...htmlProps
    } = props;

    const styledProps = {
        size,
        round,
        color,
        variant,
    };

    if (props.dir === "ltr") {

        let temp = StartIcon;

        StartIcon = EndIcon;

        EndIcon = temp;
    }

    return (
        <Root 
        {...htmlProps} 
        {...styledProps}
        ref={ref}>
            <Text>
                {StartIcon && 
                <StartIcon/>}

                {props.children &&
                <span>
                    {props.children}
                </span>}

                {EndIcon && 
                <EndIcon/>}
            </Text>
        </Root>
    );
});

Button.displayName = "Button";

Button.toString = () => Root.selector;