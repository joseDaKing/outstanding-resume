import { AspectRatio } from "@radix-ui/react-aspect-ratio";

import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

import { Box, Stack } from "components/layout";

import { usePDF } from "@react-pdf/renderer";

import { memo, useState } from "react";

import { IconButton } from "components/form";

import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";

import { SizeIcon } from "@radix-ui/react-icons";

import { RootState } from "state";

import { useOnChange } from "helpers";

import { useDebounce } from "use-debounce";



type PDFViewProps = {
    Document: React.FC<RootState>;
    state: RootState;
    onClick?: () => void;
    scale?: number
}

export const PDFView: React.FC<PDFViewProps> = props => {

    const { 
        scale, 
        Document: PDFDocument, 
        state, 
        onClick 
    } = props;

    const [ amountOfPages, setAmountOfPages ] = useState(1);

    const [ pageNumber, setPageNumber ] = useState(1);

    const [ serializeDebouncedState ] = useDebounce(JSON.stringify(state), 600);

    const debouncedState: RootState = JSON.parse(serializeDebouncedState);

    const [ instance, update ] = usePDF({ document: <PDFDocument {...state}/> });

    useOnChange(update, [ PDFDocument, JSON.stringify(state) ]);

    const prevPage = () => setPageNumber(prevPageNumber => {

        const newPageNumber = prevPageNumber - 1;

        if (0 < newPageNumber) {

            return newPageNumber;
        }

        return prevPageNumber;
    });

    const nextPage = () => setPageNumber(prevPageNumber => {

        const newPageNumber = prevPageNumber +  1;

        if (prevPageNumber < amountOfPages) {

            return newPageNumber;
        }

        return prevPageNumber;
    });

    const element = <div/>;

    return (
        <Box
        css={{
            spaceY: "$4"
        }}>
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
                    {pageNumber} / {amountOfPages}
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
                disabled={pageNumber === amountOfPages}/>
            </Stack>

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
                {onClick &&
                <Stack
                onClick={onClick}
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

                {!instance.loading && 
                instance.url &&
                <Document
                options={{}}
                file={instance.url}
                onLoadSuccess={({ numPages }) => setAmountOfPages(numPages)}
                error={element}
                noData={element}
                loading={element}>
                    <Page
                    scale={scale}
                    pageNumber={pageNumber}
                    error={element}
                    noData={element}
                    loading={element}/>
                </Document>}
            </Box>
        </Box>
    );
}

/*
const MemoPDFView = memo(PDFView, (currentProps, previousProps) => {

    return true;
});

export {
    MemoPDFView as PDFView
}
*/