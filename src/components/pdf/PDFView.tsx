import { AspectRatio } from "@radix-ui/react-aspect-ratio";

import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

import { Box, Stack } from "components/layout";

import React, { useState } from "react";

import { IconButton } from "components/form";

import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";

import { SizeIcon } from "@radix-ui/react-icons";

import { RootState } from "state";

import { usePDFLink, useValue, UseValueProps } from "helpers";



type PDFViewPaginaterProps = UseValueProps<number> & {
    amountOfPages: number;
};

const PDFViewPaginater: React.FC<PDFViewPaginaterProps> = props => {

    const [ pageNumber, setPageNumber ] = useValue({
        initialValue: 1,
        ...props
    });

    const prevPage = () => setPageNumber(prevPageNumber => {

        const newPageNumber = prevPageNumber - 1;

        if (0 < newPageNumber) {

            return newPageNumber;
        }

        return prevPageNumber;
    });

    const nextPage = () => setPageNumber(prevPageNumber => {

        const newPageNumber = prevPageNumber +  1;

        if (prevPageNumber < props.amountOfPages) {

            return newPageNumber;
        }

        return prevPageNumber;
    });

    return (
        <Stack
        css={{
            gap: "$4",
            position: "sticky",
            top: "$8",
            zIndex: 10,
            padding: "$1",
            borderRadius: "$round",
            width: "fit-content",
            margin: "auto",
            backgroundColor: "$neutralA10"
        }}>
            <IconButton
            css={{
                boxShadow: "$xl"
            }}
            round
            size="sm"
            variant="inverted"
            Icon={ChevronLeftIcon}
            disabled={pageNumber === 1}
            onClick={prevPage}/>
            
            <Box
            css={{
                color: "$inverted"
            }}>
                {pageNumber} / {props.amountOfPages}
            </Box>

            <IconButton
            css={{
                boxShadow: "$xl"
            }}
            round
            size="sm"
            variant="inverted"
            Icon={ChevronRightIcon}
            onClick={nextPage}
            disabled={pageNumber === props.amountOfPages}/>
        </Stack>
    );
}



type PDFViewBodyProps = {
    onClick?: () => void;
    scale?: number;
    pageNumber?: number;
    onAmoundOfPage?: (value: number) => void;
    url: string | null;
}

const PDFViewBody: React.FC<PDFViewBodyProps> = props => {

    const element = <div/>;

    return (
        <Box
        as={AspectRatio}
        ratio={1 / Math.SQRT2}
        css={{
            userSelect: "none",
            position: "relative",
            borderRadius: "$sm",
            overflow: "hidden",
            backgroundColor: "$inverted",
            "& .react-pdf__Document": {
                size: "$full !important"
            },
            "& .react-pdf__Page, & .react-pdf__Page__canvas, & .react-pdf__message": {
                size: "inherit !important",
            }
        }}>
            {props.onClick &&
            <Stack
            onClick={props.onClick}
            css={{
                inset: 0,
                zIndex: 10000,
                cursor: "pointer",
                position: "absolute",
                [`&:hover ${IconButton}`]: {
                    opacity: 1,
                }
            }}>
                <IconButton
                round
                css={{
                    opacity: 0,
                    transition: "$200",
                    transitionProperty: "opacity",
                    focus: {
                        opacity: 1
                    }
                }}
                Icon={SizeIcon}/>
            </Stack>}

            { 
            props.url &&
            <Document
            file={props.url}
            onLoadSuccess={({ numPages }) => props.onAmoundOfPage && props.onAmoundOfPage(numPages)}
            error={element}
            noData={element}
            loading={element}>
                <Page
                scale={props.scale}
                pageNumber={props.pageNumber}
                error={element}
                noData={element}
                loading={element}/>
            </Document>}
        </Box>
    );
}



type PDFViewProps = {
    Document: React.FC<RootState>;
    state: RootState;
    onClick?: () => void;
    scale?: number,
    page?: number;
    defaultPage?: number;
    onPageChange?: (value: number) => void;
}

export const PDFView: React.FC<PDFViewProps> = props => {

    const [ amountOfPages, setAmountOfPages ] = useState(1);

    const [ pageNumber, setPageNumber ] = useValue({
        initialValue: 1,
        value: props.page,
        defaultValue: props.defaultPage,
        onValueChange: props.onPageChange
    });

    const url = usePDFLink(props.state, props.Document);
    
    return (
        <Box
        css={{
            spaceY: "$4"
        }}>
            <PDFViewPaginater
            value={pageNumber}
            onValueChange={setPageNumber}
            amountOfPages={amountOfPages}/>

            <PDFViewBody
            url={url}
            pageNumber={pageNumber}
            scale={props.scale}
            onClick={props.onClick}
            onAmoundOfPage={setAmountOfPages}/>
        </Box>
    );
}