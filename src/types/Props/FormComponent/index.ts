import { IDisabled } from "./IDisabled";

import { InteractiveComponent } from "./InteractiveComponent";

export type FormComponent<T, K = T> = IDisabled & InteractiveComponent<T, K>;

export * from "./IDisabled";

export * from "./InteractiveComponent";