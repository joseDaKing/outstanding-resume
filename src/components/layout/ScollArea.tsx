import React from "react";

import { CSSProps } from "types";

import { Root, Viewport, Scrollbar, Thumb, Corner } from "@radix-ui/react-scroll-area";

import { stitches } from "stitches";



const StyledRoot = stitches.styled(Root, {
    overflow: "hidden"
});

StyledRoot.displayName = "ScrollAreaRoot";

const StyledViewport = stitches.styled(Viewport, {
    size: "$full",
    paddingY: "$0_5",
    borderRadius: "inherit"
});

StyledViewport.displayName = "ScrollAreaViewport";

const StyledScrollbar = stitches.styled(Scrollbar, {
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

StyledScrollbar.displayName = "ScrollAreaScrollbar";

const StyledThumb = stitches.styled(Thumb, {
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

StyledThumb.displayName = "ScrollAreaThumb";

const StyledCorner = stitches.styled(Corner, {
    backgroundColor: "transparent"
});

StyledCorner.displayName = "ScrollCorner";

export const ScrollArea: React.FC<CSSProps> = props => {

    return (
        <StyledRoot 
        css={props.css}>
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