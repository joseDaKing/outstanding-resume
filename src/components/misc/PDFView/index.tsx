import React, { useEffect, useState } from "react";

import { PDFSkeleton } from "./PDFSkeleton";

import { Box, Stack } from "../../layout";

import { usePDF } from "@react-pdf/renderer";

import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

import { Header } from "./Header";

export interface IPDFViewSharedProps {
    scale?: number;
    Document: React.FC;
    changes?: string[]
}

export const PDFView: React.FC<IPDFViewSharedProps> = ({ Document: PDF, changes, scale }) => { 

    const [instance, updateInstance] = usePDF({
        document: <PDF/>
    });

    const change = JSON.stringify(changes ?? []);

    useEffect(() => updateInstance(), [change]);

    const [isLoading, setIsLoading] = useState(true);

    const [numberOfPages , setNumberOfPages] = useState(1);
    
    const [currentPage, setCurrentPage] = useState(1);

    const defaultedScale = scale ?? 0.5;

    const nodData = (
        <PDFSkeleton
        scale={defaultedScale}/>
    );

    return (
        <Stack
        axis="y"
        align="center"
        css={{
            height: "100%",
            alignItems: "center",
        }}>
            <Box
            as="span" 
            inline>  
                <Header
                setCurrentPageNumber={setCurrentPage}
                currentPageNumber={currentPage}
                numberOfPages={numberOfPages}/>

                <Box
                css={{
                    overflow: "hidden",
                    userSelect: "none",
                    borderRadius: "$md",
                }}>
                    {instance.url ?
                    <Document
                    noData={nodData}
                    loading={nodData}
                    file={{ url: instance.url }}
                    onLoadSuccess={({ numPages }) => setNumberOfPages(numPages)}>
                        <Page
                        onRenderSuccess={() => setIsLoading(false)}
                        noData={nodData}
                        loading={nodData}
                        pageNumber={currentPage}
                        scale={defaultedScale}/>
                    </Document>
                    : nodData}
                </Box>
            </Box>
        </Stack>
    );
}