import { 
    Box,
    Stack,
}
from "components/layout";

import { useDownloadName, usePDFLink } from "helpers";

import { PDFDownloadButton, PDFView } from "components/pdf";

import { useLocation, useNavigate } from "react-router-dom";

import { useState } from "react";

import { Button } from "components/form";



export const Preview: React.FC = () => {

    const navigate = useNavigate();

    const locationState = (useLocation().state ?? {}) as any;

    const initialPage = locationState.page ?? 1;

    const [ page, setPage ] = useState(initialPage);

    const onClikcHandler = () => navigate("/preview", {
        state: {
            page
        }
    });

    const url = usePDFLink() || "";
    
    const downloadName = useDownloadName();
    
    return (
        <Stack 
        fullY
        orientation="vertical"
        alignMain="center" 
        css={{
            gap: "$4",
            width: "$full",
            gradientDirection: "45deg",
            gradientFrom: "$primary9",
            gradientTo: "$secondary9" ,
            position: "relative",
            padding: "$10",
            paddingX: "$14",
        }}>
            <Box
            css={{
                width: "52.5%",
                "@2xl": {
                    width: "$2__5"
                }
            }}>
                <PDFView
                page={page}
                onPageChange={setPage}
                onClick={onClikcHandler}
                src={url}
                scale={1}/>
            </Box>

            <Stack
            css={{
                gap: "$4"
            }}>
                <Button
                onClick={onClikcHandler}
                variant="inverted">
                    Choose template
                </Button>

                <PDFDownloadButton
                src={url}
                variant="inverted"
                downloadName={downloadName}/>
            </Stack>
        </Stack>
    )
}