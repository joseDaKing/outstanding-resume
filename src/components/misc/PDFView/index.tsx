import React, { useState } from "react";

import { Box, Stack } from "../../layout";

import { DocumentProps } from "react-pdf";

import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

import { pdf } from "@react-pdf/renderer";

import { Header } from "./Header";

import { useAsync } from "react-use";

import { useBoundingclientrectRef, useMediaMatch, usePreviousDifferent } from "rooks";

import { AnimatePresence, motion } from "framer-motion";

import { MdOpenInFull } from "react-icons/md";

import { styled } from "../../../stitches";

const IconContainer = styled(Stack, {
    _size: "$12",
    color: "white",
    alignItems: "center",
    borderRadius: "$full",
    backgroundColor: "$light-blue-400",
    transitionDuration: "$100",
    transitionProperty: "all",
});

export interface IPDFViewProps {
    document: JSX.Element;
    onClick?: () => void;
    scale?: number;
}

export const PDFView: React.FC<IPDFViewProps> = ({ document, onClick, scale: baseScale = 0.5 }) => { 

    const [isLoading, setIsLoading] = useState(true);

    const [numberOfPages, setNumberOfPages] = useState(1);
    
    const [currentPage, setCurrentPage] = useState(1);

    const onPDFLoadSuccess: DocumentProps["onLoadSuccess"] = ({ numPages }) => setNumberOfPages(numPages);
        
    const onPDFRenderSuccess = () => setIsLoading(false);

    const result = useAsync(async () => { 

        setIsLoading(true);

        if (!document) {

            return null;
        }

        const blob = await pdf(document).toBlob();
        
        const url = URL.createObjectURL(blob);

        return { url };
    }, [document]);

    const prevResult = usePreviousDifferent(result);

    const [ref, containerRect] = useBoundingclientrectRef();
    
    const containerWidth = containerRect?.width ?? 1;

    const containerHeight = containerRect?.height ?? 1;

    const isLandscape = useMediaMatch("(orientation: landscape)");

    const { scale, width, height } = getScale({
        containerHeight,
        containerWidth,
        isLandscape,
        baseScale
    });

    const clickable = !!onClick;

    return ( 
        <Stack
        ref={ref}
        axis="y"
        align="center"
        css={{
            height: "100%",
            flexBasis: "100%",
            alignItems: "center",
        }}>
            <Box
            as="span" 
            inline>  
                <Header
                isLoading={isLoading}
                setCurrentPageNumber={setCurrentPage}
                currentPageNumber={currentPage}
                numberOfPages={numberOfPages}/>

                <Box
                css={{
                    overflow: "hidden",
                    userSelect: "none",
                    borderRadius: "$md",
                    position: "relative",
                    width, 
                    height,
                    cursor: clickable ? "pointer" : "default",
                    [`& ${IconContainer}`]: {
                        opacity: 0,
                        transform: "scale(0)",
                        display: clickable ? "flex" : "none"
                    },
                    [`&:hover ${IconContainer}`]: {
                        opacity: 1,
                        transform: "scale(1)"
                    }
                }}>
                    <PDFSkeleton
                    width={width}
                    height={height}/>

                    <Box 
                    css={{
                        position: "absolute",
                        zIndex: "$10"
                    }}>
                        <DocumentContainer
                        scale={scale}
                        file={prevResult?.value}
                        currentPage={currentPage}/>
                    </Box>

                    <AnimatePresence exitBeforeEnter>
                        <Box
                        key={result.value?.url}
                        as={motion.div}
                        css={{
                            position: "relative",
                            zIndex: "$20"
                        }}
                        variants={{
                            open: { 
                                opacity: 1
                            },
                            hidden: {
                                opacity: 0
                            }
                        }}
                        initial="hidden"
                        animate="open"
                        exit="hidden"
                        transition={{ 
                            duration: 0.5, 
                            delay: 0.25
                        }}>
                            <DocumentContainer
                            scale={scale}
                            file={result.value}
                            currentPage={currentPage}
                            onLoadSuccess={onPDFLoadSuccess}
                            onRenderSuccess={onPDFRenderSuccess}/>
                        </Box>
                    </AnimatePresence>

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
                    </Stack>
                </Box>
            </Box>
        </Stack>
    );
}



const BASE_WIDTH = 350;

const BASE_HEIGHT = 578;

const A4_WIDTH_IN_PX = 593;

const A4_HEIGHT_IN_PX = 840;

interface IGetScaleArgs {
    containerWidth: number;
    containerHeight: number;
    isLandscape: boolean;
    canBeVertical?: boolean;
    baseScale?: number;
}

function getScale({ 
    containerWidth,
    containerHeight,
    isLandscape,
    baseScale = 0.4,
    canBeVertical = true
}: IGetScaleArgs) {

    const scaleVertical = containerWidth / BASE_WIDTH * baseScale;

    const scaleHorizontal = containerHeight / BASE_HEIGHT * baseScale;

    const scale = (!isLandscape && canBeVertical) ? scaleVertical : scaleHorizontal;

    return {
        scale,
        width: A4_WIDTH_IN_PX * scale,
        height: A4_HEIGHT_IN_PX * scale
    };
}



interface IPDFSkeletonProps {
    height: number;
    width: number;
}

function PDFSkeleton({ height, width }: IPDFSkeletonProps) {

    return (
        <Box
        css={{
            backgroundColor: "white",
            position: "absolute",
            width,
            height
        }}/>
    );
}



interface IDocumentContainerProps {
    scale?: number; 
    width?: number;
    height?: number;
    currentPage: number;
    onLoadSuccess?: DocumentProps["onLoadSuccess"];
    onRenderSuccess?: () => void;
    file?: {
        url: string;
    } | null;
}

function DocumentContainer({ 
    scale,
    width,
    height,
    currentPage,
    onLoadSuccess,
    onRenderSuccess,
    file
}: IDocumentContainerProps) {

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