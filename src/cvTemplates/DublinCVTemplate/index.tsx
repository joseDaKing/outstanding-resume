import { RootState } from "state";

import { 
    Document,
    Page
}
from "@react-pdf/renderer";

import { Sidebar } from "./Sidebar";

import { Body } from "./Body";



export const DublinCVTemplate: React.FC<RootState> = state => {

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