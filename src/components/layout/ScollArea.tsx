import React from "react";

import { CSSProps } from "types";

import { Root, Viewport, Scrollbar, Thumb, Corner } from "@radix-ui/react-scroll-area";

import { VariantProps } from "@stitches/react";

import { stitches } from "stitches";

import { colorStyles } from "helpers";



const StyledRoot = stitches.styled(Root, {
    overflow: "hidden",
    variants: {
        color: {
            primary: {},
            secondary: {},
            neutral: {},
            action: {},
            success: {},
            warning: {},
            danger: {}
        }
    },
    defaultVariants: {
        color: "primary"
    },
    compoundVariants: colorStyles({
        styles: getColor => ({
            $$scrollbarColor: `$color${getColor("8", true)}`
        })
    })
});

StyledRoot.displayName = "StyledScrollAreaRoot";

const StyledViewport = stitches.styled(Viewport, {
    size: "$full",
    padding: "$0_5",
    borderRadius: "inherit"
});

StyledViewport.displayName = "StyledScrollAreaViewport";

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

StyledScrollbar.displayName = "StyledScrollAreaScrollbar";

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
        backgroundColor: "$$scrollbarColor",
        position: "absolute",
        transformTranslateY: "-$1__2",
        transformTranslateX: "-$1__2",
    },
});

StyledThumb.displayName = "StyledScrollAreaThumb";

const StyledCorner = stitches.styled(Corner, {
    backgroundColor: "transparent"
});

StyledCorner.displayName = "StyledScrollCorner";

export type ScrollAreaProps = CSSProps & VariantProps<typeof StyledRoot>;

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