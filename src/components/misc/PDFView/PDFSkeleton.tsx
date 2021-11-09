import React from "react";

import { Box } from "../../layout";

import { IPDFViewSharedProps } from "./shared";

type PDFSkeletonProps = Required<Omit<IPDFViewSharedProps, "Document">>;

const A4_WIDTH_IN_PX = 595;

const A4_HEIGHT_IN_PX = 842;

export const PDFSkeleton: React.FC<PDFSkeletonProps> = ({ scale, children }) => {

    const width = scale * A4_WIDTH_IN_PX;

    const height = scale * A4_HEIGHT_IN_PX;
    
    return (
        <Box
        css={{
            width,
            height,
            backgroundColor: "white"
        }}>
            {children}
        </Box>
    );
}

export const PDFSkeletonError: React.FC<PDFSkeletonProps> = props => {

    return (
        <PDFSkeleton
        {...props}>
            error
        </PDFSkeleton>
    );
}