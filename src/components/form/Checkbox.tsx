import * as PrimitiveCheckbox from "@radix-ui/react-checkbox";

import { stitches } from "stitches";

import { CSSProps } from "types";

import { VariantProps } from "@stitches/react";

import { colorStyles } from "helpers";

import { CheckIcon } from "@radix-ui/react-icons";

import { ElementRef, forwardRef } from "react";

type a = PrimitiveCheckbox.CheckboxProps

const StyledIndicator = stitches.styled(PrimitiveCheckbox.Indicator, {});

const StyledRoot = stitches.styled(PrimitiveCheckbox.Root, {
    borderRadius: "$sm",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderStyle: "solid",
    borderWidth: "$1",
    size: "calc($$checkboxSize + calc($space$0_5 * 2))",
    transition: "$200",
    transitionProperty: "color",
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
                color: "transparent",
                [`& ${StyledIndicator}`]: {
                    color: "$inverted"
                },
                borderColor: "$washed8",
                stateToggled: {
                    stateDisabled: {
                        backgroundColor: "$washed8"
                    }
                }
            },
            inverted: {
                boxShadow: "$md",
                borderColor: "$inverted",
                backgroundColor: "$inverted",
                stateDisabled: {
                    [`& ${StyledIndicator}`]: {
                        color: "$washed10"
                    }
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
            }
        },
        size: {
            sm: {
                $$checkboxSize: "$size$3_5"
            },
            md: {
                $$checkboxSize: "$size$4"
            },
            lg: {
                $$checkboxSize: "$size$4_5"
            }
        }
    },
    defaultVariants: {
        size:"md",
        color: "primary",
        variant: "filled"
    },
    compoundVariants: [
        ...colorStyles({
            variant: "filled",
            styles: (getColor, colorName) => ({
                focus: {
                    outlineColor: colorName === "neutral" ? "$primary8" : "$neutral12",
                    outlineStyle: "solid",
                    outlineWidth: "$2",
                    outlineOffset: "0px",
                },
                stateUndisabled: {
                    borderColor: colorName === "neutral" ? getColor("12") : getColor("10"),
                    hover: {
                        borderColor: colorName === "neutral" ? getColor("10") : getColor("8")
                    },
                    active: {
                        borderColor: getColor("8")
                    },
                    stateToggled: {
                        borderColor: colorName === "neutral" ? getColor("12") : getColor("10"),
                        backgroundColor: colorName === "neutral" ? getColor("12") : getColor("10"),
                        hover: {
                            borderColor: colorName === "neutral" ? getColor("12") : getColor("9"),
                            backgroundColor: colorName === "neutral" ? getColor("12") : getColor("9"),
                            opacity: colorName === "neutral" ? "$85" : "1"
                        },
                        active: {
                            borderColor: colorName === "neutral" ? `getColor("12")` : getColor("9"),
                            backgroundColor: colorName === "neutral" ? getColor("12") : getColor("9")
                        }
                    }
                }
            })
        }),
        ...colorStyles({
            variant: "inverted",
            styles: (getColor, colorName) => ({
                [`& ${StyledIndicator}`]: {
                    color: colorName === "neutral" ? getColor("12") : getColor("11")
                }
            })
        }),
    ]
});

StyledRoot.displayName = "StyledCheckboxRoot";

export type CheckboxProps = Omit<PrimitiveCheckbox.CheckboxProps, "asChild"> & VariantProps<typeof StyledRoot> & CSSProps;

export const Checkbox = forwardRef<ElementRef<typeof PrimitiveCheckbox.Root>, CheckboxProps>((props, ref) => {

    const {
        size,
        color,
        css,
        variant,
        ...htmlProps
    } = props;

    const variantProps = {
        size,
        color,
        variant
    }

    return (
        <StyledRoot 
        ref={ref}
        {...variantProps} 
        {...htmlProps}>
            <StyledIndicator 
            asChild>
                <CheckIcon/>
            </StyledIndicator>
        </StyledRoot>
    );
});