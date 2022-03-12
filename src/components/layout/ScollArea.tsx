import React from "react";

import { CSSProps } from "types";

import * as PrimitiveScrollArea from "@radix-ui/react-scroll-area";

import { VariantProps } from "@stitches/react";

import { stitches } from "stitches";



const StyledRoot = stitches.styled(PrimitiveScrollArea.Root, {});

const StyledViewport = stitches.styled(PrimitiveScrollArea.Viewport, {
    size: "$full",
    padding: "$0_5",
    borderRadius: "inherit"
});

StyledViewport.displayName = "StyledScrollAreaViewport";

const StyledScrollbar = stitches.styled(PrimitiveScrollArea.Scrollbar, {
    display: "flex",
    touchAction: "none",
    userSelect: "none",
    padding: 6,
    backgroundColor: "transparent",
    $$scrollbarSize: "10px",
    orientationHorizontal: {
        height: "$$scrollbarSize",
        flexDirection: "column"
    },
    orientationVertical: {
        width: "$$scrollbarSize",
    }
});

StyledScrollbar.displayName = "StyledScrollAreaScrollbar";

const StyledThumb = stitches.styled(PrimitiveScrollArea.Thumb, {
    position: "relative",
    flex: 1,
    backgroundColor: "transparent",
    '&::before': {
        top: "50%",
        left: "50%",
        size: "$full",
        minSize: 4,
        content: "''",
        transition: "$200",
        borderRadius: "$$scrollbarSize",
        backgroundColor: "$neutralA8",
        position: "absolute",
        transformTranslateY: "-$1__2",
        transformTranslateX: "-$1__2",
    },
});

StyledThumb.displayName = "StyledScrollAreaThumb";

const StyledCorner = stitches.styled(PrimitiveScrollArea.Corner, {
    backgroundColor: "transparent"
});

StyledCorner.displayName = "StyledScrollCorner";

export type ScrollAreaProps = CSSProps;

export const ScrollArea: React.FC<ScrollAreaProps> = props => {
    
    return (
        <StyledRoot 
        {...props}>
            <StyledViewport>
                {props.children}
            </StyledViewport>

            <StyledScrollbar 
            orientation="horizontal">
                <StyledThumb/>
            </StyledScrollbar>

            <StyledScrollbar 
            orientation="vertical">
                <StyledThumb/>
            </StyledScrollbar>
            <StyledCorner/>
        </StyledRoot>
    );
}

ScrollArea.toString = () => StyledRoot.selector;