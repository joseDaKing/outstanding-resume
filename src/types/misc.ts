import { IOnChange, IValue } from "./Props";

export type ArrayValues<T extends readonly any[]> = T[Extract<keyof T, `${number}`>];


export type Bind<T extends Object> = <K extends keyof T>(key: K) =>  Required<IValue<T[K]> & IOnChange<T[K]>>;

export type Get<T, K extends string> = K extends keyof T ? T[K] : never;