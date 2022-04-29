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
    PDFDownloadButton
}
from "components/pdf";

import { MadridCVTemplate } from "cvTemplates";

import { useAppSelector } from "state";

import { useFileName } from "helpers";

import { useState } from "react";



export const Fullscreen: React.FC = () => {

    const navigate = useNavigate();

    const locationState = (useLocation().state ?? {}) as any;

    const initialPage = locationState.page ?? 1;

    const [ page, setPage ] = useState(initialPage);

    const state = useAppSelector(state => state);
    
    const downloadName = useFileName();

    return (
        <Box
        css={{
            height: "100vh",
            overflow: "hidden",
            gradientDirection: "45deg",
            gradientFrom: "$primary9",
            gradientTo: "$secondary9",
        }}>
            <Box
            css={{
                position: "relative",
                zIndex: 1000,
                boxShadow: "$xl",
                padding: "$3",
                backgroundColor: "$inverted"
            }}>
                <Box
                css={{
                    margin: "auto",
                    maxWidth: "$5xl",
                    width: "100%"
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
                            Tillbaka till redigerare
                        </Button>

                        <PDFDownloadButton
                        css={{
                            marginLeft: "auto"
                        }}
                        state={state}
                        Document={MadridCVTemplate}
                        downloadName={downloadName}
                        variant="text"/>
                    </Stack>
                </Box>
            </Box>
            
            <ScrollArea
            css={{
                height: "100%"
            }}>
                <Box
                css={{
                    padding: "$10",
                    paddingBottom: "$20",
                    margin: "auto",
                    width: "65%"
                }}>
                    <PDFView
                    scale={2}
                    state={state}
                    page={page}
                    onPageChange={setPage}
                    Document={MadridCVTemplate}/>
                </Box>
            </ScrollArea>
        </Box>
    );
}