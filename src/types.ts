import type { ReactElement, JSXElementConstructor } from "react";

import ReactPDF from "@react-pdf/renderer";

export type ArrayValues<T extends readonly any[]> = T[Extract<keyof T, `${number}`>];

export type PDFTemplate = ReactElement<ReactPDF.DocumentProps, string | JSXElementConstructor<any>>;;

export interface IID<ID extends string = string> {
    id: ID;
}