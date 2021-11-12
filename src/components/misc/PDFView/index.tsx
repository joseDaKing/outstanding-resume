import React, { useState } from "react";

import { PDFSkeleton } from "./PDFSkeleton";

import { Box, Stack } from "../../layout";

import { DocumentProps } from "react-pdf";

import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

import { pdf } from "@react-pdf/renderer";

import { Header } from "./Header";

import { useAsync } from "react-use";


export interface IPDFViewSharedProps {
    scale?: number;
    document: JSX.Element;
    changes: Array<string>;
}

export const PDFView: React.FC<IPDFViewSharedProps> = ({ document, changes, scale }) => { 

    const loading = useState(true);

    const setIsLoading = loading[1];

    const [numberOfPages , setNumberOfPages] = useState(1);
    
    const [currentPage, setCurrentPage] = useState(1);

    const defaultedScale = scale ?? 0.5;

    const noData = (
        <PDFSkeleton
        scale={defaultedScale}/>
    );

    const onLoadSuccess: DocumentProps["onLoadSuccess"] = ({ numPages }) => setNumberOfPages(numPages);
        
    const onRenderSuccess = () => setIsLoading(false);

    const { value: url } = useAsync(async () => {
        
        const blob = await pdf(document).toBlob();
        
        const url = URL.createObjectURL(blob);

        return url;

    }, [changes.join("")]);

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
                    {url ?
                    <Document                
                    file={url}
                    noData={noData}
                    loading={noData}
                    onLoadSuccess={onLoadSuccess}>
                        <Page
                        scale={defaultedScale}
                        noData={noData}
                        loading={noData}
                        pageNumber={currentPage}
                        onRenderSuccess={onRenderSuccess}/>
                    </Document>
                    : noData}
                </Box>
            </Box>
        </Stack>
    );
}