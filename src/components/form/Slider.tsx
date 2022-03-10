import * as PrimitiveSlider from "@radix-ui/react-slider";

import { VariantProps } from "@stitches/react";

import { colorStyles } from "helpers";

import { block } from "mixins";

import { ElementRef, forwardRef } from "react";

import { stitches } from "stitches";

import { CSSProps } from "types";



const StyledTrack = stitches.styled(PrimitiveSlider.Track, {
    flexGrow: 1,
    flexShrink: 0,
    borderRadius: "$round",
    height: "$1"
});

StyledTrack.displayName = "StyledSliderTrack";

const StyledRange = stitches.styled(PrimitiveSlider.Range, {
    position: "absolute",
    borderRadius: "inherit",
    height: "$1"
});

StyledRange.displayName = "StyledSliderRange";

const StyledThumb = stitches.styled("button", {
    display: "block",
    borderRadius: "$round",
});

StyledThumb.displayName = "StyledSliderThumb";

const StyledRoot = stitches.styled(PrimitiveSlider.Root, block, {
    position: "relative",
    display: "flex",
    alignItems: "center",
    userSelect: "none",
    touchAction: "pan-x",
    width: "$32",
    cursor: "pointer",
    stateDisabled: {        
        [`& ${StyledRange}, & ${StyledThumb}, & ${StyledTrack}`]: {
            cursor: "default"
        }
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
        size: {
            sm: {
                paddingY: "calc($3 / 2)",
                [`& ${StyledThumb}`]: {
                    size: "$3",
                }
            },
            md: {
                paddingY: "calc($4 / 2)",
                [`& ${StyledThumb}`]: {
                    size: "$4",
                }
            },
            lg: {
                paddingY: "calc($5 / 2)",
                [`& ${StyledThumb}`]: {
                    size: "$5",
                }
            }
        },
        variant: {
            inverted: {
                [`& ${StyledTrack}`]: {
                    boxShadow: "$sm",
                    backgroundColor: "$neutralA10"
                },
                [`& ${StyledRange}`]: {
                    backgroundColor: "$inverted",
                },
                [`& ${StyledThumb}`]: {
                    backgroundColor: "$inverted",
                    boxShadow: "$md",
                    stateUndisabled: {
                        focus: {
                            outlineStyle: "solid",
                            outlineColor: "$neutralA8",
                            outlineWidth: "$4"
                        }
                    } 
                }, 
                stateDisabled: {
                    opacity: "$50",
                    [`& ${StyledTrack}`]: {
                        backgroundColor: "$washed12",
                    }
                }
            },
            filled: {
                stateDisabled: {
                    [`& ${StyledTrack}`]: {
                        backgroundColor: "$washed8",
                    },
                    [`& ${StyledRange}, & ${StyledThumb}`]: {
                        backgroundColor: "$washed9",
                    },
                },
            }
        },
        block: {
            false: {
                flexGrow: 1,
                width: "$64 !important",
            }
        }
    },
    defaultVariants: {
        color: "primary",
        variant: "filled" ,
        size: "md"
    },
    compoundVariants: colorStyles({
        variant: "filled",
        styles: (getColor, colorName) => ({
            stateUndisabled: {
                [`& ${StyledTrack}`]: {
                    backgroundColor: colorName === "neutral" ? getColor("8") : getColor("7"),
                },
                [`& ${StyledRange}, & ${StyledThumb}`]: {
                    backgroundColor: colorName === "neutral" ? getColor("12") : getColor("10"),
                },
                [`& ${StyledThumb}`]: {
                    focus: {
                        outlineStyle: "solid",
                        outlineWidth: "$2",
                        outlineColor: colorName === "neutral" ? "$primary8" : "$neutral12"
                    } 
                }
            },
        })
    })
});

StyledRoot.displayName = "StyledSliderRoot";

export type SliderProps = Omit<PrimitiveSlider.SliderProps, "asChild" | "orientation"> & VariantProps<typeof StyledRoot> & CSSProps;

export const Slider = forwardRef<ElementRef<typeof PrimitiveSlider.Root>, SliderProps>((props, ref) => {
    
    const { 
        color,
        variant,
        id,
        ...htmlProps
    } = props;

    const variantProps = {
        variant,
        color
    }

    const value = props.value ?? props.defaultValue ?? [0]; 

    return (
        <StyledRoot
        ref={ref}
        {...htmlProps}
        value={props.value}
        defaultValue={props.defaultValue}
        {...variantProps}>
            <StyledTrack>
                <StyledRange/>
            </StyledTrack>

            {value.map((_, i) => (
                <PrimitiveSlider.Thumb asChild>
                    <StyledThumb 
                    key={i}
                    disabled={props.disabled}
                    id={i === 0 ? id : undefined}/>
                </PrimitiveSlider.Thumb>
            ))}
        </StyledRoot>
    );
});

Slider.toString = () => StyledRoot.selector;

Slider.displayName = "Slider";