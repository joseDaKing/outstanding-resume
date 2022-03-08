import * as PrimitiveSlider from "@radix-ui/react-slider";

import { VariantProps } from "@stitches/react";

import { ElementRef, forwardRef } from "react";

import { stitches } from "stitches";

import { CSSProps } from "types";



const StyledRoot = stitches.styled(PrimitiveSlider.Root, {
    backgroundColor: "red",
    borderRadius: "$round",
    orientationVertical: {
        height: "$64",
        width: "$1",
    },
    orientationHorizontal: {
        width: "$64",
        height: "$1",
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
            inverted: {},
            filled: {}
        }
    },
    defaultVariants: {
        color: "primary",
        variant: "filled" 
    }
});

const StyledTrack = stitches.styled(PrimitiveSlider.Track, {});

const StyledRange = stitches.styled(PrimitiveSlider.Range, {});

const StyledThumb = stitches.styled(PrimitiveSlider.Thumb, {});

type SliderProps = Omit<PrimitiveSlider.SliderProps, "asChild"> & VariantProps<typeof StyledRoot> & CSSProps;

export const Slider = forwardRef<ElementRef<typeof PrimitiveSlider.Root>, SliderProps>((props, ref) => {
    
    const { 
        color,
        variant,
        css,
        ...htmlProps
    } = props;

    const variantProps = {
        variant,
        color
    }

    const value = props.value ?? props.defaultValue ?? [];

    return (
        <StyledRoot
        ref={ref}
        {...htmlProps}
        {...variantProps}>
            <StyledTrack>
                <StyledRange/>
            </StyledTrack>

            {value.map((_, i) => (
                <StyledThumb key={i}/>
            ))}
        </StyledRoot>
    );
});