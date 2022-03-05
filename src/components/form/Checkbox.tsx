import * as PrimitiveCheckbox from "@radix-ui/react-checkbox";

import { stitches } from "stitches";

import { CSSProps } from "types";

import { LabelProps } from "./Label";

import { VariantProps } from "@stitches/react";
import { colorStyles } from "helpers";



const StyledIndicator = stitches.styled(PrimitiveCheckbox.Indicator, {});

const StyledRoot = stitches.styled(PrimitiveCheckbox.Root, {
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
            filled: {},
            inverted: {}
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

            })
        }),
        ...colorStyles({
            variant: "inverted",
            styles: (getColor, colorName) => ({

            })
        }),
    ]
});

type CheckboxProps = Omit<PrimitiveCheckbox.CheckboxProps, "asChild"> & VariantProps<typeof StyledRoot> & LabelProps & CSSProps;

export const Checkbox: React.FC<CheckboxProps> = props => {

    return (
        <>
        </>
    );
}