import { ILabel } from "./ILabel";

import { InteractiveComponent } from "./InteractiveComponent";

export type FormComponent<T, K = T> = ILabel & InteractiveComponent<T, K>;

export * from "./ILabel";

export * from "./InteractiveComponent";