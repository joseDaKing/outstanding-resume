import React, { useMemo } from "react";

import { Stack, Box } from "../components/layout";

import { Paginator, PDFView, usePDFView } from "../components/misc";

import { useDebouncedValue } from "rooks";

import { Berlin } from "../resumes";

import { useAppSelector } from "../store";

import { Button } from "../components/form";

import { PDFDownloadLink } from "@react-pdf/renderer";

import { getFileName } from "../utilities";

import { useNavigate } from "react-router";

import { MdKeyboardArrowLeft } from "react-icons/md";

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

    const fileName = getFileName(store);

    const navigator = useNavigate();

    const onClickHandler = () => navigator("/");

    const pdfViewProps = usePDFView();

    return (
        <Stack
        axis="y"
        css={{
            _size: "$screen",
            backgroundColor: "$blue-gray-500",
            overflow: "hidden",
        }}>
            <Stack
            axis="x"
            align="center"
            css={{
                backgroundColor: "$blue-gray-900",
                _paddingX: "$8",
                _paddingY: "$3",
                flexBasis: "auto",
                alignItems: "center"
            }}>

                <Stack 
                onClick={onClickHandler}
                align="start"
                css={{
                    color: "White",
                    fontSize: "$md",
                    letterSpacing: "$wider",
                    fontFamily: "sans-serif",
                    _backgroundColor: "white",
                    _backgroundOpacity: 0,
                    transitionDuration: "$100",
                    transitionProperty: "all",
                    _paddingX: "$4",
                    _paddingY: "$2",
                    borderRadius: "$full",
                    "&:hover": {
                        _backgroundOpacity: 0.2
                    },
                    width: "auto",
                    marginRight: "auto"
                }}
                as="button">
                    
                    <MdKeyboardArrowLeft
                    style={{
                        transform: "translateX(-25%)",
                        display: "inline"
                    }} 
                    size={24}/>

                    <Box>
                        Tillbaka till redigare
                    </Box>
                </Stack>

                <Box
                css={{
                    marginLeft: "auto"
                }}>
                    <PDFDownloadLink 
                    document={resume}>
                        {({ url }) => (
                            <>
                                {url && (
                                    pdfViewProps.isLoading ?
                                    <a
                                    download={fileName}
                                    href={url ?? ""}>
                                        <Button
                                        inline>
                                            Ladda ner (PDF)
                                        </Button>
                                    </a> :
                                    <Button
                                    disabled
                                    inline>
                                        Ladda ner (PDF)
                                    </Button>
                                )}
                            </>
                        )}
                    </PDFDownloadLink>
                </Box>
            </Stack>

            <Box
            css={{
                padding: "$8",
                overflowY: "scroll"
            }}>
                <Box
                css={{
                    top: 0,
                    zIndex: "$50",
                    position: "sticky"
                }}>
                    <Paginator 
                    dark
                    {...pdfViewProps}/>
                </Box>

                <PDFView
                {...pdfViewProps}
                scale={1.4}
                document={resume}/>
            </Box>
        </Stack>
    );
}