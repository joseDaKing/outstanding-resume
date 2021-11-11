import type { ReactElement, JSXElementConstructor } from "react";

import ReactPDF from "@react-pdf/renderer";

import { IOnChange, IValue } from "./Props";
import { Merge } from "type-fest";

export type ArrayValues<T extends readonly any[]> = T[Extract<keyof T, `${number}`>];

type PDFJSX = (
    ReactElement<
        ReactPDF.DocumentProps, 
        string 
        | JSXElementConstructor<any>
    > 
    | null 
    | undefined
);

type PDFComponentPropsWithChildren<T extends {}> = Merge<{ children: PDFJSX; }, T>;

export type PDFComponent<T extends {} = {}> = (props: PDFComponentPropsWithChildren<T>) => PDFJSX;

export type Simplify<T> = {
    [K in keyof T]: T[K];
}

export type Bind<T extends Object> = <K extends keyof T>(key: K) =>  Required<IValue<T[K]> & IOnChange<T[K]>>;

export type Get<T, K extends string> = K extends keyof T ? T[K] : never;