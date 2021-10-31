import React from "react";

import { VariantProps } from "@stitches/react";

import { Stack } from "./Stack";

import { styled } from "../../stitches";

const StyledPlaceAside = styled("div", {
    position: "absolute",
    top: 0,
    bottom: 0,
    width: 0,
    variants: {
        align: {
            start: {
                left: 0,
            },
            end: {
                right: 0,
            }
        }
    }
});

type PlaceAsideProps = VariantProps<typeof StyledPlaceAside>;

export const PlaceAside: React.FC<PlaceAsideProps> = ({ children, align }) => {

    return (
        <StyledPlaceAside
        align={align}>
            <Stack
            css={{
                flexDirection: align === "start" ? "row-reverse" : "inherit"
            }}
            axis="x">
                {children}
            </Stack>
        </StyledPlaceAside>
    );
}