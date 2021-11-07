import type { ReactElement, JSXElementConstructor } from "react";

import ReactPDF from "@react-pdf/renderer";

export type ArrayValues<T extends readonly any[]> = T[Extract<keyof T, `${number}`>];

export type PDFTemplate = ReactElement<ReactPDF.DocumentProps, string | JSXElementConstructor<any>>;;

export type Section = {
    sectionName: string;
};

export type Items<K = any> = Section & {
    items: Record<string, K>;
};

export type Description = {
    description: string;
}