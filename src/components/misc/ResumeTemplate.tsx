import { PDFComponent } from "../../types";

import { Document, Page } from "@react-pdf/renderer";

interface IResumeTemplateProps {}

export const ResumeTemplate: PDFComponent<IResumeTemplateProps> = props => {

    return (
        <Document>
            <Page>

            </Page>
        </Document>
    );
}