import { ISize } from "./ISize";

import { ILabel } from "./ILabel";

import { IIline } from "../IInline";

import { InteractiveComponent } from "./InteractiveComponent";

export type FormComponent<T, K = T> = ISize & ILabel & IIline & InteractiveComponent<T, K>;

export * from "./ISize";

export * from "./ILabel";

export * from "./InteractiveComponent";