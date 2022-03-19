import { stitches } from "stitches";

import { block } from "./block";

import { buttonContainer } from "./button";



export const buttonGroup = stitches.styled("div", block, {
    display: "flex",
    [`& > ${buttonContainer.selector}`]: {
        position: "relative",
        "&:first-child": {
            borderRightRadius: "0px",
        },
        "&:last-child": {
            borderLeftRadius: "0px",
        },
        "&:not(:first-child):not(:last-child)": {
            borderRadius: "0px"
        },
        zIndex: 0,
        focus: {
            zIndex: 1
        }
    }
});