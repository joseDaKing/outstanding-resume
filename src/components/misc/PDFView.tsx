import React, { useState } from "react";

import { Box, Stack } from "../layout";

import { DocumentProps } from "react-pdf";

import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

import { pdf } from "@react-pdf/renderer";

import { useAsync } from "react-use";

import { MdOpenInFull } from "react-icons/md";

import { styled } from "../../stitches";

import { IPaginatorListeners } from "./Paginator";

const IconContainer = styled(Stack, {
    _size: "$12",
    color: "white",
    alignItems: "center",
    borderRadius: "$full",
    backgroundColor: "$light-blue-400",
    transitionDuration: "$100",
    transitionProperty: "all",
});

const PDFViewContainer = styled(Box, {
    backgroundColor: "red",
    userSelect: "none",
    borderRadius: "$md",
    position: "relative",
    cursor: "default",
    margin: "auto",
    overflow: "hidden",
    flexBasis: "auto !important",
    [`& ${IconContainer}`]: {
        transform: "scale(0)",
    },
    [`&:hover ${IconContainer}`]: {
        transform: "scale(1)"
    },
    variants: {
        clickable: {
            true: {
                cursor: "pointer",
            },
            false: {
                [`& ${IconContainer}`]: {
                    display: "none"
                }
            }
        }
    }
});


const A4_WIDTH_IN_PX = 593;

const A4_HEIGHT_IN_PX = 840;

const getDimensions = (scale: number) => {

    return {
        width: A4_WIDTH_IN_PX * scale,
        height: A4_HEIGHT_IN_PX * scale
    }
}


interface IPDFSkeletonProps {
    scale: number;
}

const PDFSkeleton: React.FC<IPDFSkeletonProps> = ({ scale }) => {

    return (
        <Box
        css={{
            backgroundColor: "white",
            position: "absolute",
            ...getDimensions(scale)
        }}/>
    );
}


interface IDocumentListeners {
    onLoadProgress?: DocumentProps["onLoadProgress"];
    onLoadSuccess?: DocumentProps["onLoadSuccess"];
    onRenderSuccess?: () => void;
}

interface IDocumentContainerProps extends IDocumentListeners {
    scale?: number; 
    width?: number;
    height?: number;
    currentPage: number;
    
    file?: {
        url: string;
    } | null;
}

const DocumentContainer: React.FC<IDocumentContainerProps> = ({ 
    scale,
    width,
    height,
    currentPage,
    onLoadSuccess,
    onLoadProgress,
    onRenderSuccess,
    file
}) => {

    const pdfViewProps = {
        error: "",
        noData: "",
        loading: "",
    }

    return (
        <>
            {!!file && 
            <Document
            {...pdfViewProps}
            file={file}
            onLoadProgress={onLoadProgress}
            onLoadSuccess={onLoadSuccess}>
                <Page
                {...pdfViewProps}
                scale={scale}
                width={width}
                height={height}
                pageNumber={currentPage}
                onRenderSuccess={onRenderSuccess}/>
            </Document>}
        </>
    );
}


interface IPDFListeners {
    onToPDFStart?: () => void;
    onToPDFEnd?: () => void;
    onClick?: () => void;
}

interface IPDFViewProps extends IDocumentListeners, IPDFListeners {
    document: JSX.Element;
    scale?: number;
    currentPage: number;
}

export const PDFView: React.FC<IPDFViewProps> = ({ 
    onClick,
    document,
    currentPage,
    onLoadSuccess,
    onLoadProgress,
    onRenderSuccess,
    onToPDFEnd,
    onToPDFStart,
    scale = 0.5
}) => { 
    
    const result = useAsync(async () => { 

        onToPDFStart && onToPDFStart();

        if (!document) {

            return null;
        }

        const blob = await pdf(document).toBlob();
        
        const url = URL.createObjectURL(blob);

        onToPDFEnd && onToPDFEnd();

        return { url };
    }, [document]);

    const isClickable = !!onClick;

    return (
        <PDFViewContainer
        css={getDimensions(scale)}
        clickable={isClickable}>
            <PDFSkeleton
            scale={scale}/>

            <Box 
            css={{
                position: "absolute",
                zIndex: "$10"
            }}>
                <DocumentContainer
                scale={scale}
                onLoadProgress={onLoadProgress}
                onLoadSuccess={onLoadSuccess}
                onRenderSuccess={onRenderSuccess}
                file={result.value}
                currentPage={currentPage}/>
            </Box>

            {isClickable &&
            <Stack
            onClick={onClick}
            align="center" 
            css={{
                _inset: "0px",
                alignItems: "center",
                position: "absolute",
                zIndex: "$50",
            }}>
                <IconContainer>
                    <MdOpenInFull size={28}/>
                </IconContainer>
            </Stack>}
        </PDFViewContainer>
    );
}

export const usePDFView = () => {

    const [isUpdating, setIsUpdating] = useState(false);

    const [isLoading, setIsLoading] = useState(true);

    const [numberOfPages, setNumberOfPages] = useState(1);

    const [currentPageNumber, setCurrentPageNumber] = useState(1);

    type Listeners = Required<IPaginatorListeners & IDocumentListeners & Omit<IPDFListeners, "onClick">>;

    const listeners: Listeners = {
        onLoadProgress: () => {
            
        },
        onLoadSuccess: ({ numPages }) => {
            
            setNumberOfPages(numPages);
        },
        onRenderSuccess: () => {

        },
        onToPDFEnd: () => {

        },
        onToPDFStart: () => {

        },
        onNext: () => {

            setCurrentPageNumber(prevCurrentPageNumber => {

                if (prevCurrentPageNumber < numberOfPages) {

                    return ++prevCurrentPageNumber;
                }

                return prevCurrentPageNumber;
            })
        },
        onPrev: () => {

            setCurrentPageNumber(prevCurrentPageNumber => {

                if (1 < prevCurrentPageNumber) {

                    return --prevCurrentPageNumber;
                }

                return prevCurrentPageNumber;
            })
        }
    }

    return {
        currentPageNumber,
        numberOfPages,
        isUpdating,
        isLoading,
        ...listeners
    };
}