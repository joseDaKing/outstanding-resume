import * as PrimitiveSwitch from "@radix-ui/react-switch";

import { VariantProps } from "@stitches/react";
import { colorStyles } from "helpers";

import { round } from "mixins";

import { stitches } from "stitches";



const StyledThumb = stitches.styled(PrimitiveSwitch.Thumb, {
    display: "block",
    borderRadius: "inherit"
});

const StyledRoot = stitches.styled(PrimitiveSwitch.Root, round, {
    padding: "$0_5",
    transition: "$200",
    transitionProperty: "color",
    [`& ${StyledThumb}`]: {
        size: "$$checkboxSize",
        marginRight: "$$checkboxSize",
        transition: "inherit",
        transitionProperty: "transform",
        stateToggled: {
            transformTranslateX: "$full",
        }
    },
    variants: {
        size: {
            sm: {
                [`& ${StyledThumb}`]: {
                    $$checkboxSize: "$size$3_5",
                }
            },
            md: {
                [`& ${StyledThumb}`]: {
                    $$checkboxSize: "$size$4",
                }
            },
            lg: {
                [`& ${StyledThumb}`]: {
                    $$checkboxSize: "$size$4_5",
                }
            }
        },
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
            filled: {},
            inverted: {
                [`& ${StyledThumb}`]: {
                    backgroundColor: "$inverted"
                },
                focus: {
                    outlineStyle: "solid",
                    outlineWidth: "$2",
                    outlineColor: "$neutral12"
                },
                hover: {
                    opacity: "$90"
                },
                active: {
                    opacity: "$90"
                },
                stateUntoggled: {
                    backgroundColor: "$neutralA9",
                },
                stateToggled: {
                    backgroundColor: "$neutralA11",
                }
            }
        }
    },
    defaultVariants: {
        size: "md",
        color: "primary",
        variant: "filled"
    },
    compoundVariants: colorStyles({
        variant: "filled",
        styles: (getColor, colorName) => ({
            [`& ${StyledThumb}`]: {
                backgroundColor: getColor("1")
            },
            focus: {
                outlineStyle: "solid",
                outlineWidth: "$2",
                outlineColor: colorName === "neutral" ? "$primary8" : "$neutral12"
            },
            stateUntoggled: {
                backgroundColor: colorName === "neutral" ? getColor("8") : getColor("7"),
                hover: {
                    opacity: "$85"
                },
                active: {
                    opacity: "$85"
                }
            },
            stateToggled: {
                backgroundColor: colorName === "neutral" ? getColor("12") : getColor("10"),
                hover: {
                    backgroundColor: colorName === "neutral" ? getColor("12") : getColor("9"),
                    opacity: colorName === "neutral" ? "$90" : "1"
                },
                active: {
                    backgroundColor: colorName === "neutral" ? getColor("12") : getColor("9"),
                    opacity: colorName === "neutral" ? "$90" : "1"
                }
            }
        })
    })
});

type SwithProps = Omit<PrimitiveSwitch.SwitchProps, "asChild"> & VariantProps<typeof StyledRoot>;

export const Switch: React.FC<SwithProps> = props => {
    return (
        <StyledRoot 
        {...props}>
            <StyledThumb/>
        </StyledRoot>
    );
}