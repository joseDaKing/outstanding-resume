import React, { useMemo } from "react";

import { useDebouncedValue } from "rooks";

import { Paginator, PDFView, usePDFView } from "../../components/misc";

import { Berlin } from "../../resumes";

import { RootState, useAppSelector } from "../../store";

import { Box, Stack } from "../../components/layout";

import { Button } from "../../components/form";

import { PDFDownloadLink } from "@react-pdf/renderer";

import { useNavigate } from "react-router";

import { getFileName } from "../../utilities";

export const Preview: React.FC = () => {

    const store = useAppSelector(store => store);

    const [debouncedStore] = useDebouncedValue(store, 1000, {
        initializeWithNull: false
    });

    const resume = useMemo(() => {
        return <Berlin {...(debouncedStore as any)}/>
    
    /* eslint-disable */
    }, [JSON.stringify(debouncedStore)]);
    /* eslint-enable */

    const fileName = getFileName(store);

    const navigator = useNavigate();

    const onClickHandler = () => navigator("/view");

    const pdfViewProps = usePDFView();

    return (
        <Stack 
        css={{
            height: "100%",
            padding: "$8"
        }}
        axis="y">
            
            <Box>
                <Paginator
                {...pdfViewProps}/>

                <PDFView
                {...pdfViewProps}
                onClick={onClickHandler}
                document={resume}/>
            </Box>

            <Box 
            css={{
                _marginY: "$4",
                flexBasis: 0,
                textAlign: "center"
            }}>
                <PDFDownloadLink 
                document={resume}>
                    {({ url }) => (
                        <a
                        download={fileName}
                        href={url ?? ""}>
                            <Button
                            inline>
                                Ladda ner (PDF)
                            </Button>
                        </a>
                    )}
                </PDFDownloadLink>
            </Box>
        </Stack>
    );
}