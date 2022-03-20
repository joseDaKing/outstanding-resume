import { block }  from "./block";

import { round } from "./round";

import { textAlign } from "./textAlign";

import { colorStyles } from "helpers";

import { stitches } from "stitches";

import { formLargeText, formLargeContainer } from "./formLarge";



export const buttonText = stitches.css(formLargeText, {
    display: "inline-flex",
    width: "fit-content"
});

export const buttonContainer = stitches.css(formLargeContainer, round, block, textAlign, {
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
                    backgroundColor: "$washed4 !important"
                }
            },
            text: {
                backgroundColor: "transparent",
                stateDisabled: {
                    color: "$washed9",
                    backgroundColor: "$washed4 !important"
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
                    },
                    stateToggled: {
                        opacity: "$80"  
                    }
                }
            },
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
                    opacity: "$90"
                },
                hover: {
                    opacity: "$90"
                },
                focus: {
                    outlineStyle: "solid",
                    outlineWidth: "$2",
                    outlineColor: colorName === "neutral" ? "$primary8" : "$neutral12"
                },
                stateToggled: {
                    opacity: "$80"
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
                },
                stateToggled: {
                    backgroundColor: getColor("6", true),
                    focus: {
                        outlineColor: getColor("8"),
                    },  
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
                    backgroundColor: getColor("5", true)
                },
                hover: {
                    backgroundColor: getColor("5", true)
                },
                focus: {
                    outlineStyle: "solid",
                    outlineWidth: "$2",
                    outlineColor: getColor("7")
                },
                stateToggled: {
                    backgroundColor: getColor("6", true),
                    focus: {
                        outlineColor: getColor("8"),
                    },  
                }
            })
        })
    ]
});