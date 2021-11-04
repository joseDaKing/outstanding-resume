import { IDisabled } from "./IDisabled";

import { IValue } from "./IValue";

import { IOnChange } from "./IOnChange";

export type InteractiveComponent<T, K = T> = IDisabled & IValue<T> & IOnChange<K>;

export * from "./IOnChange";

export * from "./IValue";

export * from "./IDisabled";