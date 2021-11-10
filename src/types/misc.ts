import type { ReactElement, JSXElementConstructor } from "react";

import ReactPDF from "@react-pdf/renderer";

import { IOnChange, IValue } from "./Props";

export type ArrayValues<T extends readonly any[]> = T[Extract<keyof T, `${number}`>];

export type PDFComponent<T extends {} = {}> = (props: T) => ReactElement<ReactPDF.DocumentProps, string | JSXElementConstructor<any>>;

export type Simplify<T> = {
    [K in keyof T]: T[K];
}

export type Bind<T extends Object> = <K extends keyof T>(key: K) =>  Required<IValue<T[K]> & IOnChange<T[K]>>;