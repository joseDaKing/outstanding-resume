import React from "react";

import { VariantProps } from "@stitches/react";

import { Box } from "../layout";

import { IconContainer } from "./IconContainer";

type IconGroupHoverProps = VariantProps<typeof Box>;

export const IconGroupHover: React.FC<IconGroupHoverProps> = ({ inline, children }) => {

    return (
        <Box 
        css={{
            position: "relative",
            [`& ${IconContainer}`]: {
                opacity: 0
            },
            [`&:hover ${IconContainer}`]: {
                opacity: 1
            }
        }}
        inline={inline}>
            {children}
        </Box>
    );
}