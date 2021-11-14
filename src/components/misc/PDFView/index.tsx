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
    changes?: Array<string>;
}

export const PDFView: React.FC<IPDFViewSharedProps> = ({ document, changes, scale = 0.5 }) => { 

    const loading = useState(true);

    const setIsLoading = loading[1];

    const [numberOfPages, setNumberOfPages] = useState(1);
    
    const [currentPage, setCurrentPage] = useState(1);

    const noData = (
        <PDFSkeleton
        scale={scale}/>
    );

    const pdfViewProps = {
        error: noData,
        noData: noData,
        loading: noData,
    }

    const onLoadSuccess: DocumentProps["onLoadSuccess"] = ({ numPages }) => setNumberOfPages(numPages);
        
    const onRenderSuccess = () => setIsLoading(false);

    const result = useAsync(async () => { 

        try {

            if (!document) {

                return null;
            }

            console.log(document);

            const blob = await pdf(document).toBlob();
            
            const url = URL.createObjectURL(blob);
    
            return { url };
        }
        catch(error) {

            console.log(error);

            throw error;
        }
    }, [document]);

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

                    {result.value ?
                    <Document  
                    {...pdfViewProps}      
                    file={result.value}
                    onLoadSuccess={onLoadSuccess}>
                        <Page
                        {...pdfViewProps}
                        scale={scale}
                        pageNumber={currentPage}
                        onRenderSuccess={onRenderSuccess}/>
                    </Document> : null}

                    {(result.loading || result.error) ? noData : null}
                </Box>
            </Box>
        </Stack>
    );
}