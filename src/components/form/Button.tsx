import { forwardRef } from "react";

import { stitches } from "stitches";

import { VariantProps } from "@stitches/react";

import { CSSProps, IconProps } from "types";

import { round, formLargeContainer, formLargeText, textAlign } from "mixins";

import { colorStyles } from "helpers";

import { block } from "mixins";



export const StyledText = stitches.styled("span", formLargeText, {
    display: "inline-flex",
    width: "fit-content"
});

StyledText.displayName = "StyledButtonText";

export const StyledRoot = stitches.styled("button", formLargeContainer, round, block, textAlign, {
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

StyledRoot.displayName = "StyledButtonRoot";

export type ButtonProps = Omit<JSX.IntrinsicElements["button"], "ref"> & VariantProps<typeof StyledRoot> & CSSProps & IconProps;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ StartIcon, EndIcon, ...props }, ref) => {

    const { 
        size,
        round,
        color,
        variant,
        align = "center",
        ...htmlProps
    } = props;

    const styledProps = {
        size,
        round,
        color,
        align,
        variant,
    };

    if (props.dir === "ltr") {

        let temp = StartIcon;

        StartIcon = EndIcon;

        EndIcon = temp;
    }

    return (
        <StyledRoot 
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
        </StyledRoot>
    );
});

Button.displayName = "Button";

Button.toString = () => StyledRoot.selector;