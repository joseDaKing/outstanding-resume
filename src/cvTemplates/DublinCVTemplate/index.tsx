import { RootState } from "state";

import { 
    Document,
    Page
}
from "@react-pdf/renderer";

import { Sidebar } from "./Sidebar";

import { Body } from "./Body";

import img from "./dublin_preview.jpg";



const DublinCVTemplate: React.FC<RootState> = state => {

    return (
        <Document>
            <Page
            style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "stretch"
            }}>
                <Sidebar 
                {...state}/>

                <Body
                {...state}/>
            </Page>
        </Document>
    );
}

export const dublin = {
    template: DublinCVTemplate,
    name: "dublin",
    img,
}