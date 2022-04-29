import { 
    Box,
    Stack,
}
from "components/layout";

import { useAppSelector } from "state";

import { useFileName } from "helpers";

import { PDFDownloadButton, PDFView } from "components/pdf";

import { MadridCVTemplate } from "cvTemplates";

import { useNavigate } from "react-router-dom";



export const Preview: React.FC = () => {

    const navigate = useNavigate();

    const onClikcHandler = () => navigate("/preview");

    const state = useAppSelector(state => state);
    
    const downloadName = useFileName();

    return (
        <Stack 
        fullY
        orientation="vertical"
        alignMain="center" 
        css={{
            gap: "$4",
            width: "$1__2",
            padding: "$8", 
            gradientDirection: "45deg",
            gradientFrom: "$primary9",
            gradientTo: "$secondary9" ,
            position: "relative",
        }}>
            <Box
            css={{
                width: "52.5%",
            }}>
                <PDFView
                onClick={onClikcHandler}
                state={state}
                Document={MadridCVTemplate}
                scale={0.75}/>
            </Box>

            <PDFDownloadButton
            variant="inverted"
            state={state}
            downloadName={downloadName}
            Document={MadridCVTemplate}/>
        </Stack>
    )
}