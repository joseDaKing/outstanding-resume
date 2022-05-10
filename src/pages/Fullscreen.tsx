import { 
    Box,
    Stack,
    ScrollArea
}
from "components/layout";

import { ChevronLeftIcon } from "@radix-ui/react-icons";

import { Button } from "components/form";

import { useLocation, useNavigate } from "react-router-dom";

import { 
    PDFView, 
    PDFDownloadButton,
    PDFTemplatePreview
}
from "components/pdf";

import { useDownloadName, usePDFLink } from "helpers";

import { useState } from "react";

import * as cvTemplates from "cvTemplates";



export const Fullscreen: React.FC = () => {

    const navigate = useNavigate();

    const locationState = (useLocation().state ?? {}) as any;

    const initialPage = locationState.page ?? 1;

    const [ page, setPage ] = useState(initialPage); 
    
    const downloadName = useDownloadName();

    const url = usePDFLink() || "";

    return (
        <Stack
        orientation="vertical" 
        wrap={false}
        css={{
            alignItems: "stretch",
            justifyContent: "stretch",
            maxHeight: "100vh",
            maxWidth: "100vw",
        }}>
            <Box
            css={{
                flexShrink: 1,
                position: "relative",
                zIndex: 1000,
                boxShadow: "$xl",
                padding: "$3",
                backgroundColor: "$inverted",
            }}>
                <Box
                css={{
                    margin: "auto",
                    maxWidth: "$5xl",
                    width: "100%",
                }}>
                    <Stack
                    alignMain="start">
                        <Button
                        onClick={() => navigate("/", {
                            state: {
                                page
                            }
                        })}
                        variant="text"
                        StartIcon={ChevronLeftIcon}>
                            Back to editor
                        </Button>

                        <PDFDownloadButton
                        css={{
                            marginLeft: "auto"
                        }}
                        src={url}
                        downloadName={downloadName}
                        variant="text"/>
                    </Stack>
                </Box>
            </Box>
           
            <Stack
            css={{
                flexShrink: 1,
                overflow: "hidden",
                maxHeight: "100%",
                width: "100%",
                justifyContent: "stretch",
                alignItems: "stretch"
            }}>
                <Box
                css={{
                    flexShrink: 1,
                    width: "$1__3",
                }}>
                    <ScrollArea>
                        <Stack
                        wrap
                        css={{
                            justifyContent: "space-between",
                            padding: "$8",
                            gap: "$6"
                        }}>
                            {Object.values(cvTemplates).reverse().map(({ img, name }) => (
                                <PDFTemplatePreview 
                                name={name}
                                src={img}/>
                            ))}
                        </Stack>
                    </ScrollArea>
                </Box>

                <ScrollArea
                css={{
                    flexGrow: 1,
                    width: "$2__3",
                    gradientDirection: "45deg",
                    gradientFrom: "$primary9",
                    gradientTo: "$secondary9",
                }}>
                    <Box
                    css={{
                        padding: "$10",
                        paddingBottom: "$20",
                        margin: "auto",
                        width: "75%"
                    }}>
                        <PDFView
                        src={url}
                        scale={2}
                        page={page}
                        onPageChange={setPage}/>
                    </Box>
                </ScrollArea>
            </Stack>
        </Stack>
    );
}