import React from "react";

import { Box } from "../../layout";

interface IPDFSkeletonProps {
    scale: number;
}

const A4_WIDTH_IN_PX = 595;

const A4_HEIGHT_IN_PX = 842;

export const PDFSkeleton: React.FC<IPDFSkeletonProps> = ({ scale, children }) => {

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

export const PDFSkeletonError: React.FC<IPDFSkeletonProps> = props => {

    return (
        <PDFSkeleton
        {...props}>
            error
        </PDFSkeleton>
    );
}