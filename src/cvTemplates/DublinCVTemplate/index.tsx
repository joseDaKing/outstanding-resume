import { RootState } from "state";

import { 
    Document,
    Page
}
from "@react-pdf/renderer";

import { Sidebar } from "./Sidebar";

import { Body } from "./Body";



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
    img: "https://s3.resume.io/uploads/local_template_image/image/446/persistent-resource/dublin-cv-mallar.jpg",
    name: "dublin"
}