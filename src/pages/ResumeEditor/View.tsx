import React, { useMemo } from "react";

import { useDebouncedValue } from "rooks";

import { PDFView } from "../../components/misc";

import { Berlin } from "../../resumes";

import { useAppSelector } from "../../store";

import { Box, Stack } from "../../components/layout";

import { Button } from "../../components/form";

import { PDFDownloadLink, pdf } from "@react-pdf/renderer";

export const View: React.FC = () => {

    const store = useAppSelector(store => store);

    const [debouncedStore] = useDebouncedValue(store, 1000, {
        initializeWithNull: false
    });

    const resume = useMemo(() => {
        return <Berlin {...(debouncedStore as any)}/>
    
    /* eslint-disable */
    }, [JSON.stringify(debouncedStore)]);
    /* eslint-enable */

    const { firstName, lastName } = store["contact-details"].fields;

    let fileName = "resume";

    if (firstName && lastName) {

        fileName = `${firstName}_${lastName}`;
    }
    else if (firstName) {

        fileName = `${firstName}`;
    }
    else if (lastName) {

        fileName = `${lastName}`;
    }

    return (
        <Stack 
        css={{
            height: "100%"
        }}
        axis="y">
            <PDFView
            document={resume}/>

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